import ContactsTableLayout from "../Layouts/TableLayout";
import {useState, useEffect} from 'react';

export default function ContactsTable(props) {
  const allClients = props.allClients;

  //Pass this map to render Company name for people
  let clientMap = new Map();
  for(const client of allClients) {
    clientMap.set(client.clientId, client.name);
  }

  const [allContacts, setAllContacts] = useState([]);
  const contactsHeader = ['Last', 'First', 'Phone', 'Email', 'Company'];

  const getAllContacts = async () => {
    const response = await fetch("person/list");
    const data = await response.json();
    setAllContacts(data);
  };

  useEffect(() => {
    getAllContacts();
  },[]);
  return <ContactsTableLayout allContacts = {allContacts}
   allHeaders = {contactsHeader} clientMap={clientMap} tableFor="Contacts">
   </ContactsTableLayout>;
}
