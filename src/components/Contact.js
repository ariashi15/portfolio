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
            <div className="lg:w-2/3 md:w-1/2 sm:w-1/3 leading-[40px] text-[22px] mb-[40px]">
                I’m currently looking for a <b>full-time software engineering role</b> beginning in the fall of 2027. 
                Please feel free to reach out if you would like to work with me!
            </div>
            {contactinfo.map((contact, index) => (
                <div key={index} className="flex items-center font-title text-[24px] gap-[20px] my-[10px]">
                    <img src={contact.iconUrl} alt="icon" className="w-[30px]"/>
                    <a href={contact.link} target="_blank" rel="noopener noreferrer">{contact.info}</a>
                </div>
            ))}
            <div className="mt-[200px] font-italicbody">Built by Aria Shi with React Native, Tailwind CSS, Notion API, and Cloudinary. Last updated January 2026.</div>
        </div>
    );
}