import React from "react";

interface Service {
  title: string;
  description: string;
  icon: string;
}

const services: Service[] = [
  {
    title: "Corporate Events",
    description: "Professional conferences, seminars, and team-building activities designed to meet your business objectives.",
    icon: "🏢",
  },
  {
    title: "Tech Showcases",
    description: "Innovative exhibitions and demonstrations highlighting the latest advancements in technology.",
    icon: "💻",
  },
  {
    title: "Virtual Events",
    description: "Engaging online experiences with interactive elements and seamless participant engagement.",
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
];

export default function ServicesSection() {
  return (
    <section className="bg-black text-white w-full flex min-h-screen flex-col justify-center items-center">
      <div className="container px-6">
        {/* Title */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Our Services
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-gray-400">
            We offer comprehensive event planning and management services tailored to your needs.
          </p>
        </div>

        {/* Service Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-gray-800 bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="mb-4 text-4xl">{service.icon}</div>
              <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
