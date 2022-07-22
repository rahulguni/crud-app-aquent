import ContactsTableLayout from "../Layouts/TableLayout";
import {useState, useEffect} from 'react';
import DialogBox from '../Layouts/Popup'
import PersonForm from '../Layouts/PersonFormLayout'

export default function ContactsTable(props) {
  const allClients = props.allClients;
  const [openPopup, setOpenPopup] = useState(false);

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

  useEffect(() => {
    getAllContacts();
  },[]);

  return (
    <>
    <DialogBox openPopup={openPopup} setOpenPopup={setOpenPopup} title="Add New Person">
      <PersonForm clientMap={clientMap} formFor="Create" cancelForm={setOpenPopup}></PersonForm>
    </DialogBox>
    <ContactsTableLayout allContacts = {allContacts}
      allHeaders = {contactsHeader} 
      clientMap={clientMap} 
      openForm={setOpenPopup}
      tableFor="Contacts">
    </ContactsTableLayout>
    </>
   );
}
