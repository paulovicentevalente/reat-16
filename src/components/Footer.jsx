import React from "react";
import messages from "../contactInfoMessages";


function Footer(props) {

  // function isLanguage(section) {
  //   return section.idiom === props.idiom;
  // }

  // const copy = messages.filter(isLanguage);

  // console.log(copy);

  const year = new Date().getFullYear();

  return (
    <footer>
      <p>Copyrgiht ⓒ {year}</p>
    </footer>
  );
  }
    
export default Footer;