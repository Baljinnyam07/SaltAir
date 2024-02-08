import { Footer, Header } from "@/components";
import "../styles/common/globals.css";
import { Montserrat } from "next/font/google";

export const metadata = {
  title: "SALT AIR",
  description: "Something ...",
};

// Font - өөрчлөлт
const montserrat = Montserrat({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: "normal",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
