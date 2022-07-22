import './App.css';
import Header from './components/Header/Header';
import ContactsTable from './components/Body/Contacts/Contacts'
import ClientsTable from './components/Body/Clients/Clients';
import {useState, useEffect} from 'react';

function App() {

  const[allClients, setAllClients] = useState([]);
  const[viewMode, setViewMode] = useState(1);

  const getAllClients = async() => {
    const response = await fetch("client/list");
    const data = await response.json();
    setAllClients(data);
  }

  useEffect(() => {
    getAllClients();
  }, [viewMode]);

  const CurrentView = () => {
    switch(viewMode) {
      case 1:
        return(
          <ClientsTable allClients={allClients}></ClientsTable>
        )
      case 2:
        return(
          <ContactsTable allClients={allClients}></ContactsTable>
        )
      case 3:
        return(
          <ContactsTable allClients={allClients}></ContactsTable>
        )
      default:
        return;
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <Header currentViewFunc={setViewMode}></Header>
        <CurrentView/>
      </header>
    </div>
  );
}

export default App;
