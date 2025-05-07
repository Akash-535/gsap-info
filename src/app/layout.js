import "./globals.css";
import "./prism-theme.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Gsap Basics</title>
      </head>
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
