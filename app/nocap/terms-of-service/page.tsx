"use client";

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function NoCapTermsOfService() {
  return (
    <>
      <Head>
        <title>Terms of Service - No Cap Dating App</title>
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
          <h2 className="text-3xl font-light text-center">Terms of Service</h2>
        </div>
        
        <div className='text-sm text-gray-600 mb-8 text-center'>
          Last Updated: January 30, 2025
        </div>

        <div className='space-y-6'>
          <section>
            <h2 className='text-2xl font-semibold mb-3'>1. Acceptance of Terms</h2>
            <p>
              By accessing or using the No Cap dating application ("App"), operated by Lil Hill, LLC, you agree to be bound by these Terms of Service ("Terms") and our Privacy Policy. If you do not agree to these Terms, do not use the App.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-3'>2. Description of Service</h2>
            <p>
              No Cap is a dating and social networking platform that allows users to create profiles, connect with other users, send messages, and engage in dating-related activities. The App is designed for adults seeking romantic connections and relationships.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-3'>3. Age Requirements and Eligibility</h2>
            <p>
              <strong>You must be at least 18 years old to use this App.</strong> By using the App, you represent and warrant that:
            </p>
            <ul className='list-disc ml-6 mt-2'>
              <li>You are at least 18 years of age</li>
              <li>You have the legal capacity to enter into these Terms</li>
              <li>You are not prohibited from using the App under applicable law</li>
              <li>You have not been previously banned from the App</li>
            </ul>
            <p className='mt-3'>
              We reserve the right to verify your age through various means and may suspend or terminate accounts that cannot be verified.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-3'>4. User Accounts and Profile Information</h2>
            <p>
              To use the App, you must create an account and provide accurate, current, and complete information. You agree to:
            </p>
            <ul className='list-disc ml-6 mt-2'>
              <li>Provide truthful and accurate information in your profile</li>
              <li>Use recent photos that accurately represent your appearance</li>
              <li>Maintain the security of your account credentials</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
              <li>Update your information to keep it accurate and current</li>
            </ul>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-3'>5. User Conduct and Community Guidelines</h2>
            <p>You agree to use the App in a respectful and lawful manner. You will NOT:</p>
            <ul className='list-disc ml-6 mt-2'>
              <li>Harass, abuse, threaten, or intimidate other users</li>
              <li>Post or share inappropriate, offensive, or explicit content</li>
              <li>Engage in hate speech, discrimination, or bullying</li>
              <li>Share contact information or attempt to redirect users off-platform initially</li>
              <li>Use the App for commercial purposes or spam</li>
              <li>Create fake profiles or impersonate others</li>
              <li>Share intimate images without consent</li>
              <li>Solicit money, gifts, or personal financial information</li>
              <li>Engage in illegal activities or promote violence</li>
              <li>Use the App if you are a registered sex offender</li>
            </ul>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-3'>6. Safety and Security</h2>
            <p>Your safety is our priority. We provide the following safety features:</p>
            <ul className='list-disc ml-6 mt-2'>
              <li>Reporting and blocking functionality</li>
              <li>Photo verification options</li>
              <li>Safety tips and resources</li>
              <li>Moderation of profiles and content</li>
            </ul>
            <p className='mt-3'>
              <strong>Important:</strong> Always meet in public places for first dates, inform friends of your plans, and trust your instincts. We cannot guarantee the identity or intentions of other users.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-3'>7. Content Moderation and Enforcement</h2>
            <p>
              We reserve the right to review, monitor, and remove content that violates these Terms. We may:
            </p>
            <ul className='list-disc ml-6 mt-2'>
              <li>Remove profiles, photos, or messages that violate our guidelines</li>
              <li>Temporarily suspend or permanently ban users who violate these Terms</li>
              <li>Report illegal activity to law enforcement</li>
              <li>Use automated and human moderation systems</li>
            </ul>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-3'>8. Privacy and Data Protection</h2>
            <p>
              Your privacy is important to us. Please review our <Link href="/nocap/privacy-policy" className="underline hover:no-underline">Privacy Policy</Link> to understand how we collect, use, and protect your personal information, including sensitive data related to your dating preferences and activities.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-3'>9. Account Deletion</h2>
            <p>
              You have the right to delete your account and all associated data at any time. Upon account deletion:
            </p>
            <ul className='list-disc ml-6 mt-2'>
              <li>Your profile will be immediately removed from the app</li>
              <li>All your messages, photos, and personal data will be permanently deleted</li>
              <li>This action cannot be undone</li>
              <li>You may need to cancel any active subscriptions separately through your app store</li>
            </ul>
            <p className='mt-3'>
              To request account deletion, please visit our <Link href="/nocap/delete-account" className="underline hover:no-underline">Account Deletion page</Link>.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-3'>10. Subscription and Payment Terms</h2>
            <p>
              Some features may require payment. By purchasing a subscription:
            </p>
            <ul className='list-disc ml-6 mt-2'>
              <li>You agree to pay all applicable fees</li>
              <li>Subscriptions automatically renew unless cancelled</li>
              <li>Refunds are subject to our refund policy and applicable law</li>
              <li>You can manage subscriptions through your device's app store</li>
            </ul>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-3'>11. Intellectual Property</h2>
            <p>
              You retain ownership of content you post. By posting content, you grant us a license to use, modify, and display it for App operations. The App itself and its features are owned by Lil Hill, LLC.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-3'>12. Disclaimers and Limitations</h2>
            <p>
              THE APP IS PROVIDED "AS IS" WITHOUT WARRANTIES. We do not guarantee:
            </p>
            <ul className='list-disc ml-6 mt-2'>
              <li>That you will find a romantic match</li>
              <li>The accuracy of user profiles</li>
              <li>Uninterrupted service</li>
              <li>The behavior of other users</li>
            </ul>
            <p className='mt-3'>
              TO THE FULLEST EXTENT PERMITTED BY LAW, WE LIMIT OUR LIABILITY FOR ANY DAMAGES ARISING FROM YOUR USE OF THE APP.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-3'>13. Termination</h2>
            <p>
              Either party may terminate your account at any time. Upon termination, your access to the App will cease, and we may delete your account and associated data.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-3'>14. Governing Law and Disputes</h2>
            <p>
              These Terms are governed by the laws of California, United States. Any disputes will be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-3'>15. Changes to Terms</h2>
            <p>
              We may update these Terms periodically. We will notify you of material changes through the App or by email. Your continued use constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-3'>16. Contact Information</h2>
            <p>
              For questions about these Terms or to report violations, contact us at:
            </p>
            <div className='border border-gray-200 p-4 rounded-lg mt-3'>
              <p><strong>Lil Hill, LLC</strong></p>
              <p>Email: support@lilhill.org</p>
              <p>Address: PO BOX 5, OJAI, CA 93024</p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
} 
