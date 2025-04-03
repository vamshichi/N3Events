import Link from "next/link";
import { ArrowRight } from "lucide-react";
import RegisterForm from "@/components/contact/form";

export default function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-950 py-32 text-center text-white">
  <div className="container mx-auto px-6 max-w-4xl">
    <h1 className="text-6xl sm:text-7xl font-extrabold leading-tight">
      Get in Touch
    </h1>
    <p className="mt-6 text-xl sm:text-2xl text-gray-400">
      Let's create something extraordinary together. Reach out to us today.
    </p>
  </div>
</section>


      {/* Contact Form */}
     <RegisterForm />

      {/* Contact Info */}
      <section className="py-16 bg-gray-900 text-white flex justify-center">
  <div className="p-8 border border-gray-700 rounded-lg text-center max-w-md">
    <h3 className="text-3xl font-bold">Email</h3>
    <p className="mt-2 text-lg text-gray-400">info@n3events.com</p>
  </div>
</section>


      {/* CTA Section */}
      <section className="bg-gray-800 py-16 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white">Ready to Create Your Next Event?</h2>
          <p className="mt-4 text-gray-400">
            Contact us today to discuss how we can bring your vision to life and create an unforgettable experience.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            {/* <Link href="/contact" className="px-6 py-3 bg-primary text-white font-bold rounded-lg shadow-lg hover:bg-primary-dark transition">
              Contact Us <ArrowRight className="inline-block ml-2 h-5 w-5" />
            </Link> */}
            <Link href="/rals" className="px-6 py-3 border border-primary text-white font-bold rounded-lg shadow-lg hover:bg-primary hover:text-white transition">
              Explore Our Events <ArrowRight className="inline-block ml-2 h-5 w-5" />
            </Link>
            {/* <Link href="/robotics" className="px-6 py-3 border border-primary text-primary font-bold rounded-lg shadow-lg hover:bg-primary hover:text-white transition">
              Robotics Event <ArrowRight className="inline-block ml-2 h-5 w-5" />
            </Link> */}
          </div>
        </div>
      </section>
    </div>
  );
}
