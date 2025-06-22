import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Delco Science Fair - Inspiring Young Scientists',
    description: 'Join the annual Delco Science Fair and showcase your scientific discoveries. Open to all students in Delaware County.',
    openGraph: {
        title: 'Delaware County Science Fair',
        description: 'Join the annual Delco Science Fair and showcase your scientific discoveries. Open to all students in Delaware County.',
        url: 'https://delcosciencefair.org',
        siteName: 'Delco Science Fair',
        images: [
            {
                url: 'https://www.delcosciencefair.org/delcosfthumb.jpg',
                width: 1200,
                height: 630,
                alt: 'Delco Science Fair',
            }
        ],
        locale: 'en_US',
        type: 'website',
    }
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Navbar />
        <main className="pt-16">
            {children}
        </main>
        </body>
        </html>
    )
}
