"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Container from "../ui/Container";

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/ahnafali", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/mohammad-ahnaf-ali", label: "LinkedIn" },
    { icon: Mail, href: "mailto:ahnafali1345@gmail.com", label: "Email" },
  ];

  return (
    <footer className="py-12 border-t border-white/5">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold gradient-text">Mohammad Ahnaf Ali</h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex gap-6"
          >
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-gray hover:text-primary-blue transition-colors duration-300"
                  whileHover={{ y: -3 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  aria-label={link.label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-text-gray text-sm"
          >
            © {new Date().getFullYear()} Mohammad Ahnaf Ali. All rights reserved.
          </motion.div>
        </div>
      </Container>
    </footer>
  );
}
