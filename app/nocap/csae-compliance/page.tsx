"use client";

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function CSAECompliance() {
  return (
    <>
      <Head>
        <title>Child Safety Standards - No Cap Dating App</title>
      </Head>
      <main className='prose mx-auto p-8 max-w-4xl'>
        <Link href='/' className='inline-block mb-6'>
         ← Back to Home
        </Link>
        
        <div className="flex flex-col items-center gap-4 mb-8">
          <div className="bg-white p-3 rounded shadow-sm">
            <Image
              src="/logocap.png"
              alt="No Cap Logo"
              width={132}
              height={132}
              className="rounded"
            />
          </div>
          <h1 className="text-4xl font-ultralight text-center">No Cap Dating App</h1>
          <h2 className="text-3xl font-light text-center">Child Safety Standards & CSAE Compliance</h2>
        </div>
        
        <div className='text-sm text-gray-600 mb-8 text-center'>
          Last Updated: January 30, 2025
        </div>

        <div className='space-y-6'>
          <section>
            <h2 className='text-2xl font-semibold mb-3'>1. Our Commitment to Child Safety</h2>
            <p>
              No Cap, operated by Lil Hill, LLC, is committed to maintaining the highest standards of child safety and protection. We have zero tolerance for Child Sexual Abuse and Exploitation (CSAE) and are dedicated to creating a safe environment for all users while complying with Google Play's Child Safety Standards policy.
            </p>
            <p className='mt-3'>
              <strong>Our platform is strictly for users 18 years and older. We do not knowingly allow minors to use our service.</strong>
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-3'>2. Published Standards Against CSAE</h2>
            <p>
              In accordance with Google Play's Child Safety Standards policy, we maintain the following published standards against Child Sexual Abuse and Exploitation:
            </p>
            
            <h3 className='text-xl font-semibold mb-2 mt-4'>2.1 Prohibited Content and Behavior</h3>
            <ul className='list-disc pl-6 space-y-2'>
              <li>Any content that sexually exploits, abuses, or endangers children</li>
              <li>Grooming behavior targeting minors for sexual exploitation</li>
              <li>Sextortion or sexual coercion involving minors</li>
              <li>Child Sexual Abuse Material (CSAM) in any form</li>
              <li>Trafficking of minors for sexual purposes</li>
              <li>Any other form of child sexual exploitation</li>
            </ul>

            <h3 className='text-xl font-semibold mb-2 mt-4'>2.2 Age Verification and Protection</h3>
            <ul className='list-disc pl-6 space-y-2'>
              <li>Strict 18+ age requirement for all users</li>
              <li>Age verification processes during registration</li>
              <li>Regular monitoring and enforcement of age restrictions</li>
              <li>Immediate account suspension for suspected underage users</li>
            </ul>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-3'>3. User Feedback and Reporting Mechanism</h2>
            <p>
              We provide multiple in-app mechanisms for users to report concerning content or behavior:
            </p>
            
            <h3 className='text-xl font-semibold mb-2 mt-4'>3.1 Reporting Options</h3>
            <ul className='list-disc pl-6 space-y-2'>
              <li><strong>In-App Reporting:</strong> Report button available on all user profiles and conversations</li>
              <li><strong>Emergency Reporting:</strong> Dedicated child safety reporting feature for urgent concerns</li>
              <li><strong>Email Support:</strong> Direct reporting to our safety team at safety@lilhill.org</li>
              <li><strong>Anonymous Reporting:</strong> Option to report concerns without revealing identity</li>
            </ul>

            <h3 className='text-xl font-semibold mb-2 mt-4'>3.2 Response Commitment</h3>
            <ul className='list-disc pl-6 space-y-2'>
              <li>All child safety reports are prioritized and reviewed within 24 hours</li>
              <li>Immediate action taken on verified CSAE content or behavior</li>
              <li>Regular feedback provided to reporting users on case status</li>
              <li>Continuous improvement of reporting mechanisms based on user feedback</li>
            </ul>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-3'>4. CSAM Detection and Response</h2>
            <p>
              We employ comprehensive measures to detect, prevent, and respond to Child Sexual Abuse Material:
            </p>
            
            <h3 className='text-xl font-semibold mb-2 mt-4'>4.1 Detection Technologies</h3>
            <ul className='list-disc pl-6 space-y-2'>
              <li>Automated content scanning using industry-standard hash databases</li>
              <li>Machine learning algorithms for detecting suspicious content</li>
              <li>Human moderation team trained in CSAM identification</li>
              <li>Partnership with organizations like NCMEC for hash sharing</li>
            </ul>

            <h3 className='text-xl font-semibold mb-2 mt-4'>4.2 Response Protocol</h3>
            <ul className='list-disc pl-6 space-y-2'>
              <li>Immediate removal of identified CSAM content</li>
              <li>Permanent account suspension for users sharing CSAM</li>
              <li>Reporting to National Center for Missing & Exploited Children (NCMEC)</li>
              <li>Cooperation with law enforcement investigations</li>
              <li>Preservation of evidence as required by law</li>
            </ul>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-3'>5. Legal Compliance</h2>
            <p>
              We maintain strict compliance with all applicable child safety laws and regulations:
            </p>
            
            <ul className='list-disc pl-6 space-y-2'>
              <li><strong>FOSTA-SESTA:</strong> Full compliance with federal anti-trafficking legislation</li>
              <li><strong>State Laws:</strong> Adherence to all state-specific child protection requirements</li>
              <li><strong>International Standards:</strong> Compliance with international child safety protocols</li>
              <li><strong>Industry Best Practices:</strong> Implementation of Tech Coalition recommendations</li>
              <li><strong>Regular Legal Review:</strong> Quarterly assessment of compliance with evolving regulations</li>
            </ul>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-3'>6. Child Safety Point of Contact</h2>
            <p>
              Our designated Child Safety Officer serves as the primary point of contact for all child safety matters:
            </p>
            
            <div className='bg-gray-800 p-4 rounded-lg mt-4'>
              <h4 className='font-semibold mb-2'>Child Safety Officer Contact Information:</h4>
              <ul className='space-y-1'>
                <li><strong>Email:</strong> contact@lilhill.org</li>
                <li><strong>Emergency Line:</strong> Available 24/7 for urgent child safety concerns</li>
                <li><strong>Response Time:</strong> All inquiries acknowledged within 4 hours</li>
                <li><strong>Escalation:</strong> Direct line to executive leadership for critical issues</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-3'>7. Training and Education</h2>
            <p>
              We invest in comprehensive training and education programs:
            </p>
            
            <ul className='list-disc pl-6 space-y-2'>
              <li><strong>Staff Training:</strong> Regular child safety training for all team members</li>
              <li><strong>Moderation Training:</strong> Specialized training for content moderation team</li>
              <li><strong>User Education:</strong> Safety resources and guidelines for users</li>
              <li><strong>Industry Collaboration:</strong> Participation in child safety working groups</li>
            </ul>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-3'>8. Continuous Improvement</h2>
            <p>
              We are committed to continuously improving our child safety measures:
            </p>
            
            <ul className='list-disc pl-6 space-y-2'>
              <li><strong>Regular Audits:</strong> Quarterly assessment of safety protocols</li>
              <li><strong>Technology Updates:</strong> Investment in latest detection technologies</li>
              <li><strong>Policy Reviews:</strong> Annual review and update of safety policies</li>
              <li><strong>Community Feedback:</strong> Integration of user and expert feedback</li>
              <li><strong>Transparency Reports:</strong> Regular publication of safety metrics and actions</li>
            </ul>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-3'>9. Reporting Violations</h2>
            <p>
              If you encounter any content or behavior that violates our child safety standards, please report it immediately:
            </p>
            
            <div className='bg-red-50 border-l-4 border-red-400 p-4 mt-4'>
              <h4 className='font-semibold mb-2 text-red-800'>Emergency Child Safety Reporting:</h4>
              <ul className='space-y-1 text-red-700'>
                <li><strong>Immediate Danger:</strong> Contact local law enforcement (911)</li>
                <li><strong>CSAM Content:</strong> Report directly to NCMEC at CyberTipline.org</li>
                <li><strong>Platform Issues:</strong> Email contact@lilhill.org</li>
                <li><strong>In-App:</strong> Use the emergency report feature</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-3'>10. Contact Information</h2>
            <p>
              For questions about our child safety standards or to report concerns:
            </p>
            
            <div className='space-y-2 mt-4'>
              <p><strong>General Inquiries:</strong> contact@lilhill.org</p>
              <p><strong>Child Safety Officer:</strong> contact@lilhill.org</p>
              <p><strong>Legal Department:</strong> contact@lilhill.org</p>
              <p><strong>Mailing Address:</strong> Lil Hill, LLC, Child Safety Department, PO BOX 5, Ojai, CA, 93024 </p>
            </div>
          </section>

          <section className='border-t pt-6 mt-8'>
            <p className='text-sm text-gray-600'>
              This Child Safety Standards policy is part of our commitment to Google Play's Child Safety Standards requirements and reflects our dedication to protecting children from sexual abuse and exploitation. We will continue to update and improve these standards as technology and best practices evolve.
            </p>
            <p className='text-sm text-gray-600 mt-3'>
              <strong>Policy Compliance Date:</strong> This policy meets Google Play's Child Safety Standards requirements with full compliance by March 19, 2025.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}