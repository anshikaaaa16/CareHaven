"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  Brain,
  Shield,
  Fingerprint,
  Activity,
  Bot,
  LineChart,
  Wifi,
  Heart,
  BookText,
  Users,
  MessageSquareLock,
} from "lucide-react";

const features = [
  {
    icon: <Bot className="w-10 h-10 text-primary" />,
    title: "AI-Powered Therapy",
    description:
      "24/7 access to empathetic AI agents trained in various therapeutic approaches, providing personalized mental health support.",
  },
  {
    icon: <Users className="w-10 h-10 text-primary" />,
    title: "Free Therapy Sessions",
    description:
      "No cost, no barriers. Access professional-grade therapy sessions without the financial burden.",
  },

  {
    icon: <MessageSquareLock className="w-10 h-10 text-primary" />,
    title: "Private AI Chat",
    description:
      "Enjoy confidential, encrypted conversations with AI assistants trained to respect and protect your privacy.",
  },
  {
    icon: <Brain className="w-10 h-10 text-primary" />,
    title: "Smart Analysis",
    description:
      "Advanced NLP and emotion detection helps understand your mental state and provide appropriate interventions.",
  },
  
  {
    icon: <BookText className="w-10 h-10 text-primary" />,
    title: "Guided Journaling",
    description:
      "Reflect and grow with AI-assisted journaling prompts designed to support emotional processing and self-discovery.",
  },

  {
    icon: <LineChart className="w-10 h-10 text-primary" />,
    title: "Progress Tracking",
    description:
      "Detailed analytics and insights about your mental health journey, with blockchain-verified session records.",
  },
  {
    icon: <Fingerprint className="w-10 h-10 text-primary" />,
    title: "Privacy First",
    description:
      "End-to-end encryption and zero-knowledge proofs ensure your data remains completely confidential.",
  },
 
];

export default function FeaturesPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
          Platform Features
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover how CareHaven combines AI-powered mental health support with
          cutting-edge privacy, guided journaling, and free therapy sessions for all.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300 bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-center mt-16"
      >
        <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
        <p className="text-muted-foreground mb-8">
          Join thousands of users benefiting from free, private, and AI-powered mental health support.
        </p>
        <a
          href="/dashboard"
          className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Start Your Journey
          <Heart className="ml-2 w-5 h-5" />
        </a>
      </motion.div>
    </div>
  );
}
