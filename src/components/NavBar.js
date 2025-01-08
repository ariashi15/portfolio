import { useState, useEffect } from 'react';

export default function NavBar() {

    const navItems = ["About Me", "Skills", "Projects", "Experience", "Contact"]
    const [selectedNavItem, setSelectedNavItem] = useState("About Me");
  
    useEffect(() => {
      console.log(`selected item: ${selectedNavItem}`);
    }, [selectedNavItem]);

    const handleNavClick = (item) => {
      setSelectedNavItem(item);
      const sectionID = item.toLowerCase().replace(" ", "-");
      const section = document.getElementById(sectionID);
      if (section) {
        section.scrollIntoView({ behavior: "smooth"});
      }
    }
  
    return (
      <div id="nav-bar" className="flex items-center mr-[80px] font-title fixed top-0 right-0">
        <div id="nav-text" className="flex flex-col gap-[80px] mr-[56px]">
          {navItems.map((item, index) => (
            <div key={item} className="flex items-center justify-end gap-[40px]">
              <div 
                className={`w-full text-right transform transition-all duration-500 origin-right ${selectedNavItem === item ? "text-[30px] text-dark-purple" : "text-[24px] text-dark-blue"} hover:text-[30px] hover:text-dark-purple`}
                onClick={() => handleNavClick(item)}
                >{item}</div>
            </div>
          ))}
        </div>
        <div id="nav-line" className="relative flex items-center justify-center w-[2px] h-screen">
          <Dots />
          <div id="vertical-line" className="absolute w-full h-full bg-dark-blue"></div>
        </div>
      </div>
    );
  }

  function Dots() {
    const dots = [];

    for (let i = 0; i < 5; i++) {
      dots.push(
      <div className="flex h-[32px] items-center justify-center">
        <div className="absolute w-[8px] h-[8px] rounded-full bg-dark-blue"></div>
      </div>
      );
    }

    return (
      <div className="absolute w-full flex flex-col items-center gap-[85px]">
        {dots}
      </div>
    );
  }