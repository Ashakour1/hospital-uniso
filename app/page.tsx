import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold">Welcome to My App</h1>
        <p className="mt-4 text-lg">This is a simple Next.js application.</p>
        <Image
          src="/images/hero.jpg"
          alt="Hero Image"
          width={500}
          height={300}
          className="rounded-lg mt-6"
        />
        <p className="mt-4 text-lg">Follow us on social media!</p>
      </div>
    </div>
  );
}

