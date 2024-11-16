import Header from "@/components/Header/Header";
import styles from "./globals.scss";
import Footer from "@/components/Footer/Footer";


export default function RootLayout({children}) {
    return (
        <html>
          <body>
            <Header/>
            <main className={styles.Main}>
              {children}
            </main>
            <Footer/>
          </body>
        </html>
    );
}
