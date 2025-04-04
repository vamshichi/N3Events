"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function RegisterForm() {
  const [isRegistered, setIsRegistered] = useState(false);
  
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsRegistered(true);
  };

  return (
    <section id="register" className="py-20 bg-gradient-to-b from-[#2a4365] to-[#2b6cb0] flex flex-col justify-center items-center">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col items-center text-center"
        >
          <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">Register Now</h2>
          <div className="mt-4 h-1 w-20 rounded bg-gradient-to-r from-[#ff6200] to-[#ff8c00]"></div>
          <p className="mt-6 max-w-[800px] text-lg text-[#e2e8f0]">
            Secure your spot for this groundbreaking event
          </p>
        </motion.div>

        <div className="mx-auto max-w-3xl">
          <Card className="overflow-hidden border-[#ff6200]/20 bg-white/10 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
            <CardContent className="p-8">
              <AnimatePresence mode="wait">
                {isRegistered ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center text-center"
                  >
                    <CheckCircle2 className="h-16 w-16 text-[#ff6200] mb-4" />
                    <h3 className="text-2xl font-bold text-white">Registration Successful!</h3>
                    <p className="mt-4 text-[#e2e8f0]">
                      Thank you for registering. A confirmation email has been sent to you.
                    </p>
                    <Button className="mt-6 bg-[#ff6200] text-white" onClick={() => setIsRegistered(false)}>
                      Register Another Attendee
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form initial={{ opacity: 0 }} animate={{ opacity: 1 }} onSubmit={handleRegister} className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="first-name" className="text-white">First Name</Label>
                        <Input id="first-name" placeholder="Enter first name" required className="bg-white/10 text-white" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name" className="text-white">Last Name</Label>
                        <Input id="last-name" placeholder="Enter last name" required className="bg-white/10 text-white" />
                      </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-white">Company/Organization</Label>
                        <Input id="company" placeholder="Enter company name" className="bg-white/10 text-white" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="job-title" className="text-white">Job Title</Label>
                        <Input id="job-title" placeholder="Enter job title" className="bg-white/10 text-white" />
                      </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2 ">
                        <Label htmlFor="country-code" className="text-white">Country Code</Label>
                        <Input id="country-code" placeholder="+1" required className="max-w-[100px] border-[#ff6200]/30 bg-white/10 text-white" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-white">Contact Number</Label>
                        <Input id="phone" type="tel" placeholder="Enter your contact number" required className="border-[#ff6200]/30 bg-white/10 text-white" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">Email Address</Label>
                      <Input id="email" type="email" placeholder="Enter email address" required className="bg-white/10 text-white" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-white">Message</Label>
                      <Textarea id="message" placeholder="Any specific questions?" className="bg-white/10 text-white" />
                    </div>

                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="terms" required className="text-[#ff6200]" />
                      <label htmlFor="terms" className="text-sm text-[#e2e8f0]">
                        I agree to the <Link href="#" className="text-[#ff6200] underline">terms and conditions</Link>
                      </label>
                    </div>

                    <Button type="submit" className="w-full bg-[#ff6200] text-white">
                      Complete Registration
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
