import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-black text-white w-full h-screen py-20">
      <div className="container px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <span className="inline-block w-fit rounded-full border border-gray-500 bg-gray-800 px-3 py-1 text-sm text-gray-300">
            Creating Unforgettable Experiences
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Transforming Ideas into{" "}
            <span className="text-gray-400">Extraordinary Events</span>
          </h1>
          <p className="text-gray-300 md:text-lg">
            We craft memorable events that leave a lasting impact—from corporate gatherings to tech showcases.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/rals"
              className="inline-flex items-center px-6 py-3 text-lg font-medium text-black bg-white rounded-lg hover:bg-gray-300 transition"
            >
              Explore Our Event <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            {/* <Link
              href="/rels"
              className="inline-flex items-center px-6 py-3 text-lg font-medium border border-gray-500 rounded-lg text-white hover:bg-gray-800 transition"
            >
              Robotics Event <ArrowRight className="ml-2 h-5 w-5" />
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
}
