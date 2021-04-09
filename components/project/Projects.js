import Project from './Project';
import { projectData } from '../../data/projects';

export default function Projects() {
    return (
        <div>
            {projectData.map(project => (
                <Project 
                    key={project.id}
                    image={project.thumbnail}
                    title={project.name}
                    github={project.github_repo}
                    link={project.link_live} />
            ))}
        </div>
    )
}
