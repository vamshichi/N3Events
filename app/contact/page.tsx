"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Mail, Phone, MapPin, Clock, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { motion, AnimatePresence } from "framer-motion"

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would handle the form submission here
    setFormSubmitted(true)
  }

  return (
    <div className="flex min-h-screen flex-col justify-center items-center">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm text-primary">
              <span>Get In Touch</span>
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Let's Create <span className="text-primary">Something Amazing</span> Together
            </h1>
            <p className="mt-6 text-muted-foreground md:text-xl">
              Have a question or ready to start planning your next event? We're here to help turn your vision into
              reality.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-background py-16">
        <div className="container px-4">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
            {/* Form */}
            <Card className="overflow-hidden border-primary/10 bg-gradient-to-br from-primary/5 to-background shadow-lg transition-all hover:shadow-xl">
              <CardContent className="p-6 md:p-8">
                <AnimatePresence mode="wait">
                  {formSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center justify-center py-8 text-center"
                    >
                      <div className="mb-6 rounded-full bg-primary/20 p-4">
                        <Check className="h-12 w-12 text-primary" />
                      </div>
                      <h3 className="mb-4 text-2xl font-bold">Message Sent!</h3>
                      <p className="mb-6 text-muted-foreground">
                        Thank you for reaching out. We've received your message and will get back to you within 24
                        hours.
                      </p>
                      <Button onClick={() => setFormSubmitted(false)}>Send Another Message</Button>
                    </motion.div>
                  ) : (
                    <motion.form
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      <div>
                        <h2 className="mb-4 text-2xl font-bold">Send Us a Message</h2>
                        <p className="mb-6 text-muted-foreground">
                          Fill out the form below and our team will get back to you as soon as possible.
                        </p>
                      </div>

                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="first-name">First Name</Label>
                          <Input id="first-name" placeholder="Enter your first name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Last Name</Label>
                          <Input id="last-name" placeholder="Enter your last name" required />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" placeholder="Enter your email address" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" placeholder="Enter your phone number" />
                      </div>

                      <div className="space-y-2">
                        <Label>What can we help you with?</Label>
                        <RadioGroup defaultValue="corporate">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="corporate" id="corporate" />
                            <Label htmlFor="corporate">Corporate Event</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="tech" id="tech" />
                            <Label htmlFor="tech">Tech Showcase</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="virtual" id="virtual" />
                            <Label htmlFor="virtual">Virtual Event</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="other" id="other" />
                            <Label htmlFor="other">Other</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Your Message</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your event or inquiry"
                          className="min-h-[120px]"
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full">
                        Send Message <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="flex flex-col justify-between space-y-6">
              <div>
                <h2 className="mb-4 text-2xl font-bold">Contact Information</h2>
                <p className="mb-6 text-muted-foreground">
                  Reach out to us directly or visit our office. We're always happy to hear from you.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Mail className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-bold">Email</h3>
                      <p className="text-muted-foreground">info@eventco.com</p>
                      <p className="text-muted-foreground">support@eventco.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-bold">Phone</h3>
                      <p className="text-muted-foreground">+971 4 123 4567</p>
                      <p className="text-muted-foreground">+971 50 987 6543</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-bold">Address</h3>
                      <p className="text-muted-foreground">
                        EventCo Headquarters
                        <br />
                        Level 42, Downtown Tower
                        <br />
                        Dubai, United Arab Emirates
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-bold">Office Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 6:00 PM
                        <br />
                        Saturday: 10:00 AM - 2:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=600"
                  alt="Office Location Map"
                  width={600}
                  height={300}
                  className="h-[300px] w-full object-cover"
                />
              </div>

              <div>
                <h3 className="mb-4 text-xl font-bold">Follow Us</h3>
                <div className="flex space-x-4">
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-twitter"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-linkedin"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-facebook"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-instagram"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted/30 py-16">
        <div className="container px-4">
          <div className="mb-10 flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
            <div className="mt-4 h-1 w-20 rounded bg-primary"></div>
            <p className="mt-4 max-w-[700px] text-muted-foreground">
              Find answers to common questions about our services and event planning process
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            {[
              {
                question: "How far in advance should I book my event?",
                answer:
                  "We recommend booking at least 3-6 months in advance for large events and 1-3 months for smaller gatherings. However, we can accommodate rush requests depending on availability.",
              },
              {
                question: "What types of events do you specialize in?",
                answer:
                  "We specialize in corporate events, tech showcases, virtual experiences, workshops, product launches, and custom experiences tailored to your specific needs.",
              },
              {
                question: "Do you handle events outside of the UAE?",
                answer:
                  "Yes, we organize events globally. Our team has experience managing events across the Middle East, Europe, Asia, and North America.",
              },
              {
                question: "Can you help with virtual or hybrid events?",
                answer:
                  "We have extensive experience creating engaging virtual and hybrid events with interactive elements and seamless technical execution.",
              },
              {
                question: "What is your pricing structure?",
                answer:
                  "Our pricing varies based on the scope, scale, and specific requirements of your event. We provide detailed proposals after an initial consultation to understand your needs.",
              },
              {
                question: "Do you offer event marketing services?",
                answer:
                  "Yes, we offer comprehensive event marketing services including strategy development, content creation, social media promotion, and attendee acquisition.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-primary/10 transition-all hover:shadow-md">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-bold">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-background py-16">
        <div className="container px-4">
          <div className="flex flex-col items-center rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 p-8 text-center shadow-lg md:p-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Create Your Next Event?</h2>
            <p className="mt-4 max-w-[600px] text-muted-foreground">
              Contact us today to discuss how we can bring your vision to life and create an unforgettable experience.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
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
        </div>
      </section>
    </div>
  )
}

