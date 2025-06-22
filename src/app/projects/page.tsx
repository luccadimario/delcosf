import Link from 'next/link'

export default function Projects() {
    // Sample project data - you can replace this with real data later
    const featuredProjects = [
        {
            id: 1,
            title: "Solar-Powered Water Purification System",
            student: "Emma Rodriguez",
            grade: "11th Grade",
            school: "Springfield High School",
            category: "Engineering",
            year: "2024",
            award: "1st Place Overall",
            description: "Developed an innovative solar-powered water purification system that can provide clean drinking water for remote communities using only renewable energy sources.",
            image: "/api/placeholder/400/300" // Placeholder for now
        },
        {
            id: 2,
            title: "Machine Learning for Early Disease Detection",
            student: "Marcus Chen",
            grade: "12th Grade",
            school: "Delaware County STEM Academy",
            category: "Computer Science",
            year: "2024",
            award: "Best in Category",
            description: "Created a machine learning algorithm that can detect early signs of plant diseases in crops, potentially saving millions in agricultural losses.",
            image: "/api/placeholder/400/300"
        },
        {
            id: 3,
            title: "Biodegradable Plastic from Food Waste",
            student: "Sophia Kim",
            grade: "10th Grade",
            school: "Westfield Academy",
            category: "Chemistry",
            year: "2024",
            award: "Environmental Innovation Award",
            description: "Developed a method to create biodegradable plastic from common food waste materials, offering a sustainable alternative to traditional plastics.",
            image: "/api/placeholder/400/300"
        },
        {
            id: 4,
            title: "Robotic Assistance for Elderly Care",
            student: "Team: Alex Johnson & Maya Patel",
            grade: "9th Grade",
            school: "Lincoln Middle School",
            category: "Engineering",
            year: "2023",
            award: "Best Team Project",
            description: "Built a prototype robot designed to assist elderly individuals with daily tasks, featuring voice recognition and mobility assistance.",
            image: "/api/placeholder/400/300"
        },
        {
            id: 5,
            title: "Urban Air Quality Monitoring Network",
            student: "David Thompson",
            grade: "11th Grade",
            school: "Central High School",
            category: "Earth Science",
            year: "2023",
            award: "Community Impact Award",
            description: "Created a network of low-cost air quality sensors that can be deployed throughout urban areas to monitor pollution levels in real-time.",
            image: "/api/placeholder/400/300"
        },
        {
            id: 6,
            title: "Investigating Antibiotic Resistance in Local Water Sources",
            student: "Isabella Martinez",
            grade: "12th Grade",
            school: "Riverside High School",
            category: "Biology",
            year: "2023",
            award: "Research Excellence Award",
            description: "Conducted extensive research on antibiotic resistance in local water sources, providing valuable data for environmental health officials.",
            image: "/api/placeholder/400/300"
        }
    ]

    const categories = [
        { name: "All Projects", count: featuredProjects.length, color: "bg-gray-500" },
        { name: "Biology", count: featuredProjects.filter(p => p.category === "Biology").length, color: "bg-green-500" },
        { name: "Chemistry", count: featuredProjects.filter(p => p.category === "Chemistry").length, color: "bg-blue-500" },
        { name: "Physics", count: featuredProjects.filter(p => p.category === "Physics").length, color: "bg-purple-500" },
        { name: "Engineering", count: featuredProjects.filter(p => p.category === "Engineering").length, color: "bg-orange-500" },
        { name: "Computer Science", count: featuredProjects.filter(p => p.category === "Computer Science").length, color: "bg-indigo-500" },
        { name: "Earth Science", count: featuredProjects.filter(p => p.category === "Earth Science").length, color: "bg-teal-500" }
    ]

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Notable Projects
                        </h1>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                            Showcasing outstanding scientific achievements from our talented students
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                            <div className="text-gray-600">Total Projects</div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="text-3xl font-bold text-green-600 mb-2">25</div>
                            <div className="text-gray-600">Years of Innovation</div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="text-3xl font-bold text-purple-600 mb-2">8</div>
                            <div className="text-gray-600">Science Categories</div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
                            <div className="text-gray-600">Award Winners</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Filter */}
            <section className="py-8 bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((category) => (
                            <button
                                key={category.name}
                                className={`${category.color} text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-80 transition-opacity`}
                            >
                                {category.name} ({category.count})
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Projects */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Award-Winning Projects
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            These exceptional projects represent the creativity, dedication, and scientific excellence of our participants
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredProjects.map((project) => (
                            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                {/* Project Image Placeholder */}
                                <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                                    <div className="text-center text-gray-500">
                                        <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                        </svg>
                                        <p className="text-sm">Project Photo</p>
                                        <p className="text-xs">Coming Soon</p>
                                    </div>
                                </div>

                                <div className="p-6">
                                    {/* Award Badge */}
                                    <div className="flex items-center justify-between mb-3">
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {project.award}
                    </span>
                                        <span className="text-sm text-gray-500">{project.year}</span>
                                    </div>

                                    {/* Project Title */}
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        {project.title}
                                    </h3>

                                    {/* Student Info */}
                                    <div className="text-sm text-gray-600 mb-2">
                                        <p className="font-medium">{project.student}</p>
                                        <p>{project.grade} • {project.school}</p>
                                    </div>

                                    {/* Category */}
                                    <div className="mb-3">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {project.category}
                    </span>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Project Guidelines */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Want to See Your Project Here?
                            </h2>
                            <p className="text-lg text-gray-600 mb-6">
                                Every project showcased here started with curiosity and dedication. Our students consistently demonstrate that age is no barrier to making meaningful scientific contributions.
                            </p>
                            <p className="text-lg text-gray-600 mb-8">
                                Whether you're investigating a simple question or tackling complex global challenges, the Delco Science Fair provides the platform to share your discoveries with the community.
                            </p>
                            <div className="space-x-4">
                                <Link
                                    href="/register"
                                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
                                >
                                    Register Your Project
                                </Link>
                                <Link
                                    href="/guidelines"
                                    className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors inline-block"
                                >
                                    View Guidelines
                                </Link>
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                Project Success Tips
                            </h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-gray-700">Start with a clear, testable question</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-gray-700">Follow the scientific method rigorously</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-gray-700">Document everything with photos and data</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-gray-700">Practice your presentation multiple times</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-gray-700">Be prepared to explain your methodology</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Past Winners Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Where Are They Now?
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Many of our past participants have gone on to pursue successful careers in STEM fields
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white font-bold text-2xl">AS</span>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Dr. Amanda Smith</h3>
                            <p className="text-blue-600 text-sm mb-2">2010 Winner • NASA Engineer</p>
                            <p className="text-gray-600 text-sm">
                                "The Delco Science Fair taught me to think critically and present my ideas confidently. It was the foundation for my career in aerospace engineering."
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white font-bold text-2xl">RJ</span>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Robert Johnson</h3>
                            <p className="text-green-600 text-sm mb-2">2015 Winner • Biotech Researcher</p>
                            <p className="text-gray-600 text-sm">
                                "My project on genetic engineering sparked a passion that led me to develop new treatments for rare diseases. The fair changed my life."
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white font-bold text-2xl">ML</span>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Maria Lopez</h3>
                            <p className="text-purple-600 text-sm mb-2">2018 Winner • Tech Entrepreneur</p>
                            <p className="text-gray-600 text-sm">
                                "The skills I learned presenting at the science fair helped me pitch my startup to investors. Now we're developing AI solutions for healthcare."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-blue-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to Showcase Your Innovation?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Join the ranks of outstanding young scientists who have made their mark at the Delco Science Fair
                    </p>
                    <Link
                        href="/register"
                        className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
                    >
                        Register for 2025
                    </Link>
                </div>
            </section>
        </div>
    )
}
