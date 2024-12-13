import { Manjari } from "next/font/google";
import "./globals.css";

// Configure Google font
const manjari = Manjari({
  weight: ["100", "400", "700"],
  subsets: ["latin"]
});



export const metadata = {
  title: "Luxe by DNBL",
  description: "Bringing the Nigerian Diaspora Together with Style and Pride",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased ${manjari.className}`}>
        <section >{children}</section>
      </body>
    </html>
  );
}
