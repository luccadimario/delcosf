export default function Register() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Register for the 67th Delaware County Science Fair
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
              March 6, 2026 at Aston Community Center
            </p>
            <div className="bg-white bg-opacity-10 rounded-lg p-4 inline-block">
              <p className="text-lg text-gray-900 font-semibold">
                Registration Deadline: January 22, 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-12 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-red-500">
            <h2 className="text-2xl font-bold text-red-700 mb-4">
              ⚠️ IMPORTANT: SRC/IRB Approval Required BEFORE Starting
            </h2>
            <p className="text-gray-700 mb-4">
              <strong>Deadline: November 14, 2025</strong> - Some projects
              require Scientific Review Committee (SRC) or Institutional Review
              Board (IRB) approval BEFORE experimentation begins.
            </p>
            <p className="text-gray-700 mb-4">
              Check if your project needs approval by completing the 9-question
              survey:
            </p>
            <a
              href="https://ruleswizard.societyforscience.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Check Rules Wizard for Required Approvals →
            </a>
            <p className="text-sm text-gray-600 mt-4">
              If approval is needed, send forms 1, 1a, 1b and any additional
              required forms to:{" "}
              <a
                href="mailto:rmecouch@delcosciencefair.org"
                className="text-blue-600 underline"
              >
                rmecouch@delcosciencefair.org
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Registration Steps */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How to Register
            </h2>
            <p className="text-lg text-gray-600">
              Follow these steps to complete your registration for the science
              fair
            </p>
          </div>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white text-xl font-bold">
                    1
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Check if You Need SRC/IRB Approval (Due Nov 14, 2025)
                  </h3>
                  <p className="text-gray-600 mb-4">
                    BEFORE starting your experiment, determine if your project
                    requires special approval. This is mandatory for projects
                    involving humans, vertebrate animals, potentially hazardous
                    biological agents, or hazardous chemicals.
                  </p>
                  <a
                    href="https://ruleswizard.societyforscience.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Complete Rules Wizard Survey →
                  </a>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white text-xl font-bold">
                    2
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Register on StemWizard (Due Jan 22, 2026)
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Complete your registration and submit the required
                    milestones on the StemWizard platform:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                    <li>Complete "Project Information" milestone</li>
                    <li>Complete "Additional Information" milestone</li>
                    <li>Upload all required ISEF forms in PDF format</li>
                  </ul>
                  <a
                    href="https://www.delcosef.stemwizard.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Go to StemWizard Registration →
                  </a>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white text-xl font-bold">
                    3
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Pay Entrance Fee (Due Jan 22, 2026)
                  </h3>
                  <p className="text-gray-600 mb-4">
                    <strong>$25 per participant</strong> - This fee helps cover
                    the costs of running the science fair and providing awards.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <p className="font-semibold text-gray-900 mb-2">
                      Payment by Check:
                    </p>
                    <p className="text-gray-700">
                      Make checks payable to:{" "}
                      <strong>Delaware VALLEY Science Fair</strong>
                    </p>
                    <p className="text-gray-700 text-sm mt-1">
                      IMPORTANT: Student's name and "DCSEF" MUST appear on memo
                      line!
                    </p>
                    <p className="text-gray-700 mt-3">Mail to:</p>
                    <address className="text-gray-700 not-italic">
                      Ms. Ann Snee
                      <br />
                      Countryside Consulting
                      <br />
                      590 Stockton Drive, Suite 105
                      <br />
                      Exton, PA 19341
                    </address>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-semibold text-gray-900 mb-2">
                      Payment Online:
                    </p>
                    <a
                      href="https://www.dvsf.org/dcsef-payment"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
                    >
                      Pay by Credit Card or PayPal →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white text-xl font-bold">
                    4
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Submit Abstract & Digital Slide (Due Feb 13, 2026)
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Upload your 250-word project abstract and digital slide
                    presentation to StemWizard. This helps judges preview your
                    project before the fair.
                  </p>
                  <p className="text-gray-600">
                    Slide show instructions will be sent directly to registered
                    students by email.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates Summary */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Key Dates to Remember
          </h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-blue-600">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Event
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    November 14, 2025
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    SRC/IRB Approval Deadline (if needed)
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    January 22, 2026
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    Registration & Payment Deadline
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    February 5, 2026
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    Corrected ISEF Forms Due
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    February 13, 2026
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    Abstract & Digital Slide Due
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    March 5, 2026
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    Project Setup (1:00 PM - 7:00 PM)
                  </td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-blue-900">
                    March 6, 2026
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-blue-900">
                    Fair Day! (1:00 PM - 4:00 PM)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Questions About Registration?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact our team if you need help
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
