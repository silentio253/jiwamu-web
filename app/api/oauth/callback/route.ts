import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");

  if (!code) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  // Redirect to the main OAuth handler
  return NextResponse.redirect(
    new URL(`/api/oauth?code=${code}`, request.url),
  );
}
