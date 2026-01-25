import { useState, useEffect } from 'react';
import Tags from "./Tags";

export default function Projects () {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiBaseUrl = 'https://portfolio-backend-blond-eight.vercel.app/api' ?? "";

  useEffect(() => {
    async function fetchProjects () {
      try {
        const response = await fetch(`${apiBaseUrl}/projects`);

        if (!response.ok) {
          throw new Error(`Request failed with status${response.status}`);
        }

        const data = await response.json();
        setProjects(data);

      } catch(err) {
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();

  }, [apiBaseUrl]);
  
    return (
      <div id="projects" className="page-content">
        <div className="title-wrapper w-[170px]">
            <div className="title-bg"></div>
            <div className="page-title">Projects</div>
        </div>
        <div className="flex flex-col gap-[33px]">
            {isLoading && <div>Loading projects...</div>}
            {error && <div>Unable to load projects: {error}</div>}
            {!isLoading && !error && projects.map(((project, index) => (
              <Project key={index} name={project.name} description={project.description} tags={project.tags} imgurl={project.imgurl} link={project.link} />
            )
            ))}
          </div>
        </div>
    );
  }
  
  
  function Project(props) {
    return (
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <div id="project-box" className="flex p-[20px] gap-[35px] transition-all duration-500 bg-med-purple lg:w-2/3 md:w-1/2 sm:w-1/3 hover:bg-med-dark-purple rounded-[5px]">
          <img 
            id="project-image"
            className="flex-shrink-0 w-[200px] h-[110px] object-cover rounded-[5px]"
            src={props.imgurl}
            alt="placeholder"
          />
    
          <div className="flex flex-col">
            <div className="text-[24px] pb-[10px] font-title">{props.name}</div>
            <div className="text-[16px] mb-[20px]">{props.description}</div>
            <Tags tags={props.tags}/>
          </div>
        </div>
      </a>
    );
  }