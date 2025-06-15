import Tags from "./Tags";

export default function Projects () {
  const projects = [
    {
      title: "Farmstand",
      desc: `
      Full-stack application connecting local farmers to conscious consumers, built during a 24-hour hackathon. 
      Included a PostgreSQL database schema to model farms, products, and inventory, as well as 
      5 RESTful endpoints with Node.js and Express for fetching farm/product information and adding/updating inventory.
      `,
      tags: ["React", "Tailwind", "Git", "Express.js", "PostgreSQL", "Supabase"],
      imgUrl: `${process.env.PUBLIC_URL}/assets/images/farmstand.jpg`,
      link: 'https://devpost.com/software/farmstand?ref_content=my-projects-tab&ref_feature=my_projects'
    },
    {
      title: "Pixel Sketchbook",
      desc: `
      Interactive pixel art sketchbook with support for hover-to-draw functionality and opacity-based drawing to simulate layered strokes.
      Responsive and customizable grid layout, ensuring optimal rendering across screen sizes.

      `,
      tags: ["JavaScript", "HTML", "CSS", "Git", "GitHub"],
      imgUrl: `${process.env.PUBLIC_URL}/assets/images/sketchbook.png`,
      link: 'https://ariashi15.github.io/pixel-sketchbook/'
    },
  
    {
      title: "Trip Planner",
      desc: `
      Trip planner with routing and searching services based on user-defined map data with support for 3 types of queries.
      Included design documentation including entity-relation diagrams, ethical considerations, and analyses of alternatives.

      `,
      tags: ["DSSL2"],
      imgUrl: `${process.env.PUBLIC_URL}/assets/images/tripplanner.jpg`,
      link: null
    },
  
    {
      title: "Open Street Map Navigator",
      desc: `
      Navigator for an open street map of Evanston. Included support for map searching, as well as 
      integration of Chicago Transit Authority’s bus API to provide real-time bus information 
      for stops nearest to any given building.

      `,
      tags: ["C++", "Google Test"],
      imgUrl: `${process.env.PUBLIC_URL}/assets/images/map.jpg`,
      link: null
    },

    {
      title: "Python Execution Environment",
      desc: `
      Execution environment for a subset of the Python language developed using C. 
      Components included a parser to validate syntax, an executor with support for function calls, assignment statements, etc., 
      and a memory management module to write and read objects to memory.
      `,
      tags: ["C", "Google Test"],
      imgUrl: `${process.env.PUBLIC_URL}/assets/images/pythonex.png`,
      link: null
    }
  ]
  
    return (
      <div id="projects" className="page-content">
        <div className="title-wrapper w-[170px]">
            <div className="title-bg"></div>
            <div className="page-title">Projects</div>
        </div>
        <div className="flex flex-col gap-[33px]">
            {projects.map(((project) => (
              <Project key={project.title} title={project.title} desc={project.desc} tags={project.tags} imgUrl={project.imgUrl} link={project.link} />
            )
            ))}
          </div>
        </div>
    );
  }
  
  
  function Project(props) {
    return (
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <div id="project-box" className="flex p-[20px] gap-[35px] transition-all duration-500 bg-med-purple w-[900px] hover:bg-med-dark-purple rounded-[5px]">
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
      </a>
    );
  }