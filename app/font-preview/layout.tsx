import { FontPreviewProvider } from "./font-provider";

export default function FontPreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <FontPreviewProvider>{children}</FontPreviewProvider>;
}
