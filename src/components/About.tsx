import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg h-80 flex items-center justify-center">
            <div className="relative w-72 h-72 rounded-lg overflow-hidden">
              <Image
                src="/profile.jpg"
                alt="Profile Image"
                loading='eager'
                fill
                sizes="288px"
                className="object-cover object-center scale-125"
              />
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-700">
              Hi! I'm a passionate web developer with a strong foundation in modern web technologies. 
              I love creating beautiful, functional websites and applications that solve real-world problems.
            </p>

            <p className="text-lg text-gray-700">
              With experience in React, Next.js, and TypeScript, I focus on building performant, 
              scalable applications with excellent user experiences.
            </p>

            <p className="text-lg text-gray-700">
              When I'm not coding, you can find me exploring new technologies, contributing to open source, 
              or sharing knowledge with the developer community.
            </p>

            <div className="pt-4">
              <a
                href="#contact"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
