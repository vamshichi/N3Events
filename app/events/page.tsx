import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, MapPin, Users, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function EventsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm text-primary">
              <span>Discover Our Events</span>
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Transforming Ideas into <span className="text-primary">Extraordinary Events</span>
            </h1>
            <p className="mt-6 text-muted-foreground md:text-xl">
              Browse our upcoming events and find the perfect opportunity to learn, connect, and grow with industry
              leaders and innovators.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Event Section */}
      <section className="bg-background py-16">
        <div className="container px-4">
          <div className="mb-10 flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Event</h2>
            <div className="mt-4 h-1 w-20 rounded bg-primary"></div>
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
                  <Button variant="outline">
                    Add to Calendar <Calendar className="ml-2 h-4 w-4" />
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

      {/* Events List Section */}
      <section className="bg-muted/30 py-16">
        <div className="container px-4">
          <div className="mb-10 flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Upcoming Events</h2>
            <div className="mt-4 h-1 w-20 rounded bg-primary"></div>
            <p className="mt-4 max-w-[700px] text-muted-foreground">
              Discover our diverse range of events designed to inspire, educate, and connect
            </p>
          </div>

          <div className="mb-8">
            <Tabs defaultValue="all" className="w-full">
              <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                <TabsList className="bg-background">
                  <TabsTrigger value="all">All Events</TabsTrigger>
                  <TabsTrigger value="tech">Technology</TabsTrigger>
                  <TabsTrigger value="corporate">Corporate</TabsTrigger>
                  <TabsTrigger value="workshops">Workshops</TabsTrigger>
                </TabsList>

                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  <span className="text-sm">Filter</span>
                </div>
              </div>

              <TabsContent value="all" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: "Robotics and Automation Live Simulation",
                      description:
                        "Join us for an exciting and innovative virtual event focused on the future of Robotics and Automation in the manufacturing industry.",
                      date: "September 2025",
                      location: "Virtual Event",
                      category: "Technology",
                      image: "/placeholder.svg?height=400&width=600",
                      link: "/rels",
                    },
                    {
                      title: "Tech Innovation Summit",
                      description:
                        "A gathering of industry leaders to discuss the latest trends and innovations in technology.",
                      date: "November 2025",
                      location: "Dubai, UAE",
                      category: "Technology",
                      image: "/placeholder.svg?height=400&width=600",
                      link: "/events/tech-innovation-summit",
                    },
                    {
                      title: "Corporate Leadership Conference",
                      description: "Develop leadership skills and network with executives from various industries.",
                      date: "January 2026",
                      location: "Abu Dhabi, UAE",
                      category: "Corporate",
                      image: "/placeholder.svg?height=400&width=600",
                      link: "/events/leadership-conference",
                    },
                    {
                      title: "Digital Marketing Workshop",
                      description: "Learn effective digital marketing strategies from industry experts.",
                      date: "March 2026",
                      location: "Virtual Event",
                      category: "Workshop",
                      image: "/placeholder.svg?height=400&width=600",
                      link: "/events/digital-marketing-workshop",
                    },
                    {
                      title: "Sustainable Business Forum",
                      description: "Exploring sustainable practices for modern businesses.",
                      date: "April 2026",
                      location: "Dubai, UAE",
                      category: "Corporate",
                      image: "/placeholder.svg?height=400&width=600",
                      link: "/events/sustainable-business-forum",
                    },
                    {
                      title: "AI in Healthcare Symposium",
                      description: "Discover how artificial intelligence is transforming healthcare.",
                      date: "June 2026",
                      location: "Abu Dhabi, UAE",
                      category: "Technology",
                      image: "/placeholder.svg?height=400&width=600",
                      link: "/events/ai-healthcare-symposium",
                    },
                  ].map((event, index) => (
                    <Card key={index} className="overflow-hidden border-primary/10 transition-all hover:shadow-md">
                      <CardContent className="p-0">
                        <div className="relative h-48 w-full overflow-hidden">
                          <Image
                            src={event.image || "/placeholder.svg"}
                            alt={event.title}
                            width={600}
                            height={400}
                            className="h-full w-full object-cover transition-transform hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                          <div className="absolute bottom-4 left-4">
                            <Badge className="bg-primary text-primary-foreground">{event.category}</Badge>
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="mb-2 text-xl font-bold">{event.title}</h3>
                          <p className="mb-4 text-muted-foreground">{event.description}</p>
                          <div className="mb-4 flex flex-wrap gap-3 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4 text-primary" />
                              <span>{event.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4 text-primary" />
                              <span>{event.location}</span>
                            </div>
                          </div>
                          <Button variant="outline" size="sm" asChild>
                            <Link href={event.link}>
                              View Details <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="tech" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: "Robotics and Automation Live Simulation",
                      description:
                        "Join us for an exciting and innovative virtual event focused on the future of Robotics and Automation in the manufacturing industry.",
                      date: "September 2025",
                      location: "Virtual Event",
                      category: "Technology",
                      image: "/placeholder.svg?height=400&width=600",
                      link: "/rels",
                    },
                    {
                      title: "Tech Innovation Summit",
                      description:
                        "A gathering of industry leaders to discuss the latest trends and innovations in technology.",
                      date: "November 2025",
                      location: "Dubai, UAE",
                      category: "Technology",
                      image: "/placeholder.svg?height=400&width=600",
                      link: "/events/tech-innovation-summit",
                    },
                    {
                      title: "AI in Healthcare Symposium",
                      description: "Discover how artificial intelligence is transforming healthcare.",
                      date: "June 2026",
                      location: "Abu Dhabi, UAE",
                      category: "Technology",
                      image: "/placeholder.svg?height=400&width=600",
                      link: "/events/ai-healthcare-symposium",
                    },
                  ].map((event, index) => (
                    <Card key={index} className="overflow-hidden border-primary/10 transition-all hover:shadow-md">
                      <CardContent className="p-0">
                        <div className="relative h-48 w-full overflow-hidden">
                          <Image
                            src={event.image || "/placeholder.svg"}
                            alt={event.title}
                            width={600}
                            height={400}
                            className="h-full w-full object-cover transition-transform hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                          <div className="absolute bottom-4 left-4">
                            <Badge className="bg-primary text-primary-foreground">{event.category}</Badge>
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="mb-2 text-xl font-bold">{event.title}</h3>
                          <p className="mb-4 text-muted-foreground">{event.description}</p>
                          <div className="mb-4 flex flex-wrap gap-3 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4 text-primary" />
                              <span>{event.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4 text-primary" />
                              <span>{event.location}</span>
                            </div>
                          </div>
                          <Button variant="outline" size="sm" asChild>
                            <Link href={event.link}>
                              View Details <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="corporate" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: "Corporate Leadership Conference",
                      description: "Develop leadership skills and network with executives from various industries.",
                      date: "January 2026",
                      location: "Abu Dhabi, UAE",
                      category: "Corporate",
                      image: "/placeholder.svg?height=400&width=600",
                      link: "/events/leadership-conference",
                    },
                    {
                      title: "Sustainable Business Forum",
                      description: "Exploring sustainable practices for modern businesses.",
                      date: "April 2026",
                      location: "Dubai, UAE",
                      category: "Corporate",
                      image: "/placeholder.svg?height=400&width=600",
                      link: "/events/sustainable-business-forum",
                    },
                  ].map((event, index) => (
                    <Card key={index} className="overflow-hidden border-primary/10 transition-all hover:shadow-md">
                      <CardContent className="p-0">
                        <div className="relative h-48 w-full overflow-hidden">
                          <Image
                            src={event.image || "/placeholder.svg"}
                            alt={event.title}
                            width={600}
                            height={400}
                            className="h-full w-full object-cover transition-transform hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                          <div className="absolute bottom-4 left-4">
                            <Badge className="bg-primary text-primary-foreground">{event.category}</Badge>
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="mb-2 text-xl font-bold">{event.title}</h3>
                          <p className="mb-4 text-muted-foreground">{event.description}</p>
                          <div className="mb-4 flex flex-wrap gap-3 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4 text-primary" />
                              <span>{event.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4 text-primary" />
                              <span>{event.location}</span>
                            </div>
                          </div>
                          <Button variant="outline" size="sm" asChild>
                            <Link href={event.link}>
                              View Details <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="workshops" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: "Digital Marketing Workshop",
                      description: "Learn effective digital marketing strategies from industry experts.",
                      date: "March 2026",
                      location: "Virtual Event",
                      category: "Workshop",
                      image: "/placeholder.svg?height=400&width=600",
                      link: "/events/digital-marketing-workshop",
                    },
                  ].map((event, index) => (
                    <Card key={index} className="overflow-hidden border-primary/10 transition-all hover:shadow-md">
                      <CardContent className="p-0">
                        <div className="relative h-48 w-full overflow-hidden">
                          <Image
                            src={event.image || "/placeholder.svg"}
                            alt={event.title}
                            width={600}
                            height={400}
                            className="h-full w-full object-cover transition-transform hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                          <div className="absolute bottom-4 left-4">
                            <Badge className="bg-primary text-primary-foreground">{event.category}</Badge>
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="mb-2 text-xl font-bold">{event.title}</h3>
                          <p className="mb-4 text-muted-foreground">{event.description}</p>
                          <div className="mb-4 flex flex-wrap gap-3 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4 text-primary" />
                              <span>{event.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4 text-primary" />
                              <span>{event.location}</span>
                            </div>
                          </div>
                          <Button variant="outline" size="sm" asChild>
                            <Link href={event.link}>
                              View Details <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="flex justify-center">
            <Button variant="outline" size="lg">
              Load More Events <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="bg-background py-16">
        <div className="container px-4">
          <div className="mb-10 flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Past Events</h2>
            <div className="mt-4 h-1 w-20 rounded bg-primary"></div>
            <p className="mt-4 max-w-[700px] text-muted-foreground">
              Explore our previous successful events and the memories we created
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Global Tech Conference 2024",
                date: "May 2024",
                location: "Dubai, UAE",
                image: "/placeholder.svg?height=400&width=600",
                link: "/events/past/global-tech-2024",
              },
              {
                title: "Leadership Summit 2023",
                date: "November 2023",
                location: "Abu Dhabi, UAE",
                image: "/placeholder.svg?height=400&width=600",
                link: "/events/past/leadership-summit-2023",
              },
              {
                title: "Marketing Innovation Forum",
                date: "March 2024",
                location: "Virtual Event",
                image: "/placeholder.svg?height=400&width=600",
                link: "/events/past/marketing-innovation-2024",
              },
            ].map((event, index) => (
              <Card key={index} className="overflow-hidden border-primary/10 transition-all hover:shadow-md">
                <CardContent className="p-0">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      width={600}
                      height={400}
                      className="h-full w-full object-cover grayscale transition-all hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-bold">{event.title}</h3>
                    <div className="mb-4 flex flex-wrap gap-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={event.link}>
                        View Gallery <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Want to Host Your Own Event?</h2>
            <p className="mt-4 max-w-[600px] text-muted-foreground">
              Let us help you create a memorable experience for your audience. Our team of experts will work with you to
              bring your vision to life.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">
                  Our Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

