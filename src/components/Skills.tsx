export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"],
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "GitHub", "Vercel", "Docker", "VS Code"],
    },
    {
      category: "Other",
      skills: ["UI/UX Design", "Web Performance", "SEO", "Accessibility", "Agile"],
    },
  ];

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">Skills & Expertise</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div key={category.category} className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {category.category}
              </h3>

              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
