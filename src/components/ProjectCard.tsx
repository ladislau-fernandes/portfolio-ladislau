import React from 'react'

type Props = {
    title: string;
    description: string;
    imageUrl: string;
    techs: string[];
    demoUrl: string;
    codeUrl: string;
}

export const ProjectCard: React.FC<Props> = ({ title, description, imageUrl, techs, demoUrl, codeUrl }) => {
    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
            <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600 mb-3">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {techs.map((tech, index) => (
                        <span key={index} className="text-xs bg-gray-200 px-2 py-1 rounded-full">
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="flex gap-3">
                    <a href={demoUrl} target="_blank" className="text-sm text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">Ver Projeto</a>
                    <a href={codeUrl} target="_blank" className="text-sm text-blue-600 border border-blue-600 px-4 py-2 rounded hover:bg-blue-50">Código</a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard