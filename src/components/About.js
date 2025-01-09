export default function About() {
    const titleArray = ["H", "i", "!", " ", "I", "'", "m", " ", "A", "r", "i", "a", "."];

    return (
        <div id="about-me" className="page-content flex flex-col justify-center h-screen">
            <div className="title-wrapper w-[460px]">
                <div className="title-bg"></div>
                <div className="page-title text-[100px]">
                    {titleArray.map((letter, index) => (
                        <span key={index} className="letter animate-slideFadeIn" style={{ '--index': index + 1 }}>{letter === ' ' ? '\u00A0' : letter}</span>
                        // use non-breaking space if there's a space
                    ))}
                </div>
            </div>
            <div className="w-[900px] leading-[45px] text-[24px] animate-slideFadeIn">
                I’m a student at Northwestern University pursuing a double major 
                in <b>Computer Science</b> and <b>Economics</b>, with a minor in <b>Business Institutions</b>. 
                I’m an aspiring software engineer with experience in <b>iOS development</b> and <b>UI/UX design</b>, 
                but always looking to explore other areas!</div>
        </div>
    );
}