import { Hero, About, Services, Projects, Contact } from "@/components";

export default function Home() {
  return (
    <main className="bg-[#020617]">
      <Hero />
      <About />
      <Services />

      <Projects />
      <Contact />
    </main>
  );
}


