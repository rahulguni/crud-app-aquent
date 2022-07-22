import ContactsTableLayout from "../Layouts/TableLayout";
import {useState, useEffect} from 'react';

export default function ContactsTable() {
  const [allContacts, setAllContacts] = useState([]);

  const contactsHeader = ['Last', 'First', 'Phone', 'Email', 'Company'];
  var contactRows = [];

  const getAllContacts = async () => {
    const response = await fetch("person/list");
    const data = await response.json();
    setAllContacts(data);
    console.log(data);
    contactRows = allContacts.map((contact) => {

    });
  };

  useEffect(() => {
    getAllContacts();
  },[]);
  return <ContactsTableLayout allContacts = {allContacts} allHeaders = {contactsHeader}></ContactsTableLayout>;
}
