"use client";

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function NoCapPrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - No Cap Dating App</title>
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
          <h2 className="text-3xl font-light text-center">Privacy Policy</h2>
        </div>
        
        <div className='text-sm text-gray-600 mb-8 text-center'>
          Last Updated: January 30, 2025
        </div>

        <div className='space-y-6'>
          <section>
            <h2 className='text-2xl font-semibold mb-3'>1. Introduction</h2>
            <p>
              Welcome to No Cap, operated by Lil Hill, LLC ("we," "our," or "us"). This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you use our dating application. Your privacy is fundamental to our service, and we are committed to protecting your personal information and being transparent about our data practices.
            </p>
            <p className='mt-3'>
              <strong>If you do not agree with this Privacy Policy, please do not use our App.</strong>
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-3'>2. Information We Collect</h2>
            
            <h3 className='text-xl font-semibold mb-2 mt-4'>2.1 Personal Information You Provide</h3>
            <ul className='list-disc ml-6'>
              <li><strong>Account Information:</strong> Name, email address, phone number, date of birth, gender identity, sexual orientation</li>
              <li><strong>Profile Information:</strong> Photos, bio, interests, preferences, location, relationship goals</li>
              <li><strong>Communication Data:</strong> Messages, photos, and other content you share with other users</li>
              <li><strong>Verification Data:</strong> Government-issued ID for age verification (when required)</li>
              <li><strong>Payment Information:</strong> Credit card details, billing address (processed securely by third-party payment processors)</li>
            </ul>

            <h3 className='text-xl font-semibold mb-2 mt-4'>2.2 Information We Collect Automatically</h3>
            <ul className='list-disc ml-6'>
              <li><strong>Device Information:</strong> Device type, operating system, unique device identifiers, mobile network information</li>
              <li><strong>Usage Data:</strong> How you interact with the App, features used, time spent, search queries</li>
              <li><strong>Location Data:</strong> Precise location (with permission) for matching and safety features</li>
              <li><strong>Log Data:</strong> IP address, access times, app crashes, performance data</li>
            </ul>

            <h3 className='text-xl font-semibold mb-2 mt-4'>2.3 Information from Third Parties</h3>
            <ul className='list-disc ml-6'>
              <li><strong>Social Media:</strong> If you connect social media accounts, we may access basic profile information</li>
              <li><strong>Background Checks:</strong> Information from third-party services for safety verification (where applicable)</li>
            </ul>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-3'>3. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className='list-disc ml-6 mt-2'>
              <li><strong>Provide Dating Services:</strong> Create your profile, show you potential matches, facilitate connections</li>
              <li><strong>Safety and Security:</strong> Verify identities, prevent fraud, detect and prevent harmful behavior</li>
              <li><strong>Improve Our Service:</strong> Analyze usage patterns, develop new features, enhance user experience</li>
              <li><strong>Customer Support:</strong> Respond to inquiries, resolve issues, provide assistance</li>
              <li><strong>Legal Compliance:</strong> Comply with legal obligations, respond to legal requests</li>
              <li><strong>Marketing:</strong> Send promotional messages (with your consent), personalize advertisements</li>
            </ul>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-3'>4. How We Share Your Information</h2>
            
            <h3 className='text-xl font-semibold mb-2 mt-4'>4.1 With Other Users</h3>
            <p>
              Your profile information, photos, and messages are shared with other users as part of the dating service. You control what information appears on your profile.
            </p>

            <h3 className='text-xl font-semibold mb-2 mt-4'>4.2 With Service Providers</h3>
            <p>We share information with trusted third parties who help us operate our service:</p>
            <ul className='list-disc ml-6 mt-2'>
              <li>Cloud hosting and data storage providers</li>
              <li>Payment processors</li>
              <li>Analytics and crash reporting services</li>
              <li>Customer support platforms</li>
              <li>Marketing and advertising partners</li>
              <li>Background check and verification services</li>
            </ul>

            <h3 className='text-xl font-semibold mb-2 mt-4'>4.3 For Legal Reasons</h3>
            <p>We may disclose your information when required by law or to:</p>
            <ul className='list-disc ml-6 mt-2'>
              <li>Comply with legal processes or government requests</li>
              <li>Protect our rights, property, or safety</li>
              <li>Protect the rights, property, or safety of our users</li>
              <li>Prevent fraud or illegal activities</li>
              <li>Enforce our Terms of Service</li>
            </ul>

            <h3 className='text-xl font-semibold mb-2 mt-4'>4.4 Business Transfers</h3>
            <p>
              In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new entity.
            </p>

            <h3 className='text-xl font-semibold mb-2 mt-4'>4.5 With Your Consent</h3>
            <p>
              We may share information in other circumstances with your explicit consent.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-3'>5. Data Retention</h2>
            <p>We retain your information for as long as necessary to:</p>
            <ul className='list-disc ml-6 mt-2'>
              <li>Provide our services to you</li>
              <li>Comply with legal obligations</li>
              <li>Resolve disputes and enforce agreements</li>
              <li>Prevent fraud and abuse</li>
            </ul>
            <p className='mt-3'>
              When you delete your account, we delete your personal information within 30 days, except where retention is required by law or for legitimate business purposes such as safety and security.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-3'>6. Your Privacy Rights</h2>
            <p>You have the following rights regarding your personal information:</p>
            <ul className='list-disc ml-6 mt-2'>
              <li><strong>Access:</strong> Request a copy of your personal information</li>
              <li><strong>Correction:</strong> Update or correct inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
              <li><strong>Objection:</strong> Object to certain processing of your information</li>
              <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
            </ul>
            <p className='mt-3'>
              To exercise your data deletion rights, please visit our <Link href="/nocap/delete-data" className="underline hover:no-underline">Data Deletion page</Link>.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-3'>7. Data Security</h2>
            <p>We implement comprehensive security measures to protect your information:</p>
            <ul className='list-disc ml-6 mt-2'>
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security audits and penetration testing</li>
              <li>Access controls and employee training</li>
              <li>Secure data centers with physical security</li>
              <li>Regular monitoring for suspicious activity</li>
            </ul>
            <p className='mt-3'>
              Despite our efforts, no security system is perfect. We cannot guarantee absolute security of your information.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-3'>8. Location Information</h2>
            <p>
              We collect location data to show you nearby potential matches and for safety features. You can control location sharing through your device settings. Disabling location may limit some App functionality.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-3'>9. Age Verification and Protection of Minors</h2>
            <p>
              Our service is intended for users 18 and older. We do not knowingly collect information from users under 18. If we discover that we have collected information from someone under 18, we will delete it immediately. We may use age verification services to ensure compliance.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-3'>10. International Data Transfers</h2>
            <p>
              Your information may be processed in countries outside your residence. We ensure appropriate safeguards are in place to protect your information during international transfers, including standard contractual clauses and adequacy decisions.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-3'>11. Third-Party Services</h2>
            <p>
              Our App may contain links to third-party services or integrate with third-party platforms. This Privacy Policy does not apply to third-party services. We encourage you to read their privacy policies.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-3'>12. California Privacy Rights (CCPA)</h2>
            <p>
              California residents have additional rights under the California Consumer Privacy Act:
            </p>
            <ul className='list-disc ml-6 mt-2'>
              <li>Right to know what personal information is collected</li>
              <li>Right to delete personal information</li>
              <li>Right to opt-out of the sale of personal information</li>
              <li>Right to non-discrimination for exercising privacy rights</li>
            </ul>
            <p className='mt-3'>
              <strong>Note:</strong> We do not sell personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-3'>13. European Privacy Rights (GDPR)</h2>
            <p>
              If you are in the European Economic Area, you have additional rights under the General Data Protection Regulation, including the right to lodge a complaint with a supervisory authority.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-3'>14. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy periodically. We will notify you of material changes through the App, email, or other means. The "Last Updated" date reflects when changes were made. Your continued use of the App constitutes acceptance of the updated Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-3'>15. Contact Information</h2>
            <p>
              For questions, concerns, or to exercise your privacy rights, contact us:
            </p>
            <div className='border border-gray-200 p-4 rounded-lg mt-3'>
              <p><strong>Lil Hill, LLC</strong></p>
              <p><strong>Privacy Team</strong></p>
              <p>Email: support@lilhill.org</p>
              <p>Address: PO BOX 5, OJAI, CA 93024</p>
            </div>
            <p className='mt-3'>
              <strong>Data Protection Officer:</strong> For EU-related inquiries, contact support@lilhill.org
            </p>
          </section>
        </div>
      </main>
    </>
  );
} 
