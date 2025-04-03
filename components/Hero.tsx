'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import TypewriterEffect from '@/components/typewriter-effect';
import CountdownTimer from '@/components/countdown-timer';
import { Button } from '@/components/ui/button';



const HeroSection = () => {
  const heroRef = useRef(null);
  const eventDate = new Date(2025, 8, 24, 9, 0, 0)
  return (
    <section ref={heroRef} className="relative min-h-screen overflow-hidden bg-[#0c1445] text-white">
      <motion.div
        className="container relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-16 text-center"
      >
        {/* Season Tag */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute top-10 right-10 inline-flex items-center rounded-full border-2 border-[#ff6200]/50 bg-[#ff6200]/20 px-4 py-2 text-lg"
        >
          <span className="font-extrabold text-[#ff6200] drop-shadow-[0_0_8px_rgba(255,98,0,0.8)]">SEASON 1</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <TypewriterEffect text="Robotics and Automation" />
          <br />
          <span className="bg-gradient-to-r from-[#ff6200] to-[#ff8c00] bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(255,98,0,0.5)]">
            <TypewriterEffect text="Live Simulation" delay={1.5} />
          </span>
        </motion.h1>

        {/* Event Date */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="py-5 text-xl font-bold text-[#e2e8f0]"
        >
          24-25 September 2025
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 max-w-[800px] text-lg text-[#e2e8f0] md:text-xl"
        >
          Join us for an exciting and innovative virtual event focused on the future of Robotics and Automation in the
          manufacturing industry. Experience live simulations and engage with industry experts.
        </motion.p>

        {/* Register Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 flex flex-col gap-4 sm:flex-row"
        >
          <Button
            size="lg"
            className="bg-[#ff6200] text-white hover:bg-[#ff6200]/90 shadow-[0_0_30px_#ff6200]"
            onClick={() => {
              document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Register Now <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12"
        >
          <CountdownTimer targetDate={eventDate} />
        </motion.div>
      </motion.div>

      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c1445] via-[#0c1445]/70 to-transparent"></div>

        {/* Glowing Orbs */}
        <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-[#ff6200]/10 blur-3xl"></div>
        <div className="absolute right-1/4 top-2/3 h-96 w-96 rounded-full bg-[#ff8c00]/10 blur-3xl"></div>
      </div>
    </section>
  );
};

export default HeroSection;
