export default function Schedule() {
    const eventSchedule = [
        {
            time: "8:00 AM - 8:30 AM",
            title: "Registration & Setup",
            description: "Participants arrive, check in, and set up their project displays",
            location: "Main Entrance & Exhibition Halls",
            type: "setup"
        },
        {
            time: "8:30 AM - 9:00 AM",
            title: "Welcome & Opening Ceremony",
            description: "Official welcome, introductions, and event overview",
            location: "Main Auditorium",
            type: "ceremony"
        },
        {
            time: "9:00 AM - 10:30 AM",
            title: "Judging Round 1 - Elementary (K-5)",
            description: "Judges evaluate elementary school projects",
            location: "Exhibition Hall A",
            type: "judging"
        },
        {
            time: "9:00 AM - 10:30 AM",
            title: "Public Viewing - Middle & High School",
            description: "Open viewing for families and community members",
            location: "Exhibition Halls B & C",
            type: "public"
        },
        {
            time: "10:30 AM - 10:45 AM",
            title: "Morning Break",
            description: "Refreshments and networking time",
            location: "Community Center Lobby",
            type: "break"
        },
        {
            time: "10:45 AM - 12:15 PM",
            title: "Judging Round 2 - Middle School (6-8)",
            description: "Judges evaluate middle school projects",
            location: "Exhibition Hall B",
            type: "judging"
        },
        {
            time: "10:45 AM - 12:15 PM",
            title: "Public Viewing - Elementary & High School",
            description: "Open viewing for families and community members",
            location: "Exhibition Halls A & C",
            type: "public"
        },
        {
            time: "12:15 PM - 1:15 PM",
            title: "Lunch Break",
            description: "Lunch provided for participants and judges",
            location: "Community Center Cafeteria",
            type: "break"
        },
        {
            time: "1:15 PM - 2:45 PM",
            title: "Judging Round 3 - High School (9-12)",
            description: "Judges evaluate high school projects",
            location: "Exhibition Hall C",
            type: "judging"
        },
        {
            time: "1:15 PM - 2:45 PM",
            title: "Public Viewing - Elementary & Middle School",
            description: "Open viewing for families and community members",
            location: "Exhibition Halls A & B",
            type: "public"
        },
        {
            time: "2:45 PM - 3:15 PM",
            title: "Judge Deliberation",
            description: "Judges review scores and select winners",
            location: "Conference Room (Closed Session)",
            type: "deliberation"
        },
        {
            time: "2:45 PM - 3:15 PM",
            title: "Open Viewing for All",
            description: "Final opportunity to view all projects",
            location: "All Exhibition Halls",
            type: "public"
        },
        {
            time: "3:15 PM - 4:00 PM",
            title: "Awards Ceremony",
            description: "Recognition of winners and closing remarks",
            location: "Main Auditorium",
            type: "ceremony"
        },
        {
            time: "4:00 PM - 4:30 PM",
            title: "Project Pickup & Departure",
            description: "Participants collect projects and materials",
            location: "Exhibition Halls",
            type: "setup"
        }
    ]

    const importantDates = [
        {
            date: "January 15, 2025",
            title: "Registration Opens",
            description: "Online registration portal becomes available"
        },
        {
            date: "February 1, 2025",
            title: "Project Guidelines Workshop",
            description: "Optional virtual workshop for participants and mentors"
        },
        {
            date: "February 15, 2025",
            title: "Registration Deadline",
            description: "Final day to submit registration forms"
        },
        {
            date: "February 22, 2025",
            title: "Participant Confirmation",
            description: "All participants receive final event details and instructions"
        },
        {
            date: "March 1, 2025",
            title: "Project Abstract Due",
            description: "Submit 250-word project abstract for program"
        },
        {
            date: "March 8, 2025",
            title: "Setup Instructions Sent",
            description: "Detailed setup and presentation guidelines distributed"
        },
        {
            date: "March 15, 2025",
            title: "Science Fair Event Day",
            description: "The main event at Delaware County Community Center"
        }
    ]

    const getTypeColor = (type: string) => {
        switch (type) {
            case 'setup': return 'bg-gray-100 text-gray-800 border-gray-300'
            case 'ceremony': return 'bg-purple-100 text-purple-800 border-purple-300'
            case 'judging': return 'bg-blue-100 text-blue-800 border-blue-300'
            case 'public': return 'bg-green-100 text-green-800 border-green-300'
            case 'break': return 'bg-yellow-100 text-yellow-800 border-yellow-300'
            case 'deliberation': return 'bg-red-100 text-red-800 border-red-300'
            default: return 'bg-gray-100 text-gray-800 border-gray-300'
        }
    }

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Event Schedule
                        </h1>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
                            Plan your day at the 2025 Delco Science Fair
                        </p>
                        <div className="bg-white bg-opacity-10 rounded-lg p-6 inline-block">
                            <div className="text-blue-600 text-center">
                                <h3 className="text-2xl font-bold mb-2">March 15, 2025</h3>
                                <p className="text-lg">Delaware County Community Center</p>
                                <p className="text-lg">8:00 AM - 4:30 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Important Dates */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Important Dates
                        </h2>
                        <p className="text-lg text-gray-600">
                            Mark your calendar with these key milestones leading up to the event
                        </p>
                    </div>

                    <div className="space-y-6">
                        {importantDates.map((item, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                    <div className="flex-1">
                                        <div className="flex items-center mb-2">
                                            <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                                            <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                                        </div>
                                        <p className="text-gray-600 ml-6">{item.description}</p>
                                    </div>
                                    <div className="mt-4 md:mt-0 md:ml-6">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      {item.date}
                    </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Event Day Schedule */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Event Day Schedule
                        </h2>
                        <p className="text-lg text-gray-600">
                            Detailed timeline for March 15, 2025
                        </p>
                    </div>

                    {/* Legend */}
                    <div className="mb-8 flex flex-wrap justify-center gap-4">
                        <div className="flex items-center">
                            <div className="w-4 h-4 bg-blue-500 rounded mr-2"></div>
                            <span className="text-sm text-gray-600">Judging</span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-4 h-4 bg-green-500 rounded mr-2"></div>
                            <span className="text-sm text-gray-600">Public Viewing</span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-4 h-4 bg-purple-500 rounded mr-2"></div>
                            <span className="text-sm text-gray-600">Ceremony</span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-4 h-4 bg-yellow-500 rounded mr-2"></div>
                            <span className="text-sm text-gray-600">Break</span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-4 h-4 bg-gray-500 rounded mr-2"></div>
                            <span className="text-sm text-gray-600">Setup</span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {eventSchedule.map((item, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="p-6">
                                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                                        <div className="flex-1">
                                            <div className="flex items-center mb-2">
                        <span className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full mr-4">
                          {item.time}
                        </span>
                                                <span className={`text-xs font-medium px-2 py-1 rounded border ${getTypeColor(item.type)}`}>
                          {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                        </span>
                                            </div>
                                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                                            <p className="text-gray-600 mb-2">{item.description}</p>
                                            <div className="flex items-center text-sm text-gray-500">
                                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                {item.location}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Venue Information */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Venue Information
                            </h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        Delaware County Community Center
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        123 Science Drive<br />
                                        Media, PA 19063
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">Parking</h4>
                                    <p className="text-gray-600 mb-4">
                                        Free parking is available in the main lot and overflow areas. Additional parking will be available at the nearby school with shuttle service.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">Accessibility</h4>
                                    <p className="text-gray-600 mb-4">
                                        The venue is fully wheelchair accessible with elevators, accessible restrooms, and designated parking spaces.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">Food & Beverages</h4>
                                    <p className="text-gray-600">
                                        Lunch will be provided for all participants and judges. Light refreshments will be available throughout the day. Outside food is welcome.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                What to Bring
                            </h2>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">For Participants:</h3>
                                <ul className="space-y-2 text-gray-600 mb-6">
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Project display board and materials
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Research notebook or journal
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Extension cord (if needed for display)
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Comfortable shoes for standing
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Water bottle and snacks
                                    </li>
                                </ul>

                                <h3 className="text-lg font-semibold text-gray-900 mb-4">For Visitors:</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Camera for photos (flash permitted)
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Comfortable walking shoes
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Questions for the young scientists!
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact for Questions */}
            <section className="py-16 bg-blue-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Questions About the Schedule?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Contact our team if you need clarification about timing, locations, or any special arrangements
                    </p>
                    <div className="space-x-4">
                        <a
                            href="mailto:info@delcosciencefair.org"
                            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
                        >
                            Email Us
                        </a>
                        <a
                            href="tel:6105550123"
                            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-block"
                        >
                            Call (610) 555-0123
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}
