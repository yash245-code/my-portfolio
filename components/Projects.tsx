import RevealWrapper from "./RevealWrapper";

const projects = [
  {
    title: "Mint-Calculator",
    description:
      "A simple modern clean web calculator very basic of the bunch.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/yash245-code/Calculator",
    live: "https://yash245-code.github.io/Calculator/",
  },
  {
    title: "Tic-Tac-Toe Game",
    description:
      "A simple and fun implementation of the classic Tic-Tac-Toe game.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/yash245-code/Tic-Tac-Toe",
    live: "https://yash245-code.github.io/TIC-TAC-TOE/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-border">
      <RevealWrapper className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p className="font-mono text-gray-text text-sm mb-4">// PROJECTS</p>
          <h2 className="text-4xl font-bold tracking-tight text-foreground">
            Selected Work
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-surface border border-border p-10 flex flex-col hover:border-accent hover:bg-[#141414] transition-all duration-300 group"
            >
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-[#1A1A1A] border border-border text-foreground font-mono text-xs group-hover:border-accent transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {project.title}
              </h3>
              
              <p className="text-gray-text flex-grow mb-10">
                {project.description}
              </p>
              
              <div className="flex gap-6 mt-auto">
                <a
                  href={project.github}
                  className="text-gray-text hover:text-accent flex items-center gap-2 transition-colors font-mono text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Code
                </a>
                <a
                  href={project.live}
                  className="text-gray-text hover:text-accent flex items-center gap-2 transition-colors font-mono text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </RevealWrapper>
    </section>
  );
}
