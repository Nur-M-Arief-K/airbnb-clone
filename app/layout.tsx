/* components */
import Navbar from "./components/navbar/Navbar";
import Modal from "./components/modal/Modal";

/* styling */
import { Nunito } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Airbnb clone",
  description:
    "Find your ideal place to stay at a great price in 191 countries.",
};

const font = Nunito({
  subsets: ["latin"]
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Modal isOpen actionLabel="Submit" title="login" />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
