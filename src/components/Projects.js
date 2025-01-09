import Tags from "./Tags";

export default function Projects () {
  const projects = [
    {
      title: "Pixel Sketchbook",
      desc: `
      Interactive pixel art sketchbook with support for hover-to-draw functionality and opacity-based drawing to simulate layered strokes.
      Responsive and customizable grid layout, ensuring optimal rendering across screen sizes.

      `,
      tags: ["JavaScript", "HTML", "CSS", "Git", "GitHub"],
      imgUrl: "/assets/images/sketchbook.png"
    },
  
    {
      title: "Trip Planner",
      desc: `
      Trip planner with routing and searching services based on user-defined map data with support for 3 types of queries.
      Included design documentation including entity-relation diagrams, ethical considerations, and analyses of alternatives.

      `,
      tags: ["DSSL2"],
      imgUrl: "/assets/images/tripplanner.jpg"
    },
  
    {
      title: "Open Street Map Navigator",
      desc: `
      Navigator for an open street map of Evanston. Included support for map searching, as well as 
      integration of Chicago Transit Authority’s bus API to provide real-time bus information 
      for stops nearest to any given building.

      `,
      tags: ["C++", "Google Test"],
      imgUrl: "/assets/images/map.jpg"
    },

    {
      title: "Python Execution Environment",
      desc: `
      Execution environment for a subset of the Python language developed using C. 
      Components included a parser to validate syntax, an executor with support for function calls, assignment statements, etc., 
      and a memory management module to write and read objects to memory.
      `,
      tags: ["C", "Google Test"],
      imgUrl: "/assets/images/pythonex.png"
    },
  ]
  
    return (
      <div id="projects" className="page-content">
        <div className="title-wrapper w-[170px]">
            <div className="title-bg"></div>
            <div className="page-title">Projects</div>
        </div>
        <div className="flex flex-col gap-[33px]">
            {projects.map(((project) => (
              <Project key={project.title} title={project.title} desc={project.desc} tags={project.tags} imgUrl={project.imgUrl} />
            )
            ))}
          </div>
        </div>
    );
  }
  
  
  function Project(props) {
    return (
      <div id="project-box" className="flex p-[20px] gap-[35px] bg-med-purple w-[900px] rounded-[5px]">
        <img 
          id="project-image"
          className="flex-shrink-0 w-[200px] h-[110px] object-cover rounded-[5px]"
          src={props.imgUrl}
          alt="placeholder"
        />
  
        <div className="flex flex-col">
          <div className="text-[24px] pb-[10px] font-title">{props.title}</div>
          <div className="text-[16px] mb-[20px]">{props.desc}</div>
          <Tags tags={props.tags}/>
        </div>
      </div>
    );
  }