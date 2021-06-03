import Project from './Project'
import { projectData } from '../../data/projects'
import styles from './Projects.module.css'

export default function Projects() {
    return (
        <div className={ styles.container }>
            {projectData.map(project => (
                <Project
                    key={ project.id }
                    image={ project.thumbnail }
                    title={ project.name }
                    github={ project.github_repo }
                    link={ project.link_live } />
            ))}
        </div>
    )
}
