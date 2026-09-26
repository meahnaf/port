"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import Container from "../ui/Container";
import Card from "../ui/Card";
import Button from "../ui/Button";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "LUCAS – AI Copilot for Azure",
      category: "RAG System • LLM Application",
      description: "Built a RAG-based AI copilot integrating LLMs with Azure Data Lake for context-aware retrieval. Developed FastAPI services using OpenAI and Cohere embeddings for semantic search pipelines with PostgreSQL and Neo4j graph storage.",
      tags: ["RAG", "FastAPI", "Azure", "LangChain", "PostgreSQL", "Neo4j"],
      link: "#",
    },
    {
      title: "MindHaven – Mental Health Classifier",
      category: "NLP • Machine Learning",
      description: "Developed a BERT-based NLP classifier to detect early signs of mental health issues from text data. Deployed with Streamlit for real-time predictions, achieving 85%+ precision for early mental health risk identification.",
      tags: ["BERT", "NLP", "Streamlit", "TensorFlow", "Classification"],
      link: "#",
    },
    {
      title: "MyEvacuate – Disaster Evacuation App",
      category: "Full-Stack • Emergency Response",
      description: "Developed a cross-platform emergency evacuation app (Flutter + FastAPI) featuring real-time GPS tracking and safe-zone navigation. Integrated Google Maps API, Firebase Notifications, and SMS alerts with secure PostgreSQL backend.",
      tags: ["Flutter", "FastAPI", "PostgreSQL", "Firebase", "Google Maps"],
      link: "#",
    },
    {
      title: "Semantic Search Pipeline",
      category: "AI/ML • Backend Optimization",
      description: "Optimized semantic search and file pipelines using Azure Data Lake (ADLS), improving performance and latency by ~40%. Built ML-powered cloud solutions with LangChain and RAG pipelines for scalable retrieval and indexing.",
      tags: ["Azure", "LangChain", "Semantic Search", "Vector DB", "Optimization"],
      link: "#",
    },
  ];

  const filteredProjects = projects;

  return (
    <section id="projects" ref={ref} className="py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(123,46,255,0.05),transparent_50%)]" />
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-text-gray max-w-3xl">
            A selection of my recent work, featuring LLM applications, RAG systems, NLP models, and scalable backend solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="h-full hover:bg-white/5 transition-all duration-300 cursor-pointer group">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary-blue transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-text-gray">{project.category}</p>
                    </div>
                    
                    <p className="text-text-gray leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs rounded-full glass border border-white/10 text-text-gray"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
