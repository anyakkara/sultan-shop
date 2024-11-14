import localFont from "next/font/local";
import Header from "@/components/Header/Header";
import styles from "./globals.scss";
import Footer from "@/components/Footer/Footer";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata = {
    title: "Sultan Shop",
    description: "The best shop in the world",
};

export default function RootLayout({children}) {
    return (
        <html>
          <body className={`${geistSans.variable} ${geistMono.variable}`}>
            <Header/>
            <main className={styles.Main}>
              {children}
            </main>
            <Footer/>
          </body>
        </html>
    );
}
