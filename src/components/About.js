export default function About() {
    const titleArray = ["H", "i", ",", " ", "I", "'", "m", " ", "A", "r", "i", "a", "!"];

    return (
        <div id="about-me" className="page-content flex flex-col justify-center h-screen">
            <div className="title-wrapper w-[420px]">
                <div className="title-bg"></div>
                <div className="page-title text-[90px]">
                    {titleArray.map((letter, index) => (
                        <span key={index} className="letter animate-slideFadeIn" style={{ '--index': index + 1 }}>{letter === ' ' ? '\u00A0' : letter}</span>
                        // use non-breaking space if there's a space
                    ))}
                </div>
            </div>
            <div className="w-[900px] leading-[40px] text-[22px] animate-slideFadeIn">
                <p>
                    I’m a student at Northwestern University pursuing a double major 
                    in <b>Computer Science</b> and <b>Economics</b>, with a minor in <b>Business Institutions</b>. 
                    I’m an aspiring software engineer with experience in <b>iOS development</b> and <b>UI/UX design</b>, 
                    but always looking to explore other areas.
                </p>
                <p className="mt-[40px]">
                    I’m a <b>creative problem-solver</b> who loves <b>puzzles in all forms</b>, from coding to Sudoku 
                    and everything in between. Outside of the tech space, some of my interests include sketching, 
                    painting, figure skating, working with kids, and traveling!
                </p>
            </div>
        </div>
    );
}