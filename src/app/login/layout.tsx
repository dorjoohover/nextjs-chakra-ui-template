import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Нэвтрэх",
};
export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
