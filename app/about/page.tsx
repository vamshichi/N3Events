import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutUs() {
  return (
    <main className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative bg-gray-900 py-28 text-center text-white">
  <div className="container mx-auto px-6 md:px-12 lg:px-20">
    <h1 className="text-5xl font-extrabold sm:text-7xl tracking-tight">
      Who We Are
    </h1>
    <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
      We craft immersive virtual events that engage, connect, and inspire. From corporate 
      conferences to tech showcases, we bring your vision to life with innovation and precision.
    </p>
    <div className="mt-8 flex flex-col sm:flex-row justify-center gap-6">
      <a href="/contact" className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-gray-300 transition-all">
        Contact Us
      </a>
      <a href="/rals" className="border-2 border-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all">
        Explore Our Events
      </a>
    </div>
  </div>
</section>

    {/* About Us Section */}
<section className="py-20 bg-black text-white ">
  <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
    <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">About Us</h2>
    <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
      At <span className="text-white font-semibold">N3</span>, we specialize in crafting immersive and impactful virtual 
      events that connect, engage, and inspire. Whether it's a corporate conference, tech showcase, product launch, or 
      networking session, we bring your vision to life with cutting-edge technology and seamless execution.
    </p>
  </div>

  <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-6 md:px-12">
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
      <h3 className="text-2xl font-bold">Innovative Experiences</h3>
      <p className="mt-2 text-gray-400">
        Our team ensures every event is packed with interactive elements, delivering a seamless and engaging experience 
        that captivates audiences.
      </p>
    </div>

    <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
      <h3 className="text-2xl font-bold">Expert Execution</h3>
      <p className="mt-2 text-gray-400">
        We combine innovation with precision to execute flawless virtual events that maximize audience engagement 
        and connectivity.
      </p>
    </div>

    <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
      <h3 className="text-2xl font-bold">Seamless Technology</h3>
      <p className="mt-2 text-gray-400">
        Using the latest tech, we ensure a smooth and immersive experience, from virtual networking to real-time interaction.
      </p>
    </div>

    <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
      <h3 className="text-2xl font-bold">Customized Solutions</h3>
      <p className="mt-2 text-gray-400">
        Every event is tailored to your specific needs, ensuring a unique experience that aligns with your brand and goals.
      </p>
    </div>

    <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
      <h3 className="text-2xl font-bold">Global Reach</h3>
      <p className="mt-2 text-gray-400">
        We help brands expand their audience globally by hosting impactful virtual events with broad accessibility.
      </p>
    </div>

    <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
      <h3 className="text-2xl font-bold">End-to-End Management</h3>
      <p className="mt-2 text-gray-400">
        From planning to execution, our team handles every aspect of your event, ensuring a stress-free and successful outcome.
      </p>
    </div>
  </div>
</section>

      {/* Mission & Vision Section */}
<section className="py-20 bg-gray-900 text-white">
  <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
    <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Our Mission & Vision</h2>
    <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
      At N3, we are driven by a passion for innovation and excellence in the virtual events space. Our mission and vision 
      define our commitment to transforming digital experiences.
    </p>
  </div>

  <div className="mt-12  grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-6 md:px-12">
    {/* Mission */}
    <div className="p-6 border border-gray-700 rounded-xl bg-gray-800 shadow-lg">
      <h3 className="text-2xl font-bold">Our Mission</h3>
      <p className="mt-3 text-gray-400">
        To revolutionize virtual events by crafting interactive, engaging, and seamless experiences that leave a lasting impact.
      </p>
    </div>

    {/* Vision */}
    <div className="p-6 border border-gray-700 rounded-xl bg-gray-800 shadow-lg">
      <h3 className="text-2xl font-bold">Our Vision</h3>
      <p className="mt-3 text-gray-400">
        To be the world leading provider of virtual events, transforming digital experiences through innovation and 
        cutting-edge technology.
      </p>
    </div>

    {/* Core Values */}
    <div className="p-6 border border-gray-700 rounded-xl bg-gray-800 shadow-lg">
      <h3 className="text-2xl font-bold">Core Values</h3>
      <ul className="mt-3 space-y-2 text-gray-400">
        <li>✔ Innovation & Creativity</li>
        <li>✔ Customer-Centric Approach</li>
        <li>✔ Integrity & Transparency</li>
        <li>✔ Excellence in Execution</li>
        <li>✔ Continuous Improvement</li>
      </ul>
    </div>

    {/* Our Commitment */}
    <div className="p-6 border border-gray-700 rounded-xl bg-gray-800 shadow-lg">
      <h3 className="text-2xl font-bold">Our Commitment</h3>
      <p className="mt-3 text-gray-400">
        We are dedicated to delivering high-quality, immersive virtual events that push the boundaries of engagement 
        and connectivity.
      </p>
    </div>

    {/* Sustainability & Responsibility */}
    <div className="p-6 border border-gray-700 rounded-xl bg-gray-800 shadow-lg">
      <h3 className="text-2xl font-bold">Sustainability & Responsibility</h3>
      <p className="mt-3 text-gray-400">
        We believe in sustainable event solutions that reduce carbon footprints while maximizing digital impact.
      </p>
    </div>

    {/* Future Goals */}
    <div className="p-6 border border-gray-700 rounded-xl bg-gray-800 shadow-lg">
      <h3 className="text-2xl font-bold">Future Goals</h3>
      <p className="mt-3 text-gray-400">
        Our goal is to integrate AI, AR/VR, and automation into virtual events, setting new standards for engagement and 
        audience experience.
      </p>
    </div>
  </div>
</section>


      {/* Ready to Work With Us */}
      <section className="py-16 bg-black text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-bold sm:text-5xl">Ready to Work With Us?</h2>
          <p className="mt-4 text-gray-400">
            Let's create an unforgettable event together. Contact us to discuss your vision and how we can bring it to life.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row justify-center">
            <Link href="/contact" className="bg-white text-black px-6 py-3 rounded-lg font-semibold flex items-center gap-2">
              Contact Us <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/rals" className="border border-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2">
              Explore Our Events <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
