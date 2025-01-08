import { useState, useEffect } from 'react';

export default function NavBar() {

    const navItems = ["About Me", "Skills", "Projects", "Experience", "Contact"]
    const [selectedNavItem, setSelectedNavItem] = useState("About Me");
  
    useEffect(() => {
      console.log(`selected item: ${selectedNavItem}`);
    }, [selectedNavItem]);
  
    return (
      <div id="nav-bar" className="flex items-center pr-12 font-title relative">
        <div id="nav-text" className="flex flex-col gap-20 mr-14">
          {navItems.map((item, index) => (
            <div key={item} className="flex items-center justify-end gap-10">
              <div 
                className={`w-full text-right ${selectedNavItem === item ? "text-3xl text-dark-purple" : "text-2xl text-dark-blue"}`}
                onClick={() => setSelectedNavItem(item)}
                >{item}</div>
            </div>
          ))}
        </div>
        <div className="relative flex items-center justify-center w-0.5 h-screen">
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
      <div className="flex h-8 items-center justify-center">
        <div className="absolute w-2 h-2 rounded-full bg-dark-blue"></div>
      </div>
      );
    }

    return (
      <div className="absolute w-full flex flex-col items-center gap-20">
        {dots}
      </div>
    );
  }