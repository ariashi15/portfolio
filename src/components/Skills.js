export default function Skills() {
    const skills = [
        {
            name: "Python",
            imageUrl: "/assets/images/python.png"
        },
        {
            name: "C",
            imageUrl: "/assets/images/c.png"
        },
        {
            name: "C++",
            imageUrl: "/assets/images/cpp.png"
        },
        {
            name: "JavaScript",
            imageUrl: "/assets/images/javascript.png"
        },
        {
            name: "HTML",
            imageUrl: "/assets/images/html.png"
        },
        {
            name: "CSS",
            imageUrl: "/assets/images/css.png"
        },
        {
            name: "Swift",
            imageUrl: "/assets/images/swift.png"
        },
        {
            name: "Git",
            imageUrl: "/assets/images/git.png"
        },
        {
            name: "Figma",
            imageUrl: "/assets/images/figma.png"
        },
        {
            name: "React",
            imageUrl: "/assets/images/react.png"
        },
        {
            name: "PostgreSQL",
            imageUrl: "/assets/images/postgres.png"
        },
        {
            name: "Tailwind",
            imageUrl: "/assets/images/tailwind.png"
        },
    ];

    return (
        <div className="page-content">
            <div className="page-title">Skills & Technologies</div>
            <div className="w-[900px] bg-med-purple flex flex-wrap items-center justify-center gap-[30px] p-[20px]">
                {skills.map((skill) => (
                    <div key={skill.name} className="flex flex-col items-center w-[13.5%] transform transition-all duration-500 hover:scale-110 hover:bg-med-dark-purple rounded-[5px] p-[10px]">
                        <img src={skill.imageUrl} alt={skill.name} className="w-[70px]"/>
                        <div className="mt-[10px]">{skill.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}