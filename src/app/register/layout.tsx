import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Register - Delco Science Fair 2025',
    description: 'Register for the 2025 Delco Science Fair. Free registration for students K-12 in Delaware County. Deadline: February 15, 2025.',
}

export default function RegisterLayout({
                                           children,
                                       }: {
    children: React.ReactNode
}) {
    return children
}
