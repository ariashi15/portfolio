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
      <div className="page-content">
        <div id="page-title" className="mx-[50px] my-[30px] text-[50px] font-title">Projects</div>
        <div id="projects" className="flex flex-col gap-[33px] ml-[50px]">
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
      <div id="project-box" className="flex p-[20px] gap-[35px] bg-med-purple w-[930px] rounded-[3px]">
        <img 
          id="project-image"
          className="w-[200px] h-[110px] object-cover rounded-[3px]"
          src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
          alt="placeholder"
        />
  
        <div className="flex flex-col">
          <div className="text-[24px] pb-[10px] font-title">{props.title}</div>
          <div className="text-[16px]">{props.desc}</div>
          <div id="project-tags" className="flex gap-[10px] mt-auto">
            {props.tags.map((tag) => (
              <div className="flex bg-dark-purple text-[16px] rounded-[5px] px-[10px] h-[21px] items-center justify-center text-light-purple">{tag}</div>
            ))}
          </div>
        </div>
      </div>
    );
  }