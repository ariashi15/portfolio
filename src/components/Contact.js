export default function Contact() {
    const contactinfo = [
        {
            iconUrl: `${process.env.PUBLIC_URL}/assets/images/email.png`,
            info: "ariashi@u.northwestern.edu",
            link: "mailto:ariashi@u.northwestern.edu"
        },
        {
            iconUrl: `${process.env.PUBLIC_URL}/assets/images/linkedin.png`,
            info: "linkedin.com/in/aria-shi",
            link: "https://linkedin.com/in/aria-shi"
        },
        {
            iconUrl: `${process.env.PUBLIC_URL}/assets/images/github.png`,
            info: "github.com/ariashi15",
            link: "https://github.com/ariashi15"
        }
    ]

    return (
        <div id="contact" className="page-content mb-[40px]">
            <div className="title-wrapper w-[380px]">
                <div className="title-bg"></div>
                <div className="page-title">Let's get in touch!</div>
            </div>
            <div className="w-[900px] leading-[40px] text-[22px] mb-[40px]">
                I’m currently looking for a full-time <b>summer 2026 software engineering internship. </b> 
                Please feel free to reach out if you would like to work with me!
            </div>
            {contactinfo.map((contact, index) => (
                <div key={index} className="flex items-center font-title text-[24px] gap-[20px] my-[10px]">
                    <img src={contact.iconUrl} alt="icon" className="w-[30px]"/>
                    <a href={contact.link} target="_blank" rel="noopener noreferrer">{contact.info}</a>
                </div>
            ))}
            <div className="mt-[200px] font-italicbody">Built with React Native and styled with Tailwind CSS. © 2025 Aria Shi.</div>
        </div>
    );
}