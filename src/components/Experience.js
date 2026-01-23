import { useEffect, useState } from "react";
import Tags from "./Tags";

export default function Experience() {
    const [experiences, setExperiences] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const apiBaseUrl = process.env.REACT_APP_API_URL ?? "";

    useEffect(() => {
        async function fetchExperiences() {
            try {
                const response = await fetch(`${apiBaseUrl}/experiences`)

                if (!response.ok) {
                    throw new Error(`Request failed with status ${response.status}`);
                }

                const data = await response.json();
                setExperiences(data);
            } catch (err) {
                if (err.name !== "AbortError") {
                    setError(err.message);
                }
            } finally {
                setIsLoading(false);
            }
        }

        fetchExperiences();

    }, [apiBaseUrl]);

    return (
        <div id="experience" className="page-content">
            <div className="title-wrapper w-[230px]">
                <div className="title-bg"></div>
                <div className="page-title">Experience</div>
            </div>
            <div>
                {isLoading && <div>Loading experience...</div>}
                {error && <div role="alert">Unable to load experience: {error}</div>}
                {!isLoading && !error && experiences.map((experience, index) => (
                    <div key={index}>
                        <ExperienceCard
                            id={experience.id}
                            company={experience.company}
                            dates={experience.dates}
                            title={experience.title}
                            description={experience.description}
                            // tags={experience.tags}
                            link={experience.link}
                        />
                    </div>
                ))}
            </div>
            <div className="group flex items-center font-bolditalicbody pt-[20px] gap-[5px] w-fit">
                <a href={`${process.env.PUBLIC_URL}/assets/Aria_Shi_Resume.pdf`} target="_blank" rel="noopener noreferrer">View my full resume</a>
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
                    {/* <div className="">
                        <Tags tags={props.tags} />
                    </div> */}
                </div>
            </a>
        </div>
    );
}