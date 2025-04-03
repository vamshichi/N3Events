"use client";

import Link from "next/link";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#1a365d] py-12">
      <div className="container px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Robotics Event</h3>
            <p className="text-[#e2e8f0]">
              Join us for an exciting and innovative virtual event focused on the future of Robotics and Automation.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Quick Links</h3>
            <ul className="space-y-2 text-[#e2e8f0]">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/rals" className="hover:text-white transition-colors">
                  Event
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Register
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Contact</h3>
            <div className="flex items-center space-x-2 text-[#e2e8f0]">
              <Mail className="h-5 w-5 text-blue-600" />
              <span>info@roboticsevent.com</span>
            </div>
            <div className="mt-4">
              <h3 className="mb-2 text-lg font-bold text-white">Follow Us</h3>
              <Link href="https://www.linkedin.com/events/roboticsandautomationlivedemo7313107067664277504/" className="text-[#e2e8f0] hover:text-white transition-colors inline-flex">
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
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-8 text-center text-sm text-[#e2e8f0]">
          <p>© {new Date().getFullYear()} Robotics and Automation Event. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
