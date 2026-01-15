import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import HeaderMain from "@/components/HeaderMain";
import DocsNav from "@/app/Nav";
import {siteConfig} from "@/config/site";
import {ThemeProvider} from "@/app/providers/ThemeProvider";

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
})

export const metadata: Metadata = {
    title: siteConfig.name,
    description: siteConfig.description,
    keywords: [
        "Prismio",
        "Programming",
        "Language",
        "Open Source",
        "Cross platform",
        "Multi platform",
        "Software",
        "Development",
        "Native",
        "Performance",
        "System",
        "Game"
    ],
    authors: [
        {
            name: siteConfig.author,
            url: siteConfig.authorURL,
        },
    ],
    creator: "Vibrant",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
        <ThemeProvider>
            <main className="relative container z-10 mb-12 flex-grow">
                <HeaderMain/>
                <div className="flex flex-row gap-4">
                    <div className="hidden overflow-visible relative z-10 lg:block lg:col-span-2 mt-8 pr-4 w-[240px]">
                        <DocsNav/>
                    </div>
                    {children}
                </div>
            </main>
        </ThemeProvider>

        </body>
        </html>
    );
}
