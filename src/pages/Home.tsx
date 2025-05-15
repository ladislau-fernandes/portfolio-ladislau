// Home.tsx
import Hero from "../sections/Hero";
import { ProjectsSection } from "../components/ProjectSection";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <main className="pt-24 max-w-5xl mx-auto px-4 space-y-40">
      <section id="inicio"><Hero /></section>
      <section id="projetos"><ProjectsSection /></section>
      <section id="contato"><Contact/></section>
      <Footer />
    </main>
  );
};

export default Home;
