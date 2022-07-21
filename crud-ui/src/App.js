import './App.css';
import Header from './components/Header/Header';
import ContactsTable from './components/Body/Contacts/Contacts'
import {useState, useEffect} from 'react';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
        <ContactsTable></ContactsTable>
      </header>
    </div>
  );
}

export default App;
