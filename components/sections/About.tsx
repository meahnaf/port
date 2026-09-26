"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Container from "../ui/Container";
import Card from "../ui/Card";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const expertise = [
    {
      title: "LLM & RAG Systems",
      description: "Designing Retrieval-Augmented Generation (RAG) pipelines with hybrid search, reranking, vector databases, semantic retrieval, and LLM orchestration for enterprise AI applications."
    },
    {
      title: "Backend Engineering",
      description: "Building scalable backend services and production-ready APIs using FastAPI, Node.js, PostgreSQL, Redis, Docker, and cloud-native architectures."
    },
    {
      title: "AI/ML Development",
      description: "Developing intelligent AI workflows powered by LLMs, embeddings, semantic search, NLP pipelines, and automation systems using OpenAI, LangChain, and modern AI frameworks."
    },
    {
      title: "Cloud & DevOps",
      description: "Deploying scalable AI infrastructure with Azure cloud services, Docker containerization, CI/CD pipelines, monitoring systems, and production deployment workflows."
    },
  ];

  return (
    <section id="about" ref={ref} className="py-32 relative">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-text-gray leading-relaxed max-w-4xl">
            AI Backend Engineer focused on building scalable GenAI systems, RAG pipelines, semantic search platforms, and intelligent backend infrastructure using FastAPI, Azure, LangChain, and OpenAI.
          </p>
          <p className="text-lg text-text-gray leading-relaxed max-w-4xl mt-4">
            I specialize in architecting production-grade AI applications that combine LLM reasoning, retrieval systems, and modern backend engineering to create reliable and scalable intelligent solutions. Passionate about enterprise AI, automation workflows, and designing systems that bridge AI capabilities with real-world applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertise.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
            >
              <Card className="h-full hover:bg-white/5 transition-all duration-300">
                <h4 className="text-lg font-bold mb-3">{item.title}</h4>
                <p className="text-sm text-text-gray leading-relaxed">
                  {item.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
