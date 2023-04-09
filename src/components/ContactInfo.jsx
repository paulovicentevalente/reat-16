import React, { useState , useEffect} from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import messages from "../contactInfoMessages";

function ContactInfo(props) {
   

    function isLanguage(section) {
        return section.idiom === props.idiom;
    }
    
	const names = messages.filter(isLanguage);

    const [contact, setContact] = useState({
        fName: "",
        lName: "",
        email: ""
    });

    const [contacts, setContacts] = useState([]);

    function handleAddContacts(event) {

        event.preventDefault();

        if (contact.fName !== "") {
            setContacts(prevContacts => [...prevContacts, contact]);
            alert(contact.fName + " " + names[0].alertSubscribed);
        }
        else if (contact.lName !== "") {
            setContacts(prevContacts => [...prevContacts, contact]);
            alert(contact.lName + " " + names[0].alertSubscribed);
        }
        else if (contact.email !== "") {
            setContacts(prevContacts => [...prevContacts, contact]);
            alert(contact.email + " " + names[0].alertSubscribed);
        }
        else
        alert(names[0].alertNotSubscribed);

    };

    function handleChange(event) {

        const { name, value } = event.target;

        setContact((prevValue) => {

            if (name === "firstName") {
                return {
                    fName: value,
                    lName: prevValue.lName,
                    email: prevValue.email
                };
            } else if (name === "lastName") {
                return {
                    fName: prevValue.fName,
                    lName: value,
                    email: prevValue.email
                };
            } else if(name==="e-mail"){
                return {
                    
                    fName: prevValue.fName,
                    lName: prevValue.lName,
                    email: value

                };
            }

        });

   

    }

    

    //useEffect(() => { console.log(contacts)}, [contacts]);

    return (


        <div className="container">
                
            <h3 className="big-heading" >{names[0].MessageOne[0]}{contact.fName} {contact.lName}{names[0].MessageOne[1]}</h3>

            <p>{contact.email}</p>

            <form>

                <input
                    onChange={handleChange}    
                    name="firstName"
                    value={contact.fName}
                    placeholder={names[0].fNamePlaceholder}
                />
                <input
                    onChange={handleChange}    
                    name="lastName"
                    value={contact.lName}
                    placeholder={names[0].lNamePlaceholder}               
                />
                <input
                    onChange={handleChange}    
                    name="e-mail"
                    value={contact.email}
                    placeholder="E-mail"                     
                />
                <button type="button" onClick={handleAddContacts}>{names[0].subscribe}</button>
                {names[0].MessageTwo}

            </form>

        </div>
    );
}

export default ContactInfo;