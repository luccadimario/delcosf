"use client";
import MagnetLines from "@/components/MagnetLines";
import RotatingText from "@/components/RotatingText";
import Link from "next/link";

{
  /* Example 2: Customized speed and characters */
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-flex justify-center items-center gap-2 mb-6">
              <h1 className="text-4xl md:text-6xl font-bold">DelCo</h1>
              <RotatingText
                texts={["Students", "Excellence", "Science Fair"]}
                mainClassName="inline-flex overflow-hidden px-2 sm:px-2 md:px-3 text-4xl md:text-6xl font-bold bg-cyan-300 text-black py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2500}
              />
            </div>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Inspiring the next generation of scientists and innovators in
              Delaware County
            </p>
            <div className="space-x-4">
              <Link
                href="/register"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
              >
                Register Now
              </Link>
              <Link
                href="/about"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-block"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Event Info Section */}

      <section className="py-16 bg-gray-50 relative overflow-hidden">
        <MagnetLines
          rows={9}
          columns={15}
          containerSize="100%"
          lineColor="black"
          lineWidth="0.3vmin"
          lineHeight="3vmin"
          baseAngle={0}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
            pointerEvents: "none", // Don't block interactions
            opacity: 0.33, // Optional: fade effect for subtlety
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-lg shadow-md text-center mb-12 p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              2026 Science Fair Details
            </h2>
            <p className="text-lg text-black max-w-2xl mx-auto">
              Join us for an exciting day of scientific discovery and innovation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">When</h3>
              <p className="text-gray-600">
                March 6, 2026
                <br />
                8:00 AM - 4:30 PM
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
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
              </div>
              <h3 className="text-xl font-semibold mb-2">Where</h3>
              <p className="text-gray-600">
                Aston Community Center,
                <br />
                Concord Road, Aston PA
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Who</h3>
              <p className="text-gray-600">
                Students 6-12
                <br />
                With a Passion for Science!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Fostering Scientific Excellence
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                The Delco Science Fair has been inspiring young minds for over
                six decades. Our mission is to encourage scientific inquiry,
                critical thinking, and innovation among students throughout
                Delaware County while providing a platform to showcase their
                research.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                From middle school experiments to advanced high school research
                projects, we celebrate all levels of scientific achievement.
              </p>
              <Link
                href="/about"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
              >
                Read Our Story
              </Link>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg">
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-xl">200+</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Student Participants
                    </h4>
                    <p className="text-gray-600">Annual participation</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-xl">67</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Years Running
                    </h4>
                    <p className="text-gray-600">Celebrating excellence</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-xl">30+</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Expert Judges
                    </h4>
                    <p className="text-gray-600">Industry professionals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Participants Say
            </h2>
            <p className="text-lg text-gray-600">
              Hear from students, teachers, and parents about their Science Fair
              experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-semibold">CO</span>
                </div>
                <div>
                  <h4 className="font-semibold">Lucca D.</h4>
                  <p className="text-gray-600 text-sm">College Student</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The Delco Science Fair gave me the confidence to pursue my
                passion for physics. The feedback from judges helped me improve
                my research skills tremendously!"
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-semibold">MR</span>
                </div>
                <div>
                  <h4 className="font-semibold">Mike R.</h4>
                  <p className="text-gray-600 text-sm">College Faculty</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "This event brings out the best in our students. I've seen shy
                kids become confident presenters and curious minds turn into
                future scientists."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-semibold">JS</span>
                </div>
                <div>
                  <h4 className="font-semibold">Joe S.</h4>
                  <p className="text-gray-600 text-sm">Parent</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Watching my daughter present her project with such enthusiasm
                was incredible. The Science Fair sparked a love for learning
                that continues to this day."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Join Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Registration is now open for the 2026 Delco Science Fair. Don't miss
            your chance to be part of this amazing event!
          </p>
          <Link
            href="/register"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
          >
            Register Your Project Today
          </Link>
        </div>
      </section>
    </div>
  );
}
