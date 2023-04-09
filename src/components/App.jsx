import React, {useState} from "react";

import Title from "./Title";
import Experience from "./Experience";
import Education from "./Education";
import ContactInfo from "./ContactInfo";
import Footer from "./Footer";
import menuItem from "../htmlTextsEnglish";


function App() {

    const [idiomClicked, setIdiomClicked] = useState("english");

    function handleIdiomClick() {

        const chosenIdiom = setIdiomClicked(idiomMenu.typeItem);

    }
     // Searching for Navbar items on database and idiom is english or any

     function isNavbar(section) {
        return section.component === "Navbar" && (section.idiom === "any" || section.idiom ===  idiomClicked );
    }

    const menu = menuItem.filter(isNavbar);
    const completeName = menu.shift();
    const idiomMenu = menu.pop(); 




    return (
        <div>
            <section className="class-section" id="title">
                <div className="container-fluid">  
                <nav className="navbar navbar-expand-lg navbar-light" >
        
        {completeName.content[1]}

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav ms-auto">
 
                {menu.map(function (item) {
                    return <li className="nav-item" key={item.id}>{item.content[1]}</li>
                })}

                {/* <li className="nav-item" key={idiomMenu.id}>{idiomMenu.content[1]}</li> */}
                <li className="nav-item" onClick={handleIdiomClick} key={idiomMenu.id}>{idiomMenu.content[1]}</li>

            </ul>
 
        

        </div>
        </nav>
                    {/* <Navbar       Navbar/> */}
                    <Title idiom={idiomClicked} Title/>
                </div>
            </section>

            <section className="class-section" id="experience">
                <div className="container-fluid">  
                    <Experience idiom={idiomClicked} />
                </div>
            </section>

            <section className="class-section" id="skills">
                    <Education idiom={idiomClicked} />
            </section>
            
            {/* <section className="class-section" id="contactInfo">            
                <ContactInfo idiom={idiomClicked} />
            </section> */}
            
            <footer className="class-section" id="footer">
                <Footer />

			

            </footer>
        </div>
    );
}

export default App;