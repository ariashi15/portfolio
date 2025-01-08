export default function Contact() {
    const contactinfo = [
        {
            iconUrl: "/assets/images/email.png",
            info: "ariashi@u.northwestern.edu"
        },
        {
            iconUrl: "/assets/images/linkedin.png",
            info: "linkedin.com/in/aria-shi"
        },
        {
            iconUrl: "/assets/images/github.png",
            info: "github.com/ariashi15"
        }
    ]

    return (
        <div className="page-content">
            <div className="page-title">Let's get in touch!</div>
            <div className="w-[900px] leading-[45px] text-[24px] mb-[40px]">I’m currently looking for a full-time summer 2025 software engineering 
                internship. Please feel free to reach out if you would like to work with me!</div>
            {contactinfo.map((contact) => (
                <div className="flex items-center font-title text-[24px] gap-[20px] my-[10px]">
                    <img src={contact.iconUrl} alt="icon" className="w-[30px]"/>
                    <div>{contact.info}</div>
                </div>
            ))}
        </div>
    );
}