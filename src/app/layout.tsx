import type { Metadata } from "next";
import "./globals.css";
import Particles from "./particles";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "You can find all my jobs here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div
          style={{ position: "relative", width: "100%", minHeight: "100vh" }}
        >
          {/* Particles as background */}
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              minHeight: "100vh",
              zIndex: -1, // Behind the content
              pointerEvents: "none", // Makes sure particles don’t interfere with user interaction
            }}
          >
            <Particles />
          </div>

          {/* Children content */}
          <div style={{ position: "relative", zIndex: 2 }}>{children}</div>
        </div>
      </body>
    </html>
  );
}
