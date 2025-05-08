import "./globals.css";
import "./prism-theme.css";
import Header from "../components/common/components/Header";
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-bar-mini">
      <head>
        <title>Gsap Basics</title>
      </head>
      <body className={` antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
