import React from 'react'
import { FaVideo } from 'react-icons/fa'
import Project from './Project'
import styles from '../styles/components/Projects.module.scss'


const Projects = () => {
  const projects = [
     {
      id: 1,
      title: '',
      description: '',
      icon: <FaVideo size={48} className={styles.bestIcon} />,
      video: 'https://vimeo.com/153561869'
    }
  ]

  return (
    <section id='projects' className={styles.projectsContainer}>
      <h2 className='section-header'>VIDEO</h2>
      <h1 className='section-subheader'>OUR VIDEO</h1>
      <div className='section-body'>
        {projects.map(project => <Project project={project} key={project.id} />)}
      </div>
    </section>
  )
}

export default Projects
