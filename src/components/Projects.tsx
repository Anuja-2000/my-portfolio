export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with product catalog, cart, and payment integration.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
      link: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Real-time task management application with drag-and-drop interface and team collaboration.",
      tech: ["React", "Firebase", "TypeScript", "Material-UI"],
      link: "#",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Interactive weather dashboard with real-time data, forecasts, and location search.",
      tech: ["Next.js", "TypeScript", "OpenWeather API", "Tailwind CSS"],
      link: "#",
    },
    {
      id: 4,
      title: "Blog Platform",
      description: "Markdown-based blog platform with SEO optimization and dark mode support.",
      tech: ["Next.js", "MDX", "TypeScript", "Tailwind CSS"],
      link: "#",
    },
    {
      id: 5,
      title: "Portfolio Generator",
      description: "AI-powered tool to generate personalized portfolio websites from user input.",
      tech: ["Next.js", "OpenAI API", "Tailwind CSS", "TypeScript"],
      link: "#",
    },
    {
      id: 6,
      title: "Social Media Analytics",
      description: "Dashboard for tracking and analyzing social media metrics across multiple platforms.",
      tech: ["React", "TypeScript", "Chart.js", "REST API"],
      link: "#",
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
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <span className="text-white text-4xl">📱</span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

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
                  className="inline-block text-blue-600 hover:text-blue-700 font-semibold"
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
