import RevealWrapper from "./RevealWrapper";

const certifications = [
  {
    issuer: "Hacker Rank",
    title: "Problem Solving (Basic) Certificate",
    date: "Issued: May 2025",
    description:
      "Demonstrates proficiency in fundamental problem-solving techniques and algorithms.",
    link: "https://www.hackerrank.com/certificates/1c94288b72b8",
  },
  {
    issuer: "Hacker Rank",
    title: "C# (Basic) Certificate",
    date: "Issued: Mar 2025",
    description:
      "Validates expertise in C# programming fundamentals.",
    link: "https://www.hackerrank.com/certificates/bb740bc2caa5",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 border-t border-border">
      <RevealWrapper className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p className="font-mono text-gray-text text-sm mb-4">// CERTIFICATIONS</p>
          <h2 className="text-4xl font-bold tracking-tight text-foreground">
            Credentials
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="bg-surface border border-border p-10 flex flex-col hover:border-accent hover:bg-[#141414] transition-all duration-300 group"
            >
              <p className="font-mono text-sm text-accent mb-4">
                {cert.issuer}
              </p>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {cert.title}
              </h3>
              
              <p className="text-gray-text mb-6 text-sm">
                {cert.date}
              </p>
              
              <p className="text-gray-text flex-grow mb-10">
                {cert.description}
              </p>
              
              <div className="mt-auto">
                <a
                  href={cert.link}
                  className="text-gray-text hover:text-accent flex items-center gap-2 transition-colors font-mono text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </RevealWrapper>
    </section>
  );
}
