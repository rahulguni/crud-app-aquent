import ClientsTableLayout from "../Layouts/TableLayout";
import { useEffect, useState } from "react";
import DialogBox from "../Layouts/Popup";
import ClientForm from "../Layouts/ClientFormLayout";
import ClientContactsForm from "../Layouts/ClientContactsForm";

export default function ClientsTable(props) {
  const allClients = props.allClients;
  const [openPopup, setOpenPopup] = useState(false);
  const [openPeoplePopup, setOpenPeoplePopup] = useState(false);
  const [currClient, setCurrClient] = useState();
  const [currClientContacts, setCurrClientContacts] = useState([]);
  const [formFor, setFormFor] = useState("Create");
  const allHeaders = ["Company Name", "Website", "Phone"];


  const getAllClientContacts = async() => {
    const response = await fetch(`person/listForClient?clientId=${currClient.clientId}`);
    const data = await response.json();
    setCurrClientContacts([...data]);
  }

  useEffect(() => {
    if(currClient) {
        getAllClientContacts()
    }
  }, [currClient]);

  return (
    <>
      <DialogBox
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        title={(currClient ? "Edit" : "Create New") + " Client"}
      >
        <ClientForm
          formFor={formFor}
          cancelForm={setOpenPopup}
          client={currClient}
        ></ClientForm>
      </DialogBox>

      <DialogBox openPopup={openPeoplePopup} setOpenPopup={setOpenPeoplePopup}>
        <ClientContactsForm currContacts={currClientContacts} currClient={currClient} openFormForClientContacts={setOpenPeoplePopup}> </ClientContactsForm>
      </DialogBox>
      <ClientsTableLayout
        allHeaders={allHeaders}
        allClients={allClients}
        tableFor="Clients"
        openForm={setOpenPopup}
        setCurrObject={setCurrClient}
        setFormFor={setFormFor}
        openFormForClientContacts={setOpenPeoplePopup}
      ></ClientsTableLayout>
    </>
  );
}
