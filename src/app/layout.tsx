import "./globals.css";
import { sentient } from "./fonts";

export const metadata = {
  title: "Zidnuka Afrika",
  description: "Arise!Change the World",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={sentient.className} lang="en">
      <body>{children}</body>
    </html>
  );
}
