import { useState, useEffect } from "react";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import { OutlinedInput } from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const Form = (props) => {
  const currContacts = props.currContacts;
  const currClient = props.currClient;
  const readableContacts = [];
  currContacts.forEach((contact) => {
    readableContacts.push(
      `${contact.firstName} ${contact.lastName} (${contact.phone})`
    );
  });

  const [allFreeContacts, setAllFreeContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState();
  const handleInputChange = (e) => {
    const person = e.target.value;
    setSelectedContact(person);
  };

  const getAllFreeContacts = async () => {
    const response = await fetch("person/unassignedPeople");
    const data = await response.json();
    setAllFreeContacts([...data]);
  };

  //Buggy here..didn't have a lot of choice no time
  const addContactToClient = async () => {
    const settings = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const fetchResponse = await fetch(
        `person/updatePersonById?personId=${selectedContact}&clientId=${currClient.clientId}`,
        settings
      );
      await fetchResponse.json();
      window.location.reload();
    } catch (e) {
      return e;
    }
  };

  const deleteContactFromClient = async (personId) => {
    const settings = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const fetchResponse = await fetch(
        `person/deleteClientFromPersonId?personId=${personId}`,
        settings
      );
      await fetchResponse.json();
      window.location.reload();
    } catch (e) {
      return e;
    }
  };

  useEffect(() => {
    getAllFreeContacts();
  }, []);

  function BasicTable() {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Phone</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currContacts.map((contact) => (
              <TableRow
                key={contact.contactId}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {contact.firstName + " " + contact.lastName}
                </TableCell>
                <TableCell align="right">{contact.emailAddress}</TableCell>
                <TableCell align="right">{contact.phone}</TableCell>
                <TableCell align="right">
                  <Button onClick={() => deleteContactFromClient(contact.personId)}>
                    <DeleteForeverIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

  const AllFreeContactsOptions = () => {
    const allFreeContactsReadable = [];
    allFreeContacts.forEach((contact) => {
      allFreeContactsReadable.push([
        contact.personId,
        `${contact.firstName} ${contact.lastName} (${contact.phone})`,
      ]);
    });
    return (
      <FormControl sx={{ m: 1, width: 500 }}>
        <InputLabel id="company-contacts-id">Contact</InputLabel>
        <Select
          labelId="Contact"
          id="contact-id"
          name="personId"
          value={selectedContact || ""}
          onChange={handleInputChange}
          input={<OutlinedInput label="Contact Info" />}
        >
          {allFreeContactsReadable.map((contact) => (
            <MenuItem key={contact.at(0)} value={contact.at(0)}>
              {contact.at(1)}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  };

  return (
    <>
      <Box>
        <h1>{currClient.name}</h1>
        <AllFreeContactsOptions></AllFreeContactsOptions>
        <Button
          color="success"
          sx={{ mr: 5, ml: 2 }}
          variant="contained"
          onClick={() => {
            addContactToClient();
          }}
        >
          {" "}
          Add Contact
        </Button>
        <Button
          color="error"
          variant="outlined"
          onClick={() => props.openFormForClientContacts(false)}
        >
          {" "}
          Cancel
        </Button>
      </Box>
      <Box>
        {readableContacts.length === 0 ? (
          <h1>There are no contacts to show.</h1>
        ) : (
          <BasicTable />
        )}
      </Box>
    </>
  );
};
export default Form;
