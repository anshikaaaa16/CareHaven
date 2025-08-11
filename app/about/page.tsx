"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Heart, Target, Sparkles } from "lucide-react";

const missions = [
  {
    icon: <Heart className="w-8 h-8 text-primary" />,
    title: "Our Mission",
    description:
      "At CareHaven, our mission is to make compassionate mental health care universally accessible. We aim to blend technology with empathy, ensuring everyone feels heard, supported, and valued.",
  },
  {
    icon: <Target className="w-8 h-8 text-primary" />,
    title: "Our Vision",
    description:
      "We envision a world where mental wellness is prioritized like physical health. CareHaven strives to become a safe digital sanctuary where AI and licensed therapists work together to deliver healing at scale.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-primary" />,
    title: "Our Core Values",
    description:
      "Empathy, Safety, Inclusivity, and Innovation guide every step of our journey. We believe in providing judgment-free support that adapts to every individual’s unique mental health needs.",
  },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-20"
      >
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
          About CareHaven
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          CareHaven is redefining digital mental health. By uniting ethical AI, compassionate human support, and secure data practices, we're building a new standard for accessible mental wellness.
        </p>
      </motion.div>

      {/* Mission Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {missions.map((mission, index) => (
          <motion.div
            key={mission.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6 text-center h-full bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="mb-4 flex justify-center">{mission.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{mission.title}</h3>
              <p className="text-muted-foreground">{mission.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
