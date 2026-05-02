import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; 
import "animate.css/animate.min.css";
import "./globals.css";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        {children}

        <Footer /> {/* 👈 ADD */}
      </body>
    </html>
  );
}