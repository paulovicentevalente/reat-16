import React from "react";
import texts from "../htmlTextsEnglish";
import photo from "./images/DSC_8193-modified.png";



function Title(props) {

    

    function isTitle(section) {
        return section.component === "Title" && (section.idiom === "any" || section.idiom === props.idiom);
    }

    const titleItem = texts.filter(isTitle);

    const [myPhoto, myMessage, myEmail] = [titleItem[0].content[1], titleItem[1].content[1], titleItem[2].content[1]];

 
    return (
        
        <div className="row">
            <div className="col-lg-4">
                {myPhoto}
            </div>
            <div className="col-lg-8">
                {myMessage}
                {myEmail}
            </div>
            </div>
           
            
    );
}
    
export default Title;