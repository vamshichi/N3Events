"use client";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhyParticipate = () => {
  const points = [
    "Experience real-world applications of robotics & automation—live simulations in action",
    "No travel required—join from anywhere",
    "Zero logistics costs—maximize convenience and accessibility",
    "Stay ahead of the competition—gain insights into the latest industry trends",
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 text-white text-center">
      <motion.h2
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Why Participate?
      </motion.h2>

      <div className="max-w-3xl mx-auto space-y-6">
        {points.map((point, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-4 bg-white/10 p-4 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <CheckCircle className="text-white" size={32} />
            <p className="text-lg font-medium text-left">{point}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyParticipate;
