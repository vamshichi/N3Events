import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function FeaturedEvents() {
  const events = [
    {
      title: "Robotics and Automation Live Simulation",
      description:
        "Join us for an exciting and innovative virtual event focused on the future of Robotics and Automation in the manufacturing industry.",
      date: "September 2025",
      location: "Virtual Event",
      image: "/placeholder.svg?height=400&width=600",
      link: "/rels",
    },
    {
      title: "Tech Innovation Summit",
      description: "A gathering of industry leaders to discuss the latest trends and innovations in technology.",
      date: "November 2025",
      location: "Dubai, UAE",
      image: "/placeholder.svg?height=400&width=600",
      link: "/events/tech-innovation-summit",
    },
    {
      title: "Corporate Leadership Conference",
      description: "Develop leadership skills and network with executives from various industries.",
      date: "January 2026",
      location: "Abu Dhabi, UAE",
      image: "/placeholder.svg?height=400&width=600",
      link: "/events/leadership-conference",
    },
  ]

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {events.map((event, index) => (
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
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

