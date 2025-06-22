import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Notable Projects - Delco Science Fair',
    description: 'Explore outstanding science projects from past Delco Science Fair participants. See award-winning innovations from students across Delaware County.',
}

export default function ProjectsLayout({
                                           children,
                                       }: {
    children: React.ReactNode
}) {
    return children
}
