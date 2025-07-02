import Link from "next/link";
import Image from "next/image";

// app/page.tsx
export default function Home() {
  return (
    <main className="flex flex-col gap-8 items-center justify-center min-h-screen p-8">
      <div>
        <h1 className="text-6xl font-ultralight mb-2">Lil Hill, LLC</h1>
        <p className="text-xl font-sans mb-4">Upper Ojai, California</p>
        <p className="text-gray-500 text-sm text-center">PO BOX 5 <br/> OJAI, CA 93024</p>
      </div>
      
      <div className="flex gap-4 mb-4">
        <Link href="/legal/terms-of-service" passHref>
          Terms of Service
        </Link>
        <Link href="/legal/privacy-policy" passHref>
          Privacy Policy
        </Link>
      </div>

      {/* No Cap Section */}
      <div className="border-t border-gray-200 pt-8 flex flex-col items-center gap-4">
        <div className="flex items-center gap-4 mb-2">
          <div className="bg-white p-3 rounded-lg shadow-sm">
            <Image
              src="/logocap.png"
              alt="No Cap Logo"
              width={60}
              height={60}
              className="rounded-lg"
            />
          </div>
          <h2 className="text-3xl font-light">No Cap Dating App</h2>
        </div>
        <p className="text-gray-600 text-center mb-4">Privacy & Legal Information</p>
        <div className="flex flex-col gap-2 text-center">
          <Link href="/nocap/terms-of-service">
            Terms of Service
          </Link>
          <Link href="/nocap/privacy-policy">
            Privacy Policy
          </Link>
          <Link href="/nocap/delete-account">
            Delete Account
          </Link>
          <Link href="/nocap/delete-data">
            Delete Personal Data
          </Link>
        </div>
      </div>
    </main>
  );
}
