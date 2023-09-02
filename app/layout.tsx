import MainProvider from "@/components/MainProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Pixelerate AI",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${montserrat.className} bg-yellow-50/20 dark:bg-black ease-in duration-75`}>
                <MainProvider>{children}</MainProvider>
            </body>
        </html>
    );
}
