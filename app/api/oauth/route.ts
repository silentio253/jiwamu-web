import { NextRequest, NextResponse } from "next/server";

const GITHUB_CLIENT_ID = "Ov23liEokOTUaRWAV8jL";
const GITHUB_CLIENT_SECRET = "42068102b0494882fc3cc93b8bd1b143f9b7ce3e";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");

  if (!code) {
    // Step 1: Redirect to GitHub OAuth
    const githubAuthUrl = new URL("https://github.com/login/oauth/authorize");
    githubAuthUrl.searchParams.set("client_id", GITHUB_CLIENT_ID);
    githubAuthUrl.searchParams.set("redirect_uri", `${request.nextUrl.origin}/api/oauth/callback`);
    githubAuthUrl.searchParams.set("scope", "repo,user");
    githubAuthUrl.searchParams.set("state", "decap-cms");

    return NextResponse.redirect(githubAuthUrl.toString());
  }

  // Step 2: Exchange code for token (when GitHub redirects back)
  try {
    const tokenResponse = await fetch(
      "https://github.com/login/oauth/access_token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          client_id: GITHUB_CLIENT_ID,
          client_secret: GITHUB_CLIENT_SECRET,
          code,
        }),
      },
    );

    const tokenData = await tokenResponse.json();

    if (tokenData.error) {
      return new NextResponse(
        `<!DOCTYPE html>
<html>
<head><title>Error</title></head>
<body>
<h1>OAuth Error</h1>
<p>${tokenData.error}: ${tokenData.error_description}</p>
<p><a href="/admin">Try again</a></p>
</body>
</html>`,
        { status: 400, headers: { "Content-Type": "text/html" } },
      );
    }

    // Step 3: Return token to Decap CMS via postMessage
    const html = `<!DOCTYPE html>
<html>
<head><title>Authorizing...</title></head>
<body>
<p>Authorizing, please wait...</p>
<script>
(function() {
  var token = "${tokenData.access_token}";
  var provider = "github";

  // Method 1: Decap CMS expected format
  function sendToken() {
    try {
      // Try the string format first
      var msg = "authorization:" + provider + ":success:" + JSON.stringify({token: token, provider: provider});
      if (window.opener) {
        window.opener.postMessage(msg, "*");
      }
    } catch(e) {
      console.error("Method 1 failed:", e);
    }

    try {
      // Also try object format
      if (window.opener) {
        window.opener.postMessage({
          type: "authorization",
          token: token,
          provider: provider
        }, "*");
      }
    } catch(e) {
      console.error("Method 2 failed:", e);
    }
  }

  sendToken();

  // Delay close to ensure message is delivered
  setTimeout(function() {
    window.close();
  }, 500);
})();
</script>
</body>
</html>`;

    return new NextResponse(html, {
      headers: { "Content-Type": "text/html" },
    });
  } catch {
    return new NextResponse(
      `<!DOCTYPE html>
<html>
<head><title>Error</title></head>
<body>
<h1>OAuth Error</h1>
<p>Failed to exchange code for token</p>
<p><a href="/admin">Try again</a></p>
</body>
</html>`,
      { status: 500, headers: { "Content-Type": "text/html" } },
    );
  }
}
