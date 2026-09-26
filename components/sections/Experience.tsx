"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Container from "../ui/Container";
import Card from "../ui/Card";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      role: "SDE Intern",
      company: "Nexzap",
      period: "2024 - Present",
      description: "Developed ML-powered cloud solutions using Azure, LangChain, and RAG pipelines with Azure Data Lake (ADLS) for scalable retrieval and indexing. Optimized semantic search and file pipelines, improving performance and latency by ~40%. Built frontend features and enhanced backend APIs, deploying services via Docker for scalable environments.",
    },
    {
      role: "AI / Software Engineer Intern",
      company: "Wavity",
      period: "2024",
      description: "Contributed to improving chatbot UI flows and response handling in an enterprise conversational AI platform using Angular. Investigated knowledge-base retrieval issues and supported backend improvements for better content accessibility. Assisted in designing analytics APIs to track user sessions and messaging activity. Worked on semantic retrieval enhancements using Azure Data Lake to improve AI response relevance.",
    },
  ];

  return (
    <section id="experience" ref={ref} className="py-32 relative">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional Experience</h2>
          <p className="text-lg text-text-gray max-w-3xl">
            Building AI-powered systems and scalable backend solutions across enterprise platforms and cloud environments.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-blue via-primary-purple to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className={`relative ${
                  index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
                }`}
              >
                <div className="absolute left-0 md:left-1/2 top-8 w-4 h-4 -ml-2 rounded-full bg-primary-blue shadow-[0_0_20px_rgba(0,194,255,0.6)]" />
                
                <Card gradient className="hover:scale-[1.02] transition-all duration-300">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-3 text-text-gray">
                        <span className="font-semibold text-primary-blue">
                          {exp.company}
                        </span>
                        <span>•</span>
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <p className="text-text-gray leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
