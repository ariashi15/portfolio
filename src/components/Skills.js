export default function Skills() {
    const skills = [
        {
            name: "Python",
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/python.png`
        },
        {
            name: "C",
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/c.png`
        },
        {
            name: "C++",
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/cpp.png`
        },
        {
            name: "JavaScript",
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/javascript.png`
        },
        {
            name: "HTML",
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/html.png`
        },
        {
            name: "CSS",
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/css.png`
        },
        {
            name: "Swift",
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/swift.png`
        },
        {
            name: "Git",
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/git.png`
        },
        {
            name: "Figma",
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/figma.png`
        },
        {
            name: "React",
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/react.png`
        },
        {
            name: "PostgreSQL",
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/postgres.png`
        },
        {
            name: "Tailwind",
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/tailwind.png`
        },
    ];

    return (
        <div id="skills" className="page-content">
            <div className="title-wrapper w-[450px]">
                <div className="title-bg"></div>
                <div className="page-title">Skills & Technologies</div>
            </div>
            <div className="w-[900px] bg-med-purple flex flex-wrap items-center justify-center gap-[30px] p-[20px]">
                {skills.map((skill) => (
                    <div key={skill.name} className="flex flex-col items-center w-[13.5%] transform transition-all duration-500 hover:scale-105 hover:bg-med-dark-purple rounded-[5px] p-[10px]">
                        <img src={skill.imageUrl} alt={skill.name} className="w-[70px]"/>
                        <div className="mt-[10px]">{skill.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}