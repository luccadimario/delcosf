import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contact Us - Delco Science Fair',
    description: 'Get in touch with the Delco Science Fair team. Contact us for registration questions, volunteering opportunities, or general information.',
}

export default function ContactLayout({
                                          children,
                                      }: {
    children: React.ReactNode
}) {
    return children
}
