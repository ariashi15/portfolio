import { useState, useEffect } from "react";

export default function Skills() {
    const [skills, setSkills] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const apiBaseUrl = process.env.REACT_APP_API_URL ?? "";
    
    useEffect(() => {
        async function fetchSkills() {
            try {
                const response = await fetch(`${apiBaseUrl}/skills`);

                if (!response.ok) {
                    throw new Error(`Request failed with status${response.status}`);
                }

                const data = await response.json();
                setSkills(data);
            } catch(err) {
                if (err.name !== 'AbortError') {
                    setError(err.message);
                }
            } finally {
                setIsLoading(false);
            }
        };

        fetchSkills();

    }, [apiBaseUrl]);

    return (
        <div id="skills" className="page-content">
            <div className="title-wrapper w-[450px]">
                <div className="title-bg"></div>
                <div className="page-title">Skills & Technologies</div>
            </div>
            <div className="w-[900px] bg-med-purple flex flex-wrap items-center justify-center gap-[30px] p-[20px] rounded-[5px]">
                {isLoading && <div>Loading skills...</div>}
                {error && <div>Unable to load skills: {error}</div>}
                {!isLoading && !error && skills.map((skill, index) => (
                    <div key={index} className="flex flex-col items-center w-[13%] transform transition-all duration-500 hover:scale-105 hover:bg-med-dark-purple rounded-[5px] p-[10px]">
                        <img src={skill.imgurl} alt={skill.name} className="w-[70px]"/>
                        <div className="mt-[10px]">{skill.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}