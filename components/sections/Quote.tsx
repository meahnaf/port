"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Container from "../ui/Container";

export default function Quote() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary-blue/10 via-primary-purple/10 to-primary-blue/10"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundSize: "200% 100%",
          }}
        />
      </div>
      <Container>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
          className="text-center relative z-10"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mx-auto">
            <span className="gradient-text text-shadow-glow">
              &ldquo;Building AI systems that are scalable, intelligent, and production-ready.&rdquo;
            </span>
          </h2>
        </motion.div>
      </Container>
    </section>
  );
}
