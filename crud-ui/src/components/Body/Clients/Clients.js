import ClientsTableLayout from '../Layouts/TableLayout';
import {useState, useEffect} from 'react';
import DialogBox from '../Layouts/Popup';
import ClientForm from '../Layouts/ClientFormLayout';

export default function ClientsTable(props){
    const allClients = props.allClients;
    const [openPopup, setOpenPopup] = useState(false);
    const allHeaders = ['Company Name', 'Website', 'Phone'];

    return(
        <>
        <DialogBox openPopup={openPopup} setOpenPopup={setOpenPopup} title="Add New Client">
            <ClientForm formFor="Create" cancelForm={setOpenPopup}></ClientForm>
        </DialogBox>
        <ClientsTableLayout allHeaders={allHeaders}
         allClients={allClients} 
         tableFor="Clients"
         openForm={setOpenPopup}>
         </ClientsTableLayout>
        </>
    )
}