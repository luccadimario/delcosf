'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Register() {
    const [formData, setFormData] = useState({
        // Student Information
        studentName: '',
        grade: '',
        age: '',
        school: '',

        // Contact Information
        email: '',
        phone: '',
        parentName: '',
        parentEmail: '',
        parentPhone: '',

        // Project Information
        projectTitle: '',
        category: '',
        projectDescription: '',
        teamProject: false,
        teamMembers: '',

        // Additional Information
        specialNeeds: '',
        previousParticipant: false,
        agreeToTerms: false
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
        })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // TODO: Implement registration logic
        console.log('Registration submitted:', formData)
        alert('Registration submitted successfully! You will receive a confirmation email shortly.')
    }

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Register for 2025
                        </h1>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
                            Join the Delco Science Fair and showcase your scientific discoveries!
                        </p>
                        <div className="bg-white bg-opacity-10 rounded-lg p-4 inline-block">
                            <p className="text-lg text-blue-600 font-semibold">Registration Deadline: February 15, 2025</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Registration Information */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Quick Process</h3>
                            <p className="text-gray-600">Registration takes just 5-10 minutes to complete</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Free to Participate</h3>
                            <p className="text-gray-600">No registration fees - completely free for all students</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Instant Confirmation</h3>
                            <p className="text-gray-600">Receive confirmation and guidelines via email</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Registration Form */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                            Student Registration Form
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* Student Information */}
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                                    Student Information
                                </h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="studentName" className="block text-sm font-medium text-gray-700 mb-2">
                                            Student Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="studentName"
                                            name="studentName"
                                            required
                                            value={formData.studentName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Enter student's full name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="school" className="block text-sm font-medium text-gray-700 mb-2">
                                            School Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="school"
                                            name="school"
                                            required
                                            value={formData.school}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Enter school name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="grade" className="block text-sm font-medium text-gray-700 mb-2">
                                            Grade Level *
                                        </label>
                                        <select
                                            id="grade"
                                            name="grade"
                                            required
                                            value={formData.grade}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        >
                                            <option value="">Select grade level</option>
                                            <option value="K">Kindergarten</option>
                                            <option value="1">1st Grade</option>
                                            <option value="2">2nd Grade</option>
                                            <option value="3">3rd Grade</option>
                                            <option value="4">4th Grade</option>
                                            <option value="5">5th Grade</option>
                                            <option value="6">6th Grade</option>
                                            <option value="7">7th Grade</option>
                                            <option value="8">8th Grade</option>
                                            <option value="9">9th Grade</option>
                                            <option value="10">10th Grade</option>
                                            <option value="11">11th Grade</option>
                                            <option value="12">12th Grade</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-2">
                                            Age *
                                        </label>
                                        <input
                                            type="number"
                                            id="age"
                                            name="age"
                                            required
                                            min="5"
                                            max="19"
                                            value={formData.age}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Student's age"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Contact Information */}
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                                    Contact Information
                                </h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Student Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="student@email.com (optional)"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                            Student Phone
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="(610) 555-0123 (optional)"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 mb-2">
                                            Parent/Guardian Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="parentName"
                                            name="parentName"
                                            required
                                            value={formData.parentName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Parent/Guardian full name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="parentEmail" className="block text-sm font-medium text-gray-700 mb-2">
                                            Parent/Guardian Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="parentEmail"
                                            name="parentEmail"
                                            required
                                            value={formData.parentEmail}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="parent@email.com"
                                        />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label htmlFor="parentPhone" className="block text-sm font-medium text-gray-700 mb-2">
                                            Parent/Guardian Phone *
                                        </label>
                                        <input
                                            type="tel"
                                            id="parentPhone"
                                            name="parentPhone"
                                            required
                                            value={formData.parentPhone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="(610) 555-0123"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Project Information */}
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                                    Project Information
                                </h3>
                                <div className="space-y-6">
                                    <div>
                                        <label htmlFor="projectTitle" className="block text-sm font-medium text-gray-700 mb-2">
                                            Project Title *
                                        </label>
                                        <input
                                            type="text"
                                            id="projectTitle"
                                            name="projectTitle"
                                            required
                                            value={formData.projectTitle}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Enter your project title"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                                            Project Category *
                                        </label>
                                        <select
                                            id="category"
                                            name="category"
                                            required
                                            value={formData.category}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        >
                                            <option value="">Select a category</option>
                                            <option value="biology">Biology</option>
                                            <option value="chemistry">Chemistry</option>
                                            <option value="physics">Physics</option>
                                            <option value="engineering">Engineering</option>
                                            <option value="earth-science">Earth Science</option>
                                            <option value="mathematics">Mathematics</option>
                                            <option value="computer-science">Computer Science</option>
                                            <option value="energy">Energy & Environment</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700 mb-2">
                                            Project Description *
                                        </label>
                                        <textarea
                                            id="projectDescription"
                                            name="projectDescription"
                                            required
                                            rows={4}
                                            value={formData.projectDescription}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Briefly describe your project, hypothesis, and methodology (max 500 words)"
                                        />
                                    </div>

                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            id="teamProject"
                                            name="teamProject"
                                            checked={formData.teamProject}
                                            onChange={handleChange}
                                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                        />
                                        <label htmlFor="teamProject" className="ml-2 block text-sm text-gray-700">
                                            This is a team project
                                        </label>
                                    </div>

                                    {formData.teamProject && (
                                        <div>
                                            <label htmlFor="teamMembers" className="block text-sm font-medium text-gray-700 mb-2">
                                                Team Members
                                            </label>
                                            <textarea
                                                id="teamMembers"
                                                name="teamMembers"
                                                rows={3}
                                                value={formData.teamMembers}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                placeholder="List all team members with their names, grades, and schools"
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Additional Information */}
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                                    Additional Information
                                </h3>
                                <div className="space-y-6">
                                    <div>
                                        <label htmlFor="specialNeeds" className="block text-sm font-medium text-gray-700 mb-2">
                                            Special Accommodations
                                        </label>
                                        <textarea
                                            id="specialNeeds"
                                            name="specialNeeds"
                                            rows={3}
                                            value={formData.specialNeeds}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Please describe any special accommodations needed (accessibility, dietary restrictions, etc.)"
                                        />
                                    </div>

                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            id="previousParticipant"
                                            name="previousParticipant"
                                            checked={formData.previousParticipant}
                                            onChange={handleChange}
                                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                        />
                                        <label htmlFor="previousParticipant" className="ml-2 block text-sm text-gray-700">
                                            I have participated in the Delco Science Fair before
                                        </label>
                                    </div>

                                    <div className="flex items-start">
                                        <input
                                            type="checkbox"
                                            id="agreeToTerms"
                                            name="agreeToTerms"
                                            required
                                            checked={formData.agreeToTerms}
                                            onChange={handleChange}
                                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
                                        />
                                        <label htmlFor="agreeToTerms" className="ml-2 block text-sm text-gray-700">
                                            I agree to the{' '}
                                            <Link href="/terms" className="text-blue-600 hover:underline">
                                                terms and conditions
                                            </Link>{' '}
                                            and{' '}
                                            <Link href="/guidelines" className="text-blue-600 hover:underline">
                                                project guidelines
                                            </Link>{' '}
                                            of the Delco Science Fair *
                                        </label>
                                    </div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="text-center pt-6">
                                <button
                                    type="submit"
                                    className="bg-blue-600 text-white px-12 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
                                >
                                    Submit Registration
                                </button>
                                <p className="text-sm text-gray-600 mt-4">
                                    You will receive a confirmation email within 24 hours
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* Help Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Need Help with Registration?
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Our team is here to assist you with any questions about the registration process
                        </p>
                        <div className="space-x-4">
                            <Link
                                href="/contact"
                                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
                            >
                                Contact Support
                            </Link>
                            <Link
                                href="/guidelines"
                                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors inline-block"
                            >
                                View Guidelines
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
