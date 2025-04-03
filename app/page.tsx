import Link from "next/link"
// import Image from "next/image"
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import HeroAnimation from "@/components/hero-animation"
import HeroSection from "@/components/homepage/herosection"
import FeaturedEvent from "@/components/homepage/Event"
import ServicesSection from "@/components/homepage/Service"

export default function Home() {
  return (
    
    <div className="flex min-h-screen flex-col justify-center items-center">
      {/* Hero Section */}
     {/* <HeroSection /> */}
     <div className="relative  w-full overflow-hidden shadow-[0_0_30px_rgba(165,216,255,1)]">
                <video
                  src="/video/WhatsApp Video 2025-04-03 at 15.21.20_60d5ba0a.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1445]/50 to-transparent"></div>
              </div>
      {/* Featured Event Section */}
       <FeaturedEvent />

      {/* Services Section */}
      <ServicesSection />

      {/* Testimonials Section */}
      
      {/* CTA Section */}
      <section className="bg-black w-full py-16">
      <div className="container px-4">
        <div className="flex flex-col items-center rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 text-center shadow-lg md:p-12">
          <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">
            Ready to Create Your Next Event?
          </h2>
          <p className="mt-4 max-w-[600px] text-gray-400">
            Contact us today to discuss how we can bring your vision to life and create an unforgettable experience.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="bg-white text-black hover:bg-gray-200" asChild>
              <Link href="/contact">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-black hover:bg-white/10" asChild>
              <Link href="/rals">
                Explore Robotics Event <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

