import Link from "next/link";
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";
import Image from "next/image";
import img from "@/public/images/WhatsApp Image 2025-04-03 at 11.40.53_63a58886.jpg"
export default function FeaturedEvent() {
  return (
    <section className="bg-black text-white w-full py-16">
      <div className="container px-6">
        {/* Title */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Featured Event
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-gray-400">
            Don't miss our upcoming flagship event showcasing the future of robotics and automation.
          </p>
        </div>

        {/* Event Card */}
        <div className="overflow-hidden border border-gray-800 bg-gray-900 rounded-xl shadow-lg transition-all hover:shadow-2xl">
          <div className="grid gap-6 p-6 md:grid-cols-2 md:p-8">
            {/* Left Content */}
            <div className="flex flex-col justify-center space-y-4">
              <span className="inline-block w-fit rounded-full border border-gray-600 bg-gray-800 px-3 py-1 text-sm text-gray-300">
                September 2025
              </span>
              <h3 className="text-2xl font-bold sm:text-3xl">
                Robotics and Automation Live Simulation
              </h3>
              <p className="text-gray-400">
                Join us for an exciting and innovative virtual event focused on the future of Robotics and Automation in
                the manufacturing industry.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/rals"
                  className="inline-flex items-center px-6 py-3 text-lg font-medium text-black bg-white rounded-lg hover:bg-gray-300 transition"
                >
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4 text-white" />
                  <span>September 2025</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4 text-white" />
                  <span>Virtual Event</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4 text-white" />
                  <span>Industry Professionals</span>
                </div>
              </div>
            </div>

            {/* Right Content (No Image) */}
            <div className="hidden md:flex items-center justify-center border-l border-gray-700 pl-8">
              {/* <span className="text-lg font-semibold text-gray-400">
                "Innovating the Future of Automation"
              </span> */}
              <Image src={img} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
