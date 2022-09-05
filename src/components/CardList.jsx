import { CardProject } from "./CardProject"
import projects from '../data/projects.json';

export const CardList = () => {

  return (
    <>
      {
        projects.map(project => (
          <CardProject 
            key={project.name}
            {...project}
          />
        ))    
      }
    </>
  )
}
