import './App.css';
import Header from './components/Header/Header';
import ContactsTable from './components/Body/Contacts/Contacts'
import ClientsTable from './components/Body/Clients/Clients';
import {useState, useEffect} from 'react';

function App() {

  const[allClients, setAllClients] = useState([]);

  const getAllClients = async() => {
    const response = await fetch("client/list");
    const data = await response.json();
    setAllClients(data);
  }

  useEffect(() => {
    getAllClients();
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
        {/* <ContactsTable allClients={allClients}></ContactsTable> */}
        <ClientsTable allClients={allClients}></ClientsTable>
      </header>
    </div>
  );
}

export default App;
