import RevealWrapper from "./RevealWrapper";

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-border">
      <RevealWrapper className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p className="font-mono text-gray-text text-sm mb-4">// ABOUT</p>
          <h2 className="text-4xl font-bold tracking-tight text-foreground">
            Background
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p className="text-gray-text leading-relaxed text-lg">
              I am a passionate full-stack developer who loves building products
              from scratch. I am obsessed with web performance, clean architecture,
              and delivering seamless user experiences. With a strong foundation
              in modern web technologies, I enjoy tackling complex technical challenges.
              I am currently open to new opportunities where I can contribute to
              meaningful projects and grow alongside a talented team.
            </p>
          </div>

          <div className="bg-surface border border-border p-8">
            <ul className="space-y-4 font-mono text-sm">
              <li className="flex border-b border-border pb-4 last:border-0 last:pb-0">
                <span className="text-gray-text w-32">Location:</span>
                <span className="text-foreground">India</span>
              </li>
              <li className="flex border-b border-border pb-4 last:border-0 last:pb-0">
                <span className="text-gray-text w-32">Experience:</span>
                <span className="text-foreground">Fresher</span>
              </li>
              <li className="flex border-b border-border pb-4 last:border-0 last:pb-0">
                <span className="text-gray-text w-32">Focus:</span>
                <span className="text-foreground">Full-Stack Web</span>
              </li>
              <li className="flex border-b border-border pb-4 last:border-0 last:pb-0">
                <span className="text-gray-text w-32">Status:</span>
                <span className="text-accent">Open to Work</span>
              </li>
            </ul>
          </div>
        </div>
      </RevealWrapper>
    </section>
  );
}
