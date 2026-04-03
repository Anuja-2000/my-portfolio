import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "NetGen - Travel Destination Generator",
      description: "AI-powered travel destination summary generator and recommendation engine with intelligent chatbot for personalized user interactions.",
      tech: ["Python", "Jupyter Notebook", "Machine Learning", "NLP"],
      link: "https://github.com/Anuja-2000/fyp-netgen",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=300&fit=crop",
    },
    {
      id: 2,
      title: "DineFlow - Food Ordering Platform",
      description: "Online food ordering platform built with microservices architecture using Ballerina programming language for scalability and reliability.",
      tech: ["Ballerina", "Microservices", "REST APIs", "Docker"],
      link: "https://github.com/Anuja-2000/dineflow",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=300&fit=crop",
    },
    {
      id: 3,
      title: "Article Topic Platform",
      description: "Article writing platform with intelligent topic recommendation engine to help writers discover trending and relevant topics.",
      tech: ["JavaScript", "Node.js", "Recommendation Engine", "MongoDB"],
      link: "https://github.com/Anuja-2000/article-topic-platform",
      image: "https://images.unsplash.com/photo-1483389127117-b6a2102724ae?w=500&h=300&fit=crop",
    },
    {
      id: 4,
      title: "Supermarket App - Microservices",
      description: "Microservices backend for supermarket management system with Spring Boot, demonstrating scalable enterprise application architecture.",
      tech: ["Java", "Spring Boot", "Microservices", "REST API"],
      link: "https://github.com/Anuja-2000/supermarket-app",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=500&h=300&fit=crop",
    },
    {
      id: 5,
      title: "QA Testing Automation",
      description: "Automated testing framework developed with Cypress and Cucumber for behavior-driven development and quality assurance.",
      tech: ["Cypress", "Cucumber", "JavaScript", "Testing"],
      link: "https://github.com/Anuja-2000/qa-group-app",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop",
    },
    {
      id: 6,
      title: "Todo App",
      description: "Simple yet elegant todo application built with modern web technologies, showcasing Next.js and TypeScript best practices.",
      tech: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
      link: "https://github.com/Anuja-2000/to-do-app",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500&h=300&fit=crop",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">Featured Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden"
            >
              <div className="relative h-48 w-full bg-gray-200">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={project.id === 1}
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm line-clamp-3">{project.description}</p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-600 hover:text-blue-700 font-semibold transition"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
