import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Welcome to My Portfolio</h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Full-Stack Developer | Creative Problem Solver | Tech Enthusiast
          </p>
          <a
            href="#projects"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            View My Work
          </a>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <Projects />

      {/* Skills Section */}
      <Skills />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}
