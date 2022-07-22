import ClientsTableLayout from '../Layouts/TableLayout';
import {useState, useEffect} from 'react';

export default function ClientsTable(props){
    const allClients = props.allClients;
    const allHeaders = ['Company Name', 'Website', 'Phone'];

    return(
        <ClientsTableLayout allHeaders={allHeaders} allClients={allClients} tableFor="Clients"></ClientsTableLayout>
    )
}