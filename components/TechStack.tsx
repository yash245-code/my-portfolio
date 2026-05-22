import RevealWrapper from "./RevealWrapper";

const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Python", "REST APIs", "GraphQL"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    category: "DevOps",
    items: ["Docker", "GitHub Actions", "Vercel", "AWS"],
  },
];

export default function TechStack() {
  return (
    <section id="skills" className="py-24 border-t border-border">
      <RevealWrapper className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p className="font-mono text-gray-text text-sm mb-4">// SKILLS</p>
          <h2 className="text-4xl font-bold tracking-tight text-foreground">
            Tech Stack
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category}>
              <h3 className="text-lg text-gray-text font-medium mb-6">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-surface border border-border text-foreground font-mono text-sm hover:border-accent transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </RevealWrapper>
    </section>
  );
}
