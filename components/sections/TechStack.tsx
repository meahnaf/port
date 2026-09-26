"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Container from "../ui/Container";

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const techCategories = [
    {
      category: "AI/ML",
      technologies: [
        { name: "Python", icon: "🐍" },
        { name: "TensorFlow", icon: "🧠" },
        { name: "PyTorch", icon: "🔥" },
        { name: "LangChain", icon: "🔗" },
        { name: "OpenAI", icon: "🤖" },
      ],
    },
    {
      category: "Backend",
      technologies: [
        { name: "FastAPI", icon: "⚡" },
        { name: "NestJS", icon: "🪺" },
        { name: "Node.js", icon: "💚" },
        { name: "Express", icon: "🚂" },
      ],
    },
    {
      category: "Cloud",
      technologies: [
        { name: "Azure", icon: "☁️" },
        { name: "Docker", icon: "🐳" },
        { name: "Azure AI", icon: "🧩" },
        { name: "Azure Functions", icon: "⚙️" },
      ],
    },
    {
      category: "Databases",
      technologies: [
        { name: "PostgreSQL", icon: "🐘" },
        { name: "MongoDB", icon: "🍃" },
        { name: "Redis", icon: "🔴" },
        { name: "Vector DB", icon: "🔢" },
      ],
    },
    {
      category: "Frontend",
      technologies: [
        { name: "React", icon: "⚛️" },
        { name: "Next.js", icon: "▲" },
        { name: "TypeScript", icon: "📘" },
        { name: "Tailwind", icon: "🎨" },
      ],
    },
  ];

  return (
    <section id="tech-stack" ref={ref} className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,194,255,0.05),transparent_50%)]" />
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Technology <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-lg text-text-gray max-w-2xl mx-auto">
            Leveraging cutting-edge technologies to build intelligent systems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.1 + 0.3, duration: 0.6 }}
              className="glass rounded-2xl p-6 hover:bg-white/5 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-primary-blue mb-6">
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      delay: categoryIndex * 0.1 + techIndex * 0.05 + 0.5,
                      duration: 0.4,
                    }}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-all duration-300 group cursor-pointer"
                  >
                    <span className="text-2xl group-hover:scale-110 transition-transform">
                      {tech.icon}
                    </span>
                    <span className="text-text-gray group-hover:text-white transition-colors">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
