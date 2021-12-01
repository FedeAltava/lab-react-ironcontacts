
import { useState } from "react";
import "./App.css";
import data from "./contacts.json"
import Contact from "./components/Contact/Contact.js"

function App() {

  const [contacts, setContacts] = useState(data.slice(0, 5))
  const [remainingContacts, setRemainingContacts] = useState(data.slice(5, data.length))

  const addRandomContact = () => {
    const copyOfContacts = [...contacts]
    const pedro = remainingContacts[Math.floor(Math.random() * remainingContacts.length)]
    copyOfContacts.push(pedro)
    const filteredContacts = remainingContacts.filter(remainingContact => {
      return pedro.id !== remainingContact.id
    })
    setContacts(copyOfContacts)
    setRemainingContacts(filteredContacts)
  }
  const sortByName = () => {
    const copyOfContacts = [...contacts]
    copyOfContacts.sort((a, b) => {
      if (a.name > b.name) {
        return 1
      } else{
        return -1
      }
    })
 return setContacts(copyOfContacts)
  }

  const sortByPopularity = () => {
    const copyOfContacts = [...contacts]
    copyOfContacts.sort((a, b) => {
      if (a.popularity > b.popularity) {
        return 1
      } else{
        return -1
      }
    })
 return setContacts(copyOfContacts)
  }


 

  return <div className="App">
    <h1>Ironhack contacts</h1>
    
    <button onClick={() => sortByPopularity()}>Sort by popularity</button>
    <button onClick={() => sortByName()}>Sort by name</button>
    <button onClick={() => addRandomContact()}>Add random contact</button>
    <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
        </tr>
      </thead>
      <tbody>
        {/* Hacer un map del array de data, por cada persona pasarle a contact por props esa celebridad */}
        {contacts.map((contact, index) => {

          return (
            <Contact setContacts={setContacts}contactsFormAPP={contacts}contact={contact} key={index + Date.now()} />
          )

        })}
      </tbody>
    </table>
    <contact />


  </div>;
}
export default App;


