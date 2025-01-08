import Tags from "./Tags";

export default function Experience() {
    const experiences = [
        {
            id: 1,
            company: "PrizeSole",
            dates: "June 2024 - Aug 2024",
            title: "Software Engineering Intern",
            description: 
            `
            Develop iOS app with team of 4 from the ground up for e-commerce 
            start-up using Swift and Swift UI. Design UI from scratch using Figma, 
            continuously iterate on design to optimize functionality and improve 
            user flow. Coordinate Git version control with team to collaborate smoothly 
            on the implementation of new features.
            `,
            tags: ["Swift", "SwiftUI", "Git"]
        },
        {
            id: 2,
            company: "PrizeSole",
            dates: "June 2024 - Aug 2024",
            title: "Software Engineering Intern",
            description: 
            `
            Develop iOS app with team of 4 from the ground up for e-commerce 
            start-up using Swift and Swift UI. Design UI from scratch using Figma, 
            continuously iterate on design to optimize functionality and improve 
            user flow. Coordinate Git version control with team to collaborate smoothly 
            on the implementation of new features.
            `,
            tags: ["Swift", "SwiftUI", "Git"]
        },
    ]

    return (
        <div id="experience" className="page-content">
            <div className="title-wrapper w-[230px]">
                <div className="title-bg"></div>
                <div className="page-title">Experience</div>
            </div>
            <div>
                {experiences.map((experience) => (
                    <ExperienceCard 
                        id={experience.id}
                        company={experience.company} 
                        dates={experience.dates}
                        title={experience.title}
                        description={experience.description}
                        tags={experience.tags}
                        />
                ))}
            </div>
            <div className="group flex items-center font-bolditalicbody pt-[20px] gap-[5px]">
                <a href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer">View my full resume</a>
                <div className="transform transition-all duration-500 group-hover:translate-x-1">→</div>
            </div>
            
            <div id="underline" className="h-[1px] w-[160px] bg-dark-blue"></div>
        </div>
    );
}

function ExperienceCard(props) {
    return (
        <div className="flex gap-[32px] w-[900px]">
            <div id="timeline" className="w-[200px] flex-shrink-0 bg-med-purple p-[15px]">
                <div className="font-bolditalicbody">{props.company}</div>
                <div className="font-italicbody">{props.dates}</div>
            </div>
            <div id="details" className="py-[8px]">
                <div className="font-title text-[24px]">{props.title}</div>
                <div className="pt-[10px] pb-[17px]">{props.description}</div>
                <div className="mb-[30px]">
                    <Tags tags={props.tags} />
                </div>
            </div>
        </div>
    );
}