export const createPerson = async (person, openPopUp, refreshContacts) => {
    delete person.personId;
    const settings = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(person)
    };
    try {
      const fetchResponse = await fetch('person/create', settings);
      const data = await fetchResponse.json();
      person.personId = parseInt(data);
      openPopUp(false);
      refreshContacts(person);
    } catch (e) {
      return e;
    }    
}

export const updatePerson = async(person, openPopUp, updateContacts) => {
    const settings = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(person)
    };
    try {
        const fetchResponse = await fetch('person/edit', settings);
        const data = await fetchResponse.json();
        openPopUp(false);
        updateContacts(person);
    }
    catch(e) {
        return e;
    }
}

export const removeContact = async(person, openPopUp, removeContacts) => {
    const settings = {
        method: 'DELETE'
    };
    try {
        const fetchResponse = await fetch(`person/delete?personId=${person.personId}`, settings);
        const data = await fetchResponse.json();
        openPopUp(false);
        removeContacts(person);
    }
    catch(e) {
        return e;
    }
}