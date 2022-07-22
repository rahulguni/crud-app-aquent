import ClientsTableLayout from '../Layouts/TableLayout';
import {useState} from 'react';
import DialogBox from '../Layouts/Popup';
import ClientForm from '../Layouts/ClientFormLayout';

export default function ClientsTable(props){
    const allClients = props.allClients;
    const [openPopup, setOpenPopup] = useState(false);
    const [currClient, setCurrClient] = useState();
    const [formFor, setFormFor] = useState("Create");
    const allHeaders = ['Company Name', 'Website', 'Phone'];

    return(
        <>
        <DialogBox openPopup={openPopup} setOpenPopup={setOpenPopup} title={((currClient) ? "Edit" : "Create New") + " Client"}>
            <ClientForm formFor={formFor} cancelForm={setOpenPopup} client={currClient}></ClientForm>
        </DialogBox>
        <ClientsTableLayout allHeaders={allHeaders}
         allClients={allClients} 
         tableFor="Clients"
         openForm={setOpenPopup}
         setCurrObject={setCurrClient}
         setFormFor={setFormFor}>
         </ClientsTableLayout>
        </>
    )
}