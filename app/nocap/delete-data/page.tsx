"use client";

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function DeleteData() {
  const handleDataDeletion = () => {
    const subject = encodeURIComponent('No Cap - Data Deletion Request');
    const body = encodeURIComponent(`Hello,

I would like to request the deletion of my personal data from the No Cap dating app.

Account Information:
- Email address associated with account: [Please enter your email here]
- Phone number (if provided): [Please enter if applicable]
- Approximate account creation date: [Please enter if known]

Specific data I would like deleted:
☐ All personal profile information
☐ All photos and media
☐ All messages and conversations
☐ All location data
☐ All usage analytics data
☐ All other personal data you have collected

I understand my rights under applicable privacy laws and request confirmation once the deletion is complete.

Thank you,
[Your name]`);
    
    window.location.href = `mailto:support@lilhill.org?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <Head>
        <title>Delete Personal Data - No Cap Dating App</title>
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
          <h2 className="text-3xl font-light text-center">Delete Personal Data</h2>
        </div>
        
        <div className='space-y-6'>
          <section>
            <h2 className='text-2xl font-semibold mb-3'>Your Privacy Rights</h2>
            <p>
              You have the right to request deletion of your personal data under privacy laws including GDPR, CCPA, and other applicable regulations. This page helps you exercise that right.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-3'>What Data Can Be Deleted</h2>
            <p>You can request deletion of:</p>
            <ul className='list-disc ml-6 mt-2'>
              <li><strong>Profile Information:</strong> Name, bio, interests, preferences, photos</li>
              <li><strong>Account Data:</strong> Email, phone number, date of birth</li>
              <li><strong>Communication Data:</strong> Messages, photos shared with other users</li>
              <li><strong>Usage Data:</strong> App interaction data, search queries, time spent</li>
              <li><strong>Location Data:</strong> GPS coordinates and location history</li>
              <li><strong>Device Information:</strong> Device IDs, IP addresses, crash reports</li>
              <li><strong>Analytics Data:</strong> Behavioral data and usage patterns</li>
            </ul>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-3'>Data We May Retain</h2>
            <p>Some data may be retained for legitimate purposes:</p>
            <ul className='list-disc ml-6 mt-2'>
              <li><strong>Legal compliance:</strong> Data required by law or legal proceedings</li>
              <li><strong>Safety and security:</strong> Data needed to protect users and prevent abuse</li>
              <li><strong>Fraud prevention:</strong> Information used to detect and prevent fraudulent activity</li>
              <li><strong>Aggregated data:</strong> Anonymized data that cannot identify you personally</li>
            </ul>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-3'>Processing Timeline</h2>
            <ul className='list-disc ml-6'>
              <li><strong>Response time:</strong> We will respond to your request within 30 days</li>
              <li><strong>Verification:</strong> We may need to verify your identity before processing</li>
              <li><strong>Completion:</strong> Data deletion will be completed within 30 days of verification</li>
              <li><strong>Confirmation:</strong> We will notify you when the deletion is complete</li>
            </ul>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-3'>Alternative Options</h2>
            <p>Before requesting data deletion, consider:</p>
            <ul className='list-disc ml-6'>
              <li><strong>Data portability:</strong> Request a copy of your data instead</li>
              <li><strong>Data correction:</strong> Update incorrect information rather than deleting</li>
              <li><strong>Processing restriction:</strong> Limit how we use your data without deleting it</li>
              <li><strong>Account deactivation:</strong> Temporarily disable your account</li>
            </ul>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-3'>Submit Data Deletion Request</h2>
            <div className='border border-blue-200 bg-blue-50 p-6 rounded-lg'>
              <p className='mb-4 text-blue-900'>
                <strong>Ready to request data deletion?</strong> Click the link below to send us your request:
              </p>
              <button
                onClick={handleDataDeletion}
                className='underline hover:no-underline text-blue-600 font-medium'
              >
                Send Data Deletion Request
              </button>
              <p className='text-sm text-blue-700 mt-3'>
                This will open your email client with a detailed data deletion request. We will respond within 30 days and confirm when deletion is complete.
              </p>
            </div>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-3'>Your Rights Under Privacy Laws</h2>
            <div className='border border-gray-200 p-4 rounded-lg'>
              <p><strong>GDPR (EU residents):</strong> Right to erasure, right to be forgotten</p>
              <p><strong>CCPA (California residents):</strong> Right to delete personal information</p>
              <p><strong>Other jurisdictions:</strong> Various data protection rights may apply</p>
            </div>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-3'>Contact Information</h2>
            <p>
              For questions about data deletion or privacy rights, contact us:
            </p>
            <div className='border border-gray-200 p-4 rounded-lg mt-3'>
              <p><strong>Lil Hill, LLC - Privacy Team</strong></p>
              <p>Email: support@lilhill.org</p>
              <p>Address: PO BOX 5, OJAI, CA 93024</p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
} 
