import Header from "@/components/Header/Header";
import styles from "./globals.scss";
import Footer from "@/components/Footer/Footer";
import { LanguageProvider } from "@inlang/paraglide-next"
import { languageTag } from "@/paraglide/runtime.js"

export default function RootLayout({ children }) {
    return (
        <LanguageProvider>
            <html lang={languageTag()}>
            <body>
                <Header/>
                    <main className={styles.Main}>
                        {children}
                    </main>
                <Footer/>
            </body>
            </html>
        </LanguageProvider>
    );
}
