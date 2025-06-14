import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import getSiteConfig from "./api/siteConfig";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Garage B",
  description: "Generated by TheGym",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data } = await getSiteConfig();

  return (
    <html lang="en">
      <head>
        {
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={data.navbar?.favicon?.url}
          />
        }
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={data.navbar?.favicon?.url}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={data.navbar?.favicon?.url}
        />
      </head>
      <body
        className={`${montserrat.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {data?.navbar && <Navbar {...data.navbar} />}
        {children}
        {data?.footer && <Footer {...data.footer} />}
      </body>
    </html>
  );
}
