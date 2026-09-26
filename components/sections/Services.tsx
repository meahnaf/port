"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Cpu, Database, Cloud, Zap } from "lucide-react";
import Container from "../ui/Container";
import Card from "../ui/Card";

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Brain,
      title: "AI Application Development",
      description: "Building production-ready AI applications with LLMs, RAG systems, and intelligent agents.",
    },
    {
      icon: Cpu,
      title: "RAG Pipeline Engineering",
      description: "Designing and implementing advanced retrieval-augmented generation systems for enterprise.",
    },
    {
      icon: Database,
      title: "Backend API Development",
      description: "Creating scalable FastAPI and NestJS backends with intelligent data processing.",
    },
    {
      icon: Cloud,
      title: "Enterprise AI Integration",
      description: "Integrating Azure AI services and OpenAI into production environments.",
    },
    {
      icon: Zap,
      title: "AI Automation Systems",
      description: "Developing intelligent automation workflows and AI-powered business solutions.",
    },
  ];

  return (
    <section className="py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(123,46,255,0.05),transparent_50%)]" />
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            What I <span className="gradient-text">Build</span>
          </h2>
          <p className="text-lg text-text-gray max-w-2xl mx-auto">
            Specialized in AI engineering and intelligent backend systems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
              >
                <Card
                  gradient
                  className="h-full hover:scale-[1.02] transition-all duration-300 group"
                >
                  <div className="flex flex-col items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-primary-blue/20 to-primary-purple/20 group-hover:from-primary-blue/30 group-hover:to-primary-purple/30 transition-all duration-300">
                      <Icon className="w-8 h-8 text-primary-blue" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-blue transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-text-gray leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
