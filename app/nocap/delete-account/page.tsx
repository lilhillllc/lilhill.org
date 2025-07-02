"use client";

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function DeleteAccount() {
  const handleAccountDeletion = () => {
    const subject = encodeURIComponent('No Cap - Account Deletion Request');
    const body = encodeURIComponent(`Hello,

I would like to request the deletion of my No Cap dating app account and all associated data.

Account Information:
- Email address associated with account: [Please enter your email here]
- Phone number (if provided): [Please enter if applicable]
- Approximate account creation date: [Please enter if known]

I understand that this will permanently delete my profile, messages, photos, and all other personal data from the No Cap platform.

Thank you,
[Your name]`);
    
    window.location.href = `mailto:support@lilhill.org?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <Head>
        <title>Delete Account - No Cap Dating App</title>
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
          <h2 className="text-3xl font-light text-center">Delete Account</h2>
        </div>
        
        <div className='space-y-6'>
          <section>
            <h2 className='text-2xl font-semibold mb-3'>Account Deletion Request</h2>
            <p>
              We're sorry to see you go! If you'd like to delete your No Cap account, we'll permanently remove all of your data from our system.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-3'>What Gets Deleted</h2>
            <p>When you delete your account, we will permanently remove:</p>
            <ul className='list-disc ml-6 mt-2'>
              <li>Your profile information and photos</li>
              <li>All messages and conversations</li>
              <li>Your match history and preferences</li>
              <li>Location data and usage analytics</li>
              <li>All other personal data associated with your account</li>
            </ul>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-3'>Important Notes</h2>
            <ul className='list-disc ml-6'>
              <li><strong>This action cannot be undone</strong> - once your account is deleted, you cannot recover your data</li>
              <li><strong>Subscriptions:</strong> You may need to cancel any active subscriptions separately through your app store</li>
              <li><strong>Processing time:</strong> Account deletion will be completed within 30 days of your request</li>
              <li><strong>Legal requirements:</strong> Some data may be retained longer if required by law</li>
            </ul>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-3'>Before You Delete</h2>
            <p>Consider these alternatives:</p>
            <ul className='list-disc ml-6'>
              <li><strong>Hide your profile:</strong> You can make your profile invisible without deleting your account</li>
              <li><strong>Take a break:</strong> Temporarily deactivate your account instead of permanent deletion</li>
              <li><strong>Contact support:</strong> If you're having issues, our support team may be able to help</li>
            </ul>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-3'>Request Account Deletion</h2>
            <div className='border border-red-200 bg-red-50 p-6 rounded-lg'>
              <p className='mb-4 text-red-900'>
                <strong>Ready to delete your account?</strong> Click the link below to send us your deletion request:
              </p>
              <button
                onClick={handleAccountDeletion}
                className='underline hover:no-underline text-red-600 font-medium'
              >
                Send Account Deletion Request
              </button>
              <p className='text-sm text-red-700 mt-3'>
                This will open your email client with a pre-filled deletion request. We will process your request within 30 days and send you confirmation when it's complete.
              </p>
            </div>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-3'>Contact Information</h2>
            <p>
              If you have questions about account deletion, contact us:
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
