import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

const title = "Pesky Penguin Frozen Treats | Ohsweken, Ontario";
const description =
  "Island-style shaved ice, scooped ice cream, sundaes, milkshakes and fresh lemonade at 3000 4th Line Road in Ohsweken.";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "peskypenguin.ca";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");
  const metadataBase = new URL(`${protocol}://${host}`);
  const socialImage = new URL("/og.png", metadataBase).toString();

  return {
    metadataBase,
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      images: [{ url: socialImage, width: 1731, height: 909, alt: "Pesky Penguin - Cool treats. Big smiles." }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
