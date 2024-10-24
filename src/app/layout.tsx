import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NPTEL Practice App",
  description: "A web application to practice NPTEL questions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta title="viewport" content="width=device-width, initial-scale=1" />

        <title>{metadata.title}</title>
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-C89F3H5QQV"
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4918739620805879"
          crossOrigin="anonymous"
        ></script>
        <Script id="google-analytics">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', "G-C89F3H5QQV");
          `}
        </Script>
      </head>

      <body className={`${inter.className}  bg-gray-900 text-gray-200`}>
        {children}
      </body>
    </html>
  );
}
