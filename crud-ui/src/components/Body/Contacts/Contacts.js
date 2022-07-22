import ContactsTableLayout from "../Layouts/TableLayout";
import {useState, useEffect} from 'react';
import DialogBox from '../Layouts/Popup'
import PersonForm from '../Layouts/PersonFormLayout'

export default function ContactsTable(props) {
  const allClients = props.allClients;
  const [openPopup, setOpenPopup] = useState(false);
  const [currPerson, setCurrPerson] = useState();
  const [formFor, setFormFor] = useState("Create");

  //Pass this map to render Company name for people
  let clientMap = new Map().set(-1, "None");
  for(const client of allClients) {
    clientMap.set(client.clientId, client.name);
  }

  const [allContacts, setAllContacts] = useState([]);
  const contactsHeader = ['Last', 'First', 'Phone', 'Email', 'Company'];

  const getAllContacts = async () => {
    const response = await fetch("person/list");
    const data = await response.json();
    setAllContacts([...data]);
  };

  const addContact = (person) => {
    setAllContacts([person, ...allContacts]);
  }

  const updateContact = (person) => {
    const newState = allContacts.map(obj => {
      if(obj.personId === person.personId) {
        return {...person};
      }
      return obj;
    });
    setAllContacts([...newState]);
  }

  const removeContact = (person) => {
    const newState = [];
    allContacts.forEach(contact => {
      if(contact.personId !== person.personId) {
        newState.push(contact);
      }
    })
    setAllContacts([...newState]);
  }

  useEffect(() => {
    getAllContacts();
  },[]);

  return (
    <>
    <DialogBox openPopup={openPopup} setOpenPopup={setOpenPopup} title={((currPerson) ? "Edit" : "Create New") + " Person"}>
      <PersonForm clientMap={clientMap}
       formFor={formFor} 
       cancelForm={setOpenPopup} 
       person={currPerson} 
       setAllTableObjects={addContact}
       updateTableObjects={updateContact}
       removeTableObjects={removeContact}></PersonForm>
    </DialogBox>
    <ContactsTableLayout allContacts = {allContacts}
      allHeaders = {contactsHeader} 
      clientMap={clientMap} 
      openForm={setOpenPopup}
      tableFor="Contacts"
      setCurrObject={setCurrPerson}
      setFormFor={setFormFor}>
    </ContactsTableLayout>
    </>
   );
}
