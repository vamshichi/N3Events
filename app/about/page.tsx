import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Users, CheckCircle, Award, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
        <div className="container px-4">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center space-y-6">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm text-primary">
                <span>About Us</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Creating <span className="text-primary">Memorable</span> Experiences Since 2010
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                We are a team of dedicated event professionals with a passion for turning ideas into unforgettable
                experiences. From corporate gatherings to tech showcases, we bring your vision to life.
              </p>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Team working together"
                width={800}
                height={600}
                className="h-full w-full object-cover transition-transform hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-background py-16">
        <div className="container px-4">
          <div className="mb-10 flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Story</h2>
            <div className="mt-4 h-1 w-20 rounded bg-primary"></div>
          </div>

          <div className="mx-auto max-w-4xl space-y-6 text-center">
            <p className="text-lg text-muted-foreground">
              Founded in 2010, EventCo began with a simple mission: to transform ordinary gatherings into extraordinary
              experiences. What started as a small team organizing local corporate events has grown into a comprehensive
              event management company with a global reach.
            </p>
            <p className="text-lg text-muted-foreground">
              Over the years, we've had the privilege of working with organizations across industries, from tech giants
              to educational institutions, helping them create impactful events that leave lasting impressions.
            </p>
            <p className="text-lg text-muted-foreground">
              Today, our team comprises experienced event planners, creative designers, technical specialists, and
              logistics experts, all dedicated to exceeding client expectations and delivering flawless experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="bg-muted/30 py-16">
        <div className="container px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col items-start space-y-4">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm text-primary">
                <span>Our Mission</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why We Do What We Do</h2>
              <p className="text-muted-foreground">
                Our mission is to create meaningful connections through exceptional events. We believe in the power of
                shared experiences to inspire, educate, and transform.
              </p>
              <ul className="space-y-3">
                {[
                  "Deliver experiences that exceed expectations",
                  "Foster meaningful connections between participants",
                  "Showcase innovative ideas through thoughtful event design",
                  "Create lasting memories for all attendees",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm text-primary">
                <span>Our Values</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">The Principles That Guide Us</h2>
              <p className="text-muted-foreground">
                Our core values shape every decision we make and every event we create. They define who we are as a
                company and as individuals.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "Excellence",
                    description: "We strive for perfection in every detail",
                    icon: Award,
                  },
                  {
                    title: "Innovation",
                    description: "We embrace creative solutions and new ideas",
                    icon: Target,
                  },
                  {
                    title: "Integrity",
                    description: "We operate with honesty and transparency",
                    icon: CheckCircle,
                  },
                  {
                    title: "Collaboration",
                    description: "We work together to achieve common goals",
                    icon: Users,
                  },
                ].map((value, index) => (
                  <Card key={index} className="border-primary/10 transition-all hover:shadow-md">
                    <CardContent className="flex flex-col items-start p-4">
                      <value.icon className="mb-2 h-6 w-6 text-primary" />
                      <h3 className="text-lg font-bold">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-background py-16">
        <div className="container px-4">
          <div className="mb-10 flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet Our Team</h2>
            <div className="mt-4 h-1 w-20 rounded bg-primary"></div>
            <p className="mt-4 max-w-[700px] text-muted-foreground">
              Our diverse team of professionals brings together expertise from various backgrounds to create exceptional
              events
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO & Founder",
                bio: "With over 15 years in event management, Sarah leads our team with vision and passion.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Michael Chen",
                role: "Creative Director",
                bio: "Michael transforms concepts into visually stunning experiences that captivate audiences.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Aisha Khan",
                role: "Head of Operations",
                bio: "Aisha ensures flawless execution of every event, managing logistics with precision.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "David Rodriguez",
                role: "Technical Manager",
                bio: "David oversees all technical aspects of our events, from sound to virtual experiences.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Lisa Thompson",
                role: "Client Relations Manager",
                bio: "Lisa works closely with clients to understand their vision and exceed expectations.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Omar Al-Farsi",
                role: "Marketing Specialist",
                bio: "Omar creates compelling campaigns that drive attendance and engagement.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Emma Wilson",
                role: "Event Coordinator",
                bio: "Emma manages the myriad details that make each event uniquely successful.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "James Park",
                role: "Financial Controller",
                bio: "James ensures our projects deliver value while maintaining financial integrity.",
                image: "/placeholder.svg?height=400&width=400",
              },
            ].map((member, index) => (
              <Card key={index} className="overflow-hidden border-primary/10 transition-all hover:shadow-md">
                <CardContent className="p-0">
                  <div className="relative h-60 w-full overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="h-full w-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold">{member.name}</h3>
                    <p className="mb-2 text-sm text-primary">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="bg-primary/5 py-16">
        <div className="container px-4">
          <div className="mb-10 flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Journey</h2>
            <div className="mt-4 h-1 w-20 rounded bg-primary"></div>
            <p className="mt-4 max-w-[700px] text-muted-foreground">
              Key milestones in our evolution as a premier event management company
            </p>
          </div>

          <div className="relative mx-auto max-w-4xl">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 h-full w-0.5 bg-primary/20 md:left-1/2 md:-ml-0.5"></div>

            {/* Timeline items */}
            {[
              {
                year: "2010",
                title: "Company Founded",
                description: "EventCo was established with a focus on corporate events.",
              },
              {
                year: "2013",
                title: "Expanded Services",
                description: "Added virtual event capabilities and expanded team to 15 members.",
              },
              {
                year: "2015",
                title: "International Reach",
                description: "Organized our first international conference with attendees from 30 countries.",
              },
              {
                year: "2018",
                title: "Industry Recognition",
                description: "Received 'Event Company of the Year' award from Industry Association.",
              },
              {
                year: "2020",
                title: "Digital Transformation",
                description: "Pivoted to fully virtual events during global challenges.",
              },
              {
                year: "2023",
                title: "Hybrid Innovation",
                description: "Pioneered new approaches to hybrid events, combining in-person and virtual experiences.",
              },
              {
                year: "2025",
                title: "Robotics Focus",
                description: "Launched specialized division for technology and robotics events.",
              },
            ].map((milestone, index) => (
              <div
                key={index}
                className={`relative mb-8 ${index % 2 === 0 ? "md:ml-auto md:pl-16" : "md:mr-auto md:pr-16"} md:w-1/2`}
              >
                <div className="flex md:block">
                  <div className="z-10 mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground md:absolute md:left-0 md:ml-0 md:mr-0 md:translate-x-[-50%]">
                    {index + 1}
                  </div>
                  <Card className="w-full border-primary/10 shadow-sm">
                    <CardContent className="p-4">
                      <div className="mb-1 text-sm font-medium text-primary">{milestone.year}</div>
                      <h3 className="mb-2 text-lg font-bold">{milestone.title}</h3>
                      <p className="text-sm text-muted-foreground">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-background py-16">
        <div className="container px-4">
          <div className="flex flex-col items-center rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 p-8 text-center shadow-lg md:p-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Work With Us?</h2>
            <p className="mt-4 max-w-[600px] text-muted-foreground">
              Let's create an unforgettable event together. Contact us to discuss your vision and how we can bring it to
              life.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/events">
                  Explore Our Events <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

