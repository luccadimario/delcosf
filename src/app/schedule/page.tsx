export default function Schedule() {
  const eventSchedule = [
    {
      time: "12:30 PM",
      title: "Student Arrival Begins",
      description: "Students may begin arriving to prepare for judging",
      location: "Main Entrance",
      type: "setup",
    },
    {
      time: "1:00 PM",
      title: "Students Must Be Present",
      description:
        "All students must be at their project board by 1:00 PM for judging interviews",
      location: "Exhibition Halls",
      type: "setup",
    },
    {
      time: "1:00 PM - 4:00 PM",
      title: "Science Fair Event",
      description: "Judging and public viewing of all projects",
      location: "Aston Community Center",
      type: "judging",
    },
  ];

  const importantDates = [
    {
      date: "November 14, 2025",
      title: "SRC/IRB Approval Deadline",
      description:
        "Scientific Review Committee and Institutional Review Board approvals must be obtained before experimentation begins. Check if your project needs approval using the Rules Wizard at https://ruleswizard.societyforscience.org/. Send required forms to rmecouch@delcosciencefair.org.",
    },
    {
      date: "January 22, 2026",
      title: "Registration & Payment Deadline",
      description:
        "Complete registration at www.delcosef.stemwizard.com, submit milestones, and pay $25 fee. Payment online at https://www.dvsf.org/dcsef-payment or by check to Delaware VALLEY Science Fair.",
    },
    {
      date: "February 5, 2026",
      title: "Corrected Forms Due",
      description:
        "If any ISEF forms were returned for corrections, they must be resubmitted by this date",
    },
    {
      date: "February 13, 2026",
      title: "Abstract & Digital Slide Due",
      description:
        "Upload your 250-word project abstract and digital slide presentation to StemWizard at www.delcosef.stemwizard.com",
    },
    {
      date: "March 5, 2026",
      title: "Project Setup",
      description:
        "1:00 PM - 7:00 PM at Aston Community Center. Bring your trifold presentation board and logbook",
    },
    {
      date: "March 6, 2026",
      title: "Science Fair Day",
      description:
        "1:00 PM - 4:00 PM at Aston Community Center. All students must be at their project board by 1:00 PM for judging",
    },
    {
      date: "TBD March 2026",
      title: "Awards Ceremony",
      description:
        "7:00 PM at Sun Valley High School, 2881 Pancoast Ave, Aston Township, PA 19014",
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "setup":
        return "bg-gray-100 text-gray-800 border-gray-300";
      case "ceremony":
        return "bg-purple-100 text-purple-800 border-purple-300";
      case "judging":
        return "bg-blue-100 text-blue-800 border-blue-300";
      case "public":
        return "bg-green-100 text-green-800 border-green-300";
      case "break":
        return "bg-yellow-100 text-yellow-800 border-yellow-300";
      case "deliberation":
        return "bg-red-100 text-red-800 border-red-300";
      default:
        return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

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
              Plan your day at the 2026 Delco Science Fair
            </p>
            <div className="bg-white bg-opacity-10 rounded-lg p-6 inline-block">
              <div className="text-blue-600 text-center">
                <h3 className="text-2xl font-bold mb-2">March 6, 2026</h3>
                <p className="text-lg">
                  Aston Community Center, Concord Road, Aston PA
                </p>
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
              Mark your calendar with these key milestones leading up to the
              event
            </p>
          </div>

          <div className="space-y-6">
            {importantDates.map((item, index) => {
              const isRulesWizard = item.title.includes("SRC/IRB");
              const isStemWizard =
                item.title.includes("Registration") ||
                item.title.includes("Abstract");
              const isPayment = item.title.includes("Payment");

              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 ml-6">{item.description}</p>
                      {isRulesWizard && (
                        <div className="ml-6 mt-3 space-x-3">
                          <a
                            href="https://ruleswizard.societyforscience.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
                          >
                            Check Rules Wizard →
                          </a>
                          <a
                            href="mailto:rmecouch@delcosciencefair.org"
                            className="inline-block bg-gray-600 text-white px-3 py-1 rounded text-sm hover:bg-gray-700"
                          >
                            Email Forms →
                          </a>
                        </div>
                      )}
                      {(isStemWizard || isPayment) && (
                        <div className="ml-6 mt-3 space-x-3">
                          <a
                            href="https://www.delcosef.stemwizard.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
                          >
                            Go to StemWizard →
                          </a>
                          {isPayment && (
                            <a
                              href="https://www.dvsf.org/dcsef-payment"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700"
                            >
                              Pay Online →
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-6">
                      <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                        {item.date}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
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
              Detailed timeline for March 6, 2026
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
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full mr-4">
                          {item.time}
                        </span>
                        <span
                          className={`text-xs font-medium px-2 py-1 rounded border ${getTypeColor(item.type)}`}
                        >
                          {item.type.charAt(0).toUpperCase() +
                            item.type.slice(1)}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mb-2">{item.description}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
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
                    Aston Community Center
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Concord Road
                    <br />
                    Aston, PA
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Parking</h4>
                  <p className="text-gray-600 mb-4">
                    Free parking is available in the main lot and overflow
                    areas. Additional parking will be available at the nearby
                    school with shuttle service.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Accessibility
                  </h4>
                  <p className="text-gray-600 mb-4">
                    The venue is fully wheelchair accessible with elevators,
                    accessible restrooms, and designated parking spaces.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Food & Beverages
                  </h4>
                  <p className="text-gray-600">
                    Lunch will be provided for all participants and judges.
                    Light refreshments will be available throughout the day.
                    Outside food is welcome.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What to Bring
              </h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  For Participants:
                </h3>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Project display board and materials
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Research notebook or journal
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Extension cord (if needed for display)
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Comfortable shoes for standing
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Water bottle and snacks
                  </li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  For Visitors:
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-blue-500 mr-2 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Camera for photos (flash permitted)
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-blue-500 mr-2 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Comfortable walking shoes
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-blue-500 mr-2 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
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
            Contact our team if you need clarification about timing, locations,
            or any special arrangements
          </p>
          <div className="space-x-4">
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-block"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
