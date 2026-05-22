"use client";

import { useState } from "react";
import RevealWrapper from "./RevealWrapper";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "rawaty6396@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-32 border-t border-border">
      <RevealWrapper className="max-w-4xl mx-auto px-6 text-center">
        <p className="font-mono text-gray-text text-sm mb-6">// CONTACT</p>
        
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
          Let's work together.
        </h2>
        
        <p className="text-xl text-gray-text mb-12 max-w-2xl mx-auto">
          I'm currently available for freelance projects and part-time positions.
        </p>
        
        <div className="flex justify-center items-center gap-8 mb-16">
          <a
            href="https://github.com/yash245-code"
            className="text-gray-text hover:text-accent transition-colors"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/yash-rawat-6496639611y/"
            className="text-gray-text hover:text-accent transition-colors"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a
            href={`mailto:${email}`}
            className="text-gray-text hover:text-accent transition-colors"
            aria-label="Email"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
        
        <div className="relative inline-block">
          <button
            onClick={handleCopy}
            className="font-mono text-xl text-foreground hover:text-accent transition-colors px-4 py-2"
          >
            {email}
          </button>
          {copied && (
            <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-surface border border-border px-3 py-1 text-sm text-accent rounded shadow-lg transition-opacity">
              Copied!
            </span>
          )}
        </div>
      </RevealWrapper>
    </section>
  );
}
