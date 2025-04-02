import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import HeroAnimation from "@/components/hero-animation"

export default function Home() {
  return (<div className="flex min-h-screen flex-col justify-center items-center">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background pt-16">
        <div className="container relative z-10 px-4 py-16 md:py-24 lg:py-32">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center space-y-6">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm text-primary">
                <span>Creating Unforgettable Experiences</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Transforming Ideas into <span className="text-primary">Extraordinary Events</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                We specialize in creating memorable events that leave a lasting impression. From corporate gatherings to
                tech showcases, we bring your vision to life.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/events">
                    Explore Our Events <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/rels">
                    Robotics Event <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <HeroAnimation />
            </div>
          </div>
        </div>
        <div className="absolute inset-0 z-0 opacity-20">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <radialGradient id="heroglow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
                <stop offset="100%" stopColor="transparent" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="50" cy="20" r="20" fill="url(#heroglow)" />
          </svg>
        </div>
      </section>

      {/* Featured Event Section */}
      <section className="bg-background py-16">
        <div className="container px-4">
          <div className="mb-10 flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Event</h2>
            <p className="mt-4 max-w-[700px] text-muted-foreground">
              Don't miss our upcoming flagship event showcasing the future of robotics and automation
            </p>
          </div>

          <Card className="overflow-hidden border-primary/10 bg-gradient-to-br from-primary/5 to-background shadow-lg transition-all hover:shadow-xl">
            <CardContent className="grid gap-6 p-6 md:grid-cols-2 md:p-8">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm text-primary">
                  <span>September 2025</span>
                </div>
                <h3 className="text-2xl font-bold sm:text-3xl">Robotics and Automation Live Simulation</h3>
                <p className="text-muted-foreground">
                  Join us for an exciting and innovative virtual event focused on the future of Robotics and Automation
                  in the manufacturing industry.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button asChild>
                    <Link href="/rels">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>September 2025</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>Virtual Event</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-primary" />
                    <span>Industry Professionals</span>
                  </div>
                </div>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Robotics and Automation Event"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 rounded-full bg-primary px-3 py-1 text-sm font-medium text-primary-foreground">
                  Season 1
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-muted/30 py-16">
        <div className="container px-4">
          <div className="mb-10 flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
            <p className="mt-4 max-w-[700px] text-muted-foreground">
              We offer comprehensive event planning and management services tailored to your needs
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Corporate Events",
                description:
                  "Professional conferences, seminars, and team-building activities designed to meet your business objectives.",
                icon: "🏢",
              },
              {
                title: "Tech Showcases",
                description:
                  "Innovative exhibitions and demonstrations highlighting the latest advancements in technology.",
                icon: "💻",
              },
              {
                title: "Virtual Events",
                description:
                  "Engaging online experiences with interactive elements and seamless participant engagement.",
                icon: "🌐",
              },
              {
                title: "Workshops & Training",
                description: "Educational sessions led by industry experts to develop skills and knowledge.",
                icon: "📚",
              },
              {
                title: "Product Launches",
                description: "Strategic events designed to create buzz and excitement around your new offerings.",
                icon: "🚀",
              },
              {
                title: "Custom Experiences",
                description: "Tailored events crafted to meet your specific vision, goals, and audience needs.",
                icon: "✨",
              },
            ].map((service, index) => (
              <Card key={index} className="overflow-hidden border-primary/10 transition-all hover:shadow-md">
                <CardContent className="flex flex-col items-start p-6">
                  <div className="mb-4 text-4xl">{service.icon}</div>
                  <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-background py-16">
        <div className="container px-4">
          <div className="mb-10 flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Clients Say</h2>
            <p className="mt-4 max-w-[700px] text-muted-foreground">
              Hear from organizations that have experienced our exceptional event management services
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote:
                  "The team delivered an exceptional experience that exceeded our expectations. Our product launch was flawless.",
                author: "Sarah Johnson",
                company: "TechInnovate Inc.",
              },
              {
                quote:
                  "Working with this event company transformed our annual conference into an engaging and memorable experience.",
                author: "Michael Chen",
                company: "Global Solutions",
              },
              {
                quote:
                  "Their attention to detail and innovative approach made our robotics showcase stand out from any event we've hosted before.",
                author: "Dr. Emily Rodriguez",
                company: "Future Automation",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="overflow-hidden border-primary/10 bg-primary/5 transition-all hover:shadow-md"
              >
                <CardContent className="flex flex-col p-6">
                  <div className="mb-4 text-4xl">"</div>
                  <p className="mb-6 flex-grow text-muted-foreground">{testimonial.quote}</p>
                  <div>
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 py-16">
        <div className="container px-4">
          <div className="flex flex-col items-center rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 p-8 text-center shadow-lg md:p-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Create Your Next Event?</h2>
            <p className="mt-4 max-w-[600px] text-muted-foreground">
              Contact us today to discuss how we can bring your vision to life and create an unforgettable experience.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/rels">
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

