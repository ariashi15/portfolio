import Tags from "./Tags";

export default function Experience() {
    const experiences = [
        {
            id: 1,
            company: "Capital One",
            dates: "June 2025 - Present",
            title: "Software Engineering Intern",
            description:
                ` Expand account Status Hub to support multi-type card decline alerts for small business cardholders. 
                Refactor existing messaging infrastructure and Status Hub API to handle different decline scenarios.
                Employ Agile methodologies and task tracking with Jira to collaborate with team of 4.
                Implement end-to-end testing workflows and conduct QA cycles.
            `,
            tags: ["JavaScript", "TypeScript", "AWS", "YAML", "Angular"],
            link: "https://www.capitalonecareers.com/internship-programs"
        },
        {
            id: 2,
            company: "Develop and Innovate for Social Change",
            dates: "Jan 2025 - Present",
            title: "Fullstack Developer",
            description:
                `
            Develop CRM system for North Shore Senior Center with team of 6.
            Own frontend design of 20+ pages; iteratively prototype using Figma.
            Lead design and implementation of relational database schema.
            Build role-based access control in compliance with HIPAA and admin dashboard to monitor platform activity.

            `,
            tags: ["React", "Express", "Supabase", "Figma"],
            link: "https://www.discnu.org/"
        },
        {
            id: 3,
            company: "Northwestern Univ.",
            dates: "Sept 2024 - June 2025",
            title: "Teaching Assistant for CS 110 and CS 111",
            description:
                `
            Taught students object-oriented and functional programming through weekly office hours and tutorial sessions.
            Led small-group discussions on topics surrounding ethics in technology such as accessibility and accountability.
            `,
            tags: ["Python", "Racket"],
            link: "https://www.mccormick.northwestern.edu/computer-science/academics/undergraduate/peer-mentor-program/"
        },
        {
            id: 4,
            company: "PrizeSole",
            dates: "June 2024 - Aug 2024",
            title: "Software Engineering Intern",
            description:
                `
            Developed iOS app with team of 4 from the ground up for e-commerce start-up using Swift and SwiftUI. 
            Designed UI from scratch using Figma, iterated on design to optimize functionality and improve user flow.

            `,
            tags: ["Swift", "SwiftUI", "Git", "GitHub"],
            link: "https://prizesole.com/"
        },
        {
            id: 5,
            company: "Lumos Debate",
            dates: "July 2021 - Aug 2024",
            title: "Director",
            description:
                `
            Managed teams of 8+ instructors in sessions enrolling 40+ students, communicated with parents and rental contacts.
            Delivered quality student experience rated on average 9.1/10 by adapting curriculum via daily meetings with instructors.
            Evaluated and addressed students’ strengths/weaknesses, wrote 450-600 word progress reports to parents for each student.

            `,
            tags: ["Team Management", "Communication"],
            link: "https://lumosdebate.com"
        },
    ]

    return (
        <div id="experience" className="page-content">
            <div className="title-wrapper w-[230px]">
                <div className="title-bg"></div>
                <div className="page-title">Experience</div>
            </div>
            <div>
                {experiences.map((experience, index) => (
                    <div key={index}>
                        <ExperienceCard
                            id={experience.id}
                            company={experience.company}
                            dates={experience.dates}
                            title={experience.title}
                            description={experience.description}
                            tags={experience.tags}
                            link={experience.link}
                        />
                    </div>
                ))}
            </div>
            <div className="group flex items-center font-bolditalicbody pt-[20px] gap-[5px] w-fit">
                <a href={`${process.env.PUBLIC_URL}/assets/resume.pdf`} target="_blank" rel="noopener noreferrer">View my full resume</a>
                <div className="transform transition-all duration-500 group-hover:translate-x-1">→</div>
            </div>

            <div id="underline" className="h-[1px] w-[160px] bg-dark-blue"></div>
        </div>
    );
}

function ExperienceCard(props) {
    return (
        <div className="flex gap-[15px] w-[900px]">
            <div id="timeline" className="w-[200px] flex-shrink-0 bg-med-purple p-[15px]">
                <div className="font-bolditalicbody">{props.company}</div>
                <div className="font-italicbody">{props.dates}</div>
            </div>
            <a href={props.link} target="_blank" rel="noopener noreferrer">
                <div id="details" className="rounded-[5px] pt-[8px] pb-[15px] px-[20px] mb-[20px] transition-all duration-500 border-[2px] border-light-purple hover:border-med-dark-purple">
                    <div className="font-title text-[24px]">{props.title}</div>
                    <div className="pt-[10px] pb-[17px]">{props.description}</div>
                    <div className="">
                        <Tags tags={props.tags} />
                    </div>
                </div>
            </a>
        </div>
    );
}