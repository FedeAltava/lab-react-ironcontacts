import { useState } from "react";
import './Contact.styles.css'
 const Contact =(props)=>{

const {contact, index,contactsFormAPP,setContacts}=props

const deleteContanct = (contactsId ) =>{
    const filteredContacts = contactsFormAPP.filter((contacts)=>{

      return contactsId !== contacts.id



    })
    setContacts(filteredContacts)


  }
return(
    <tr>
    <td><img src={contact.pictureUrl}></img></td>
    <td>{contact.name}</td>
    <td>{Math.round(contact.popularity)}</td>
    <td>{contact.wonOscar === true ? "🏆 " : ""}</td>
    <td>{contact.wonEmmy === true ? "🏆 " : ""}</td>
    <td><button onClick={() => deleteContanct(contact.id)}>Delete</button></td>
  </tr>
)

}

export default Contact;
