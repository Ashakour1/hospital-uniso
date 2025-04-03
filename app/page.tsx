import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative w-full h-[650px] overflow-hidden">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0">
        <Image
          src="/background.jpg"
          alt="Medical professionals performing surgery in operating room"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto h-full flex flex-col justify-center px-6">
        <div className="max-w-2xl">
          {/* Logo with animated dot */}

          {/* Main heading */}
          <div className="mb-8">
            <h2 className="text-white text-3xl md:text-4xl font-semibold leading-tight">
              Integrated Centre for
              <br />
              Advanced Surgery and
              <br />
              Oncology
            </h2>
            <p className="text-white/90 text-lg mt-4 font-light">
              Personalized Care, Advanced Solutions
            </p>
          </div>

          {/* Tagline with highlight */}
          <div className="mb-10">
            <h3 className="text-white text-4xl md:text-5xl font-bold leading-tight">
              Greater Precision,
              <br />
              <span className="text-teal-400">Faster Recovery</span>
            </h3>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-md transition-all shadow-lg hover:shadow-xl"
            >
              Learn More
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white/70 hover:border-white text-white font-medium rounded-md transition-all"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom accent bar */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-teal-500 via-teal-400 to-emerald-400 z-20"></div>
    </div>
  );
}
