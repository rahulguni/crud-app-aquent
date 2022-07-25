import { validForm, validRequest } from "../Body/Layouts/utils/formValidator";

export const createPerson = async (
  person,
  openPopUp,
  refreshContacts,
  openErrorPopUp
) => {
  delete person.personId;
  if (validForm(person)) {
    const settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(person),
    };
    try {
      const fetchResponse = await fetch("person/create", settings);
      if (validRequest(fetchResponse)) {
        const data = await fetchResponse.json();
        person.personId = parseInt(data);
        openPopUp(false);
        refreshContacts(person);
      } else {
        openErrorPopUp(true);
      }
    } catch (e) {
      return e;
    }
  }
};

export const updatePerson = async (
  person,
  openPopUp,
  updateContacts,
  openErrorPopUp
) => {
  if (validForm(person)) {
    const settings = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(person),
    };
    try {
      const fetchResponse = await fetch("person/edit", settings);
      if (validRequest(fetchResponse)) {
        await fetchResponse.json();
        openPopUp(false);
        updateContacts(person);
      } else {
        openErrorPopUp(true);
      }
    } catch (e) {
      return e;
    }
  }
};

export const removeContact = async (person, openPopUp, removeContacts) => {
  const settings = {
    method: "DELETE",
  };
  try {
    const fetchResponse = await fetch(
      `person/delete?personId=${person.personId}`,
      settings
    );
    await fetchResponse.json();
    openPopUp(false);
    removeContacts(person);
  } catch (e) {
    return e;
  }
};

export const createClient = async (client, openErrorPopUp) => {
  delete client.clientId;
  if (validForm(client)) {
    const settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(client),
    };
    try {
      const fetchResponse = await fetch("client/create", settings);
      if (validRequest(fetchResponse)) {
        await fetchResponse.json();
        window.location.reload();
      } else {
        openErrorPopUp(true);
      }
    } catch (e) {
      return e;
    }
  }
};

export const updateClient = async (client, openErrorPopUp) => {
  if (validForm(client)) {
    const settings = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(client),
    };
    try {
      const fetchResponse = await fetch("client/edit", settings);
      if (validRequest(fetchResponse)) {
        await fetchResponse.json();
        window.location.reload();
      } else {
        openErrorPopUp(true);
      }
    } catch (e) {
      return e;
    }
  }
};

export const deleteClient = async (client) => {
  const settings = {
    method: "DELETE",
  };
  try {
    const fetchResponse = await fetch(
      `client/delete?clientId=${client.clientId}`,
      settings
    );
    await fetchResponse.json();
    window.location.reload();
  } catch (e) {
    return e;
  }
};
