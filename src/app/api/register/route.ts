import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        
        // Destructure all the registration fields
        const {
            studentName,
            grade,
            age,
            school,
            email,
            parentName,
            parentEmail,
            projectTitle,
            category,
            projectDescription,
            teamProject,
            teamMembers,
            specialNeeds,
            previousParticipant,
            agreeToTerms
        } = body

        // Basic validation
        if (!studentName || !grade || !age || !school || !parentName || !parentEmail || !projectTitle || !category || !projectDescription) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            )
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(parentEmail)) {
            return NextResponse.json(
                { error: 'Invalid parent email address' },
                { status: 400 }
            )
        }

        // Check if terms are agreed
        if (!agreeToTerms) {
            return NextResponse.json(
                { error: 'You must agree to the terms and conditions' },
                { status: 400 }
            )
        }

        // Format registration data for email
        const registrationContent = `
New Science Fair Registration

STUDENT INFORMATION
Name: ${studentName}
Grade: ${grade}
Age: ${age}
School: ${school}
Email: ${email || 'Not provided'}

PARENT/GUARDIAN INFORMATION
Name: ${parentName}
Email: ${parentEmail}

PROJECT INFORMATION
Title: ${projectTitle}
Category: ${category}
Description: ${projectDescription}
Team Project: ${teamProject ? 'Yes' : 'No'}
${teamProject ? `Team Members: ${teamMembers}` : ''}

ADDITIONAL INFORMATION
Previous Participant: ${previousParticipant ? 'Yes' : 'No'}
Special Needs/Accommodations: ${specialNeeds || 'None'}

---
This registration was submitted through the Delaware County Science Fair website.
Next steps:
1. Complete registration on StemWizard at www.delcosef.stemwizard.com
2. Submit payment of $25 per participant
3. Submit required ISEF forms if applicable
        `.trim()

        // Log the registration
        console.log('Registration submission:', {
            to: 'rmecouch@gmail.com',
            cc: ['suemecouch@gmail.com', 'r.f.2012@comcast.net'],
            from: parentEmail,
            subject: `[Science Fair Registration] ${studentName} - ${school}`,
            content: registrationContent
        })

        // In production, you would:
        // 1. Save to database
        // 2. Send confirmation emails
        // 3. Integrate with StemWizard if they have an API

        return NextResponse.json(
            { 
                success: true, 
                message: 'Registration submitted successfully! You will receive a confirmation email shortly.',
                nextSteps: [
                    'Complete registration on StemWizard',
                    'Submit $25 payment per participant',
                    'Check if SRC/IRB approval is needed for your project'
                ]
            },
            { status: 200 }
        )
    } catch (error) {
        console.error('Registration error:', error)
        return NextResponse.json(
            { error: 'Failed to process registration' },
            { status: 500 }
        )
    }
}