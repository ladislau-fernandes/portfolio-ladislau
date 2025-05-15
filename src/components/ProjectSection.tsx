interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
  image?: string;
  techStack: string[]; // array com as linguagens/tecnologias usadas
}

const projects: Project[] = [
  {
    id: 1,
    title: "Projeto Legal",
    description: "Uma descrição simples e clara do projeto.",
    link: "https://github.com/seuusuario/projeto-legal",
    image: "https://via.placeholder.com/400x200",
    techStack: ["React", "TypeScript", "TailwindCSS"], // aqui as linguagens
  },
   {
    id: 2,
    title: "Projeto Legal",
    description: "Uma descrição simples e clara do projeto.",
    link: "https://github.com/seuusuario/projeto-legal",
    image: "https://via.placeholder.com/400x200",
    techStack: ["React", "TypeScript", "TailwindCSS", "Nodejs"], // aqui as linguagens
  },
   {
    id: 3,
    title: "Projeto Legal",
    description: "Uma descrição simples e clara do projeto.",
    link: "https://github.com/seuusuario/projeto-legal",
    image: "https://via.placeholder.com/400x200",
    techStack: ["React", "TypeScript", "TailwindCSS","Nodejs", "Docker"], // aqui as linguagens
  },
  // outros projetos...
];

export const ProjectsSection = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-40">
      <h2 className="text-4xl font-bold mb-12 text-center">Meus Projetos</h2>

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map(({ id, title, description, link, image, techStack }) => (
          <a
            key={id}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
          >
            {image && (
              <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            )}

            <div className="p-6 bg-white">
              <h3 className="text-2xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600 mb-4">{description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <span className="inline-block text-blue-600 font-medium group-hover:underline">
                Ver Projeto &rarr;
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
