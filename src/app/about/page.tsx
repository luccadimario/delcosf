import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About the Delco Science Fair
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Celebrating 67 years of scientific discovery and innovation in
              Delaware County
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                The Delco Science Fair exists to inspire and nurture the next
                generation of scientists, engineers, and innovators. We believe
                that every student has the potential to make meaningful
                contributions to our understanding of the world around us.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Through hands-on experimentation, critical thinking, and
                scientific inquiry, we empower students to explore their
                curiosity and develop the skills necessary for success in STEM
                fields and beyond.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  Our Core Values
                </h3>
                <ul className="space-y-2 text-blue-800">
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Scientific Excellence
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Inclusive Participation
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Innovation & Creativity
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Community Engagement
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-lg">
              <div className="space-y-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-10 h-10 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Innovation Hub
                  </h3>
                  <p className="text-gray-600">
                    Fostering creativity and scientific thinking
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-10 h-10 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Education First
                  </h3>
                  <p className="text-gray-600">
                    Learning through hands-on experimentation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From humble beginnings to Delaware County's premier science
              education event
            </p>
          </div>

          <div className="space-y-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-center">
                  <div className="w-17 h-17 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">
                      1959
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">The Beginning</h3>
                  <p className="text-gray-600">
                    Started with just 50 students from 5 local schools, the
                    first Delco Science Fair was held at the community center
                    with volunteer judges from local universities.
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-center">
                  <div className="w-17 h-17 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">
                      2000
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Growing Impact</h3>
                  <p className="text-gray-600">
                    Expanded to include all Delaware County schools with over
                    200 participants. Introduced special awards for scientific
                    innovation.
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-center">
                  <div className="w-17 h-17 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600">
                      2026
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Today</h3>
                  <p className="text-gray-600">
                    Now featuring 250+ students annually, with partnerships from
                    major universities and technology companies, inspiring the
                    next generation of innovators.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Competition Categories
            </h2>
            <p className="text-lg text-gray-600">
              Students can participate in various scientific disciplines
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">
                  Behavioral and Social Sciences
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                Study of human and animal behavior, psychology, sociology, and
                social relationships.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-teal-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-3">
                  <svg
                    className="w-6 h-6 text-teal-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Biochemistry</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Chemistry of life processes including molecular biology,
                enzymes, and metabolism.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="3" fill="currentColor" />
                    <ellipse cx="12" cy="6" rx="3" ry="5" strokeWidth={1.5} />
                    <ellipse
                      cx="18"
                      cy="12"
                      rx="3"
                      ry="5"
                      strokeWidth={1.5}
                      transform="rotate(90 18 12)"
                    />
                    <ellipse cx="12" cy="18" rx="3" ry="5" strokeWidth={1.5} />
                    <ellipse
                      cx="6"
                      cy="12"
                      rx="3"
                      ry="5"
                      strokeWidth={1.5}
                      transform="rotate(90 6 12)"
                    />
                    <ellipse
                      cx="15"
                      cy="9"
                      rx="2.5"
                      ry="7"
                      strokeWidth={1.5}
                      transform="rotate(45 15 9)"
                    />
                    <ellipse
                      cx="15"
                      cy="15"
                      rx="2.5"
                      ry="7"
                      strokeWidth={1.5}
                      transform="rotate(135 15 15)"
                    />
                    <ellipse
                      cx="9"
                      cy="15"
                      rx="2.5"
                      ry="7"
                      strokeWidth={1.5}
                      transform="rotate(225 9 15)"
                    />
                    <ellipse
                      cx="9"
                      cy="9"
                      rx="2.5"
                      ry="7"
                      strokeWidth={1.5}
                      transform="rotate(315 9 9)"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Botany</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Study of plant life including agriculture, plant genetics, and
                plant physiology.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Chemistry</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Study of matter composition and chemical reactions including
                organic and inorganic chemistry.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-indigo-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-3">
                  <svg
                    className="w-6 h-6 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Computer Science</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Development of software and hardware including AI, algorithms,
                and programming.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-pink-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mr-3">
                  <svg
                    className="w-6 h-6 text-pink-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Consumer Science</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Testing and comparison of consumer products.{" "}
                <strong>(6th through 8th grade ONLY)</strong>
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-3">
                  <svg
                    className="w-6 h-6 text-yellow-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">
                  Earth and Space Sciences
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                Study of Earth and the universe including geology, astronomy,
                and meteorology.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                  <svg
                    className="w-6 h-6 text-orange-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Engineering</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Technology projects applying scientific principles to practical
                solutions and manufacturing.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-emerald-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-3">
                  <svg
                    className="w-6 h-6 text-emerald-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">
                  Environmental Sciences
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                Study of environmental problems and solutions including
                pollution, ecosystems, and sustainability.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                  <svg
                    className="w-6 h-6 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Mathematics</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Mathematical modeling, statistics, and computational analysis.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-rose-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mr-3">
                  <svg
                    className="w-6 h-6 text-rose-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Medicine and Health</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Study of human and animal health, disease, and medical
                treatments.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-cyan-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mr-3">
                  <svg
                    className="w-6 h-6 text-cyan-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="8" strokeWidth={2} />
                    <circle cx="12" cy="12" r="3" fill="currentColor" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Microbiology</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Study of microorganisms including bacteria, viruses, fungi, and
                their effects.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-violet-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center mr-3">
                  <svg
                    className="w-7 h-7 text-violet-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="-2 -2 28 28"
                  >
                    <circle cx="12" cy="12" r="2" fill="currentColor" />
                    <ellipse cx="12" cy="12" rx="12" ry="5" strokeWidth={1.5} />
                    <ellipse
                      cx="12"
                      cy="12"
                      rx="12"
                      ry="5"
                      strokeWidth={1.5}
                      transform="rotate(60 12 12)"
                    />
                    <ellipse
                      cx="12"
                      cy="12"
                      rx="12"
                      ry="5"
                      strokeWidth={1.5}
                      transform="rotate(120 12 12)"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Physics</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Study of energy, matter, and fundamental forces including
                mechanics and quantum physics.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mr-3">
                  <svg
                    className="w-6 h-6 text-amber-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Zoology</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Study of animals including genetics, behavior, and physiology.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Want more detailed information about each category and suggested
              topics?
            </p>
            <a
              href="/Fair Categories.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Full Category Guide (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our Team
                        </h2>
                        <p className="text-lg text-gray-600">
                            Dedicated educators and professionals committed to student success
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white font-bold text-2xl">DR</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Dr. Rebecca Martinez</h3>
                            <p className="text-blue-600 font-medium mb-3">Event Director</p>
                            <p className="text-gray-600 text-sm">
                                Former NASA scientist with 20+ years in STEM education. Passionate about inspiring young minds through hands-on scientific discovery.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white font-bold text-2xl">MJ</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Michael Johnson</h3>
                            <p className="text-green-600 font-medium mb-3">Program Coordinator</p>
                            <p className="text-gray-600 text-sm">
                                High school science teacher and curriculum specialist. Coordinates with schools across Delaware County to ensure inclusive participation.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="w-24 h-24 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white font-bold text-2xl">SC</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Sarah Chen</h3>
                            <p className="text-purple-600 font-medium mb-3">Judging Coordinator</p>
                            <p className="text-gray-600 text-sm">
                                Research scientist and university professor. Manages our network of expert judges from academia and industry.
                            </p>
                        </div>
                    </div>
                </div>
            </section> */}

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Our Scientific Community
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Whether you're a student, teacher, parent, or community member,
            there are many ways to get involved with the Delco Science Fair.
          </p>
          <div className="space-x-4">
            <Link
              href="/register"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Register to Participate
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-block"
            >
              Volunteer with Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
