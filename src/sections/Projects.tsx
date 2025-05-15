import { projects } from '../data/projects'

const Projects = () => {
  return (
    <section className="py-10 px-4 bg-white">
      <h2 className="text-2xl font-semibold text-center mb-6">Projetos</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div key={project.id} className="p-4 border rounded-xl shadow-md">
            <h3 className="text-lg font-bold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-600">{project.description}</p>
            <a
              href={project.link}
              className="text-blue-500 underline mt-2 inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Projeto
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects