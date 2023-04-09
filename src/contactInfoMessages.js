import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const messages = [
    {
      id: 1,
      fNamePlaceholder: "First Name",
      lNamePlaceholder: "Last Name",
      subscribe: "Subscribe",
      copy: "Copyright",
      MessageOne: ["Go ahead ", ", contact me by subscribing below,"],
      MessageTwo: (<h3 className="big-heading" >...or using Linkedin by pressing <ArrowCircleRightIcon fontSize = "medium" color="primary"/><a aria-label="Linkedin" href="https://www.linkedin.com/in/paulovicentevalente/" target="_blank"><LinkedInIcon color="primary" fontSize = "large"/></a>!</h3>),
      alertSubscribed: " is subscribed!",
      alertNotSubscribed: "Nothing was subscribed!",
      idiom: "english"
  },
  {
    id: 2,
    fNamePlaceholder: "Primeiro Nome",
    lNamePlaceholder: "Último Nome",
    subscribe: "Inscreva-se",
    copy: "Direitos Autorais",
    MessageOne: ["Vá em frente ", ", me mande uma mensagem se inscrevendo abaixo,"],
    MessageTwo: (<h3 className="big-heading" >...ou use o Linkedin pressionando <ArrowCircleRightIcon fontSize = "medium" color="primary"/><a aria-label="Linkedin" href="https://www.linkedin.com/in/paulovicentevalente/" target="_blank"><LinkedInIcon color="primary" fontSize = "large"/></a>!</h3>),
    alertSubscribed: " foi inscrito!",
    alertNotSubscribed: "Ninguém foi inscrito!",
    idiom: "portugues"
  }
  ];
  
  export default messages;