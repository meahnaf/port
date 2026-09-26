"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, Cpu, Database, Zap, Network } from "lucide-react";
import { useEffect, useState } from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });
      mouseX.set(clientX);
      mouseY.set(clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const parallaxX = useTransform(mouseX, [0, typeof window !== 'undefined' ? window.innerWidth : 1920], [-20, 20]);
  const parallaxY = useTransform(mouseY, [0, typeof window !== 'undefined' ? window.innerHeight : 1080], [-20, 20]);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Atmospheric Background Layers */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div
          style={{ x: parallaxX, y: parallaxY }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-blue/20 rounded-full blur-[120px]"
        />
        <motion.div
          style={{ x: useTransform(parallaxX, (x) => -x), y: useTransform(parallaxY, (y) => -y) }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary-purple/20 rounded-full blur-[120px]"
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(0, 194, 255, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0, 194, 255, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Neural Network Visualization */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary-blue/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <Container className="relative z-10 h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left: Content */}
          <div className="space-y-8">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass border border-primary-blue/30 shadow-lg shadow-primary-blue/10"
            >
              <div className="w-2 h-2 rounded-full bg-primary-blue animate-pulse shadow-lg shadow-primary-blue/50" />
              <span className="text-xs font-semibold text-white uppercase tracking-wider">
                Ahnaf Ali • AI Backend Engineer
              </span>
            </motion.div>

            {/* Main Heading - Asymmetric */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-2"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                <span className="block">Building</span>
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
                  Production-Grade
                </span>
                <span className="block">AI Systems</span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-text-gray max-w-xl leading-relaxed"
            >
              AI Backend Engineer building scalable RAG pipelines, FastAPI services, intelligent automation systems, and enterprise AI infrastructure using Azure, LangChain, and OpenAI.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button
                size="lg"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary-blue text-white hover:bg-primary-blue/90 font-medium group"
              >
                Explore Projects
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="secondary"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="font-medium"
              >
                Get in Touch
              </Button>
            </motion.div>
          </div>

          {/* Right: Floating UI Panels */}
          <div className="relative hidden lg:block h-[600px]">
            {/* RAG Pipeline Card - Top */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ x: useTransform(parallaxX, (x) => x * 0.08), y: useTransform(parallaxY, (y) => y * 0.08) }}
              className="absolute top-0 right-20 glass rounded-xl p-4 border border-white/10 w-56 shadow-xl shadow-cyan-500/5"
            >
              <div className="flex items-center gap-2 mb-3">
                <Database className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-bold">RAG Pipeline</span>
              </div>
              <div className="text-sm font-semibold mb-2 text-cyan-400">Hybrid Search + Reranking</div>
              <div className="space-y-1.5">
                {['Query Embedding', 'Vector Search', 'Reranking'].map((step, i) => (
                  <motion.div
                    key={step}
                    className="flex items-center gap-2 text-xs"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.15 }}
                  >
                    <div className="w-1 h-1 rounded-full bg-cyan-400" />
                    <span className="text-text-gray">{step}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* AI Workflows Card - Left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              style={{ x: useTransform(parallaxX, (x) => x * 0.06), y: useTransform(parallaxY, (y) => y * 0.06) }}
              className="absolute top-1/2 left-0 -translate-y-1/2 glass rounded-xl p-4 border border-white/10 w-48 shadow-xl shadow-purple-500/5"
            >
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-4 h-4 text-purple-400" />
                <span className="text-xs font-bold">AI Workflows</span>
              </div>
              <div className="space-y-2">
                {[
                  { name: 'Semantic Search', color: 'bg-purple-500' },
                  { name: 'Document Intelligence', color: 'bg-blue-500' },
                  { name: 'LLM Automation', color: 'bg-cyan-500' }
                ].map((workflow, i) => (
                  <motion.div
                    key={workflow.name}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 + i * 0.1 }}
                  >
                    <div className={`w-1.5 h-1.5 rounded-full ${workflow.color}`} />
                    <span className="text-xs text-text-gray">{workflow.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tech Stack Card - Bottom Right */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              style={{ x: useTransform(parallaxX, (x) => x * 0.04), y: useTransform(parallaxY, (y) => y * 0.04) }}
              className="absolute bottom-0 right-0 glass rounded-xl p-4 border border-white/10 w-60 shadow-xl shadow-blue-500/5"
            >
              <div className="flex items-center gap-2 mb-3">
                <Network className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-bold">Tech Stack</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['FastAPI', 'Azure', 'OpenAI', 'Docker', 'PostgreSQL', 'RAG', 'LangChain', 'Neo4j'].map((tech, i) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + i * 0.08 }}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 194, 255, 0.1)' }}
                    className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-text-gray hover:text-primary-blue hover:border-primary-blue/30 transition-all cursor-default"
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-text-gray uppercase tracking-wider">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-primary-blue rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
