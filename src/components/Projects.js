import Tags from "./Tags";

export default function Projects () {
  const projects = [
    {
      title: "Project 1",
      desc: "A description of Project 1",
      tags: ["Tag 1", "Tag 2", "Tag 3"],
    },
  
    {
      title: "Project 2",
      desc: "A description of Project 2",
      tags: ["Tag 1", "Tag 2"],
    },
  
    {
      title: "Project 3",
      desc: "A description of Project 3",
      tags: ["Tag 1", "Tag 2", "Tag 3", "Tag 4"],
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
              <Project key={project.title} title={project.title} desc={project.desc} tags={project.tags} />
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
          className="w-[200px] h-[110px] object-cover rounded-[5px]"
          src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
          alt="placeholder"
        />
  
        <div className="flex flex-col">
          <div className="text-[24px] pb-[10px] font-title">{props.title}</div>
          <div className="text-[16px]">{props.desc}</div>
          <Tags tags={props.tags}/>
        </div>
      </div>
    );
  }