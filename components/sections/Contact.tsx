"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import Container from "../ui/Container";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "ahnafali1345@gmail.com",
      href: "mailto:ahnafali1345@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "https://linkedin.com/in/mohammad-ahnaf-ali",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View my repositories",
      href: "https://github.com/ahnafali",
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-32 relative">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let&apos;s Create Something Amazing.
          </h2>
          <p className="text-lg text-text-gray mb-12 leading-relaxed">
            Open to AI Engineer, GenAI, and Backend AI opportunities. Let&apos;s discuss how we can build intelligent systems together.
          </p>

          <div className="space-y-4">
            {contacts.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                  className="flex items-center justify-center gap-4 p-4 glass rounded-lg hover:bg-white/5 transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5 text-primary-blue" />
                  <div className="text-left">
                    <div className="text-sm text-text-gray">{contact.label}</div>
                    <div className="text-white group-hover:text-primary-blue transition-colors">
                      {contact.value}
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
