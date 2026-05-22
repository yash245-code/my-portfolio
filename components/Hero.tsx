"use client";

import { useState, useEffect } from "react";
import RevealWrapper from "./RevealWrapper";

const phrases = [
  "I build fast web apps.",
  "I architect scalable APIs.",
  "I ship clean code.",
];

export default function Hero() {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setText(phrases[0]);
      return;
    }

    const currentPhrase = phrases[phraseIndex];
    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && text === currentPhrase) {
      typeSpeed = 2000; // Pause at the end
      setTimeout(() => setIsDeleting(true), typeSpeed);
      return;
    }

    if (isDeleting && text === "") {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
      typeSpeed = 500; // Pause before typing next
      return;
    }

    const timeout = setTimeout(() => {
      setText(
        currentPhrase.substring(0, text.length + (isDeleting ? -1 : 1))
      );
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const elem = document.getElementById(id);
    if (elem) {
      window.scrollTo({
        top: elem.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="min-h-screen flex items-center pt-16">
      <RevealWrapper className="max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col items-start max-w-3xl">
          <p className="text-accent font-mono text-sm tracking-tight mb-4">
            Full-Stack Developer
          </p>
          <h1 className="text-6xl md:text-[80px] leading-none font-bold tracking-tighter text-foreground mb-6">
            Yash Rawat
          </h1>
          <div className="text-2xl md:text-3xl text-gray-text font-medium mb-6 h-10 flex items-center">
            <span>{text}</span>
            <span className="inline-block w-[1ch] bg-accent ml-[2px] animate-pulse h-[1em] text-transparent relative top-[2px]">
              ▌
            </span>
          </div>
          <p className="text-lg text-gray-text mb-10 max-w-xl">
            Based in India. Available for freelance & part-time roles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, "projects")}
              className="px-8 py-3 bg-accent text-background font-medium hover:bg-[#baff5c] transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className="px-8 py-3 border border-border text-foreground hover:border-accent hover:bg-surface transition-all"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </RevealWrapper>
    </section>
  );
}
