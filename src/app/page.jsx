import { Hero, About, Logos, Services, Projects, Contact } from "@/components";

export default function Home() {
  return (
    <main className="bg-[#020617]">
      <Hero />
      <About />
      <Logos />
      <Services />

      <Projects />
      <Contact />
    </main>
  );
}


