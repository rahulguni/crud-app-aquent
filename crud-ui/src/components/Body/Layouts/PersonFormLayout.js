import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import { OutlinedInput } from "@mui/material";
import FormButtons from "./FormButtons";

const defaultValues = {
  personId: "",
  firstName: "",
  lastName: "",
  clientId: -1,
  phone: "",
  emailAddress: "",
  streetAddress: "",
  city: "",
  state: "",
  zipCode: "",
};
const Form = (props) => {
  const formFor = props.formFor;
  const clientMap = props.clientMap;
  let editable = true;
  if(formFor === "View") {
    editable = false;
  }
  const [formValues, setFormValues] = useState(props.person || defaultValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const AllClientsInput = (props) => {
    const allClientsArr = [];
    clientMap.forEach((value, key) => {
      allClientsArr.push([key, value]);
    });
    return (
      <FormControl sx={{ m: 1, width: 300 }} disabled={!props.disabled}>
        <InputLabel id="company-client-id">Client</InputLabel>
        <Select
          labelId="Client"
          id="client-id"
          name="clientId"
          value={formValues.clientId}
          onChange={handleInputChange}
          input={<OutlinedInput label="Client" />}
        >
          {allClientsArr.map((client) => (
            <MenuItem key={client.at(0)} value={client.at(0)}>
              {client.at(1)}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        alignItems="center"
        justify="center"
        direction="column"
        spacing={2}
      >
        <Grid item>
          <TextField
            id="firstName-input"
            name="firstName"
            label="First Name"
            type="text"
            value={formValues.firstName}
            onChange={handleInputChange}
            sx={{mt: 3}}
            disabled={!editable}
          />
          <TextField
            id="lastName-input"
            name="lastName"
            label="Last Name"
            type="text"
            value={formValues.lastName}
            onChange={handleInputChange}
            sx={{ ml: 5 , mt: 3}}
            disabled={!editable}
          />
        </Grid>
        <Grid item>
          <TextField
            id="phone-input"
            name="phone"
            label="Phone"
            type="text"
            value={formValues.phone}
            onChange={handleInputChange}
            disabled={!editable}
          />
          <TextField
            id="email-input"
            name="emailAddress"
            label="Email"
            type="text"
            value={formValues.emailAddress}
            onChange={handleInputChange}
            sx={{ ml: 5 }}
            disabled={!editable}
          />
        </Grid>
        <Grid item>
          <TextField
            id="street-address-input"
            name="streetAddress"
            label="Street Address"
            type="text"
            value={formValues.streetAddress}
            onChange={handleInputChange}
            disabled={!editable}
          />
          <TextField
            id="city-input"
            name="city"
            label="City"
            type="text"
            value={formValues.city}
            onChange={handleInputChange}
            sx={{ ml: 5 }}
            disabled={!editable}
          />
        </Grid>
        <Grid item>
          <TextField
            id="state-input"
            name="state"
            label="State"
            type="text"
            value={formValues.state}
            onChange={handleInputChange}
            disabled={!editable}
          />
          <TextField
            id="zipCode-input"
            name="zipCode"
            label="Zip Code"
            type="text"
            value={formValues.zipCode}
            onChange={handleInputChange}
            sx={{ ml: 5 }}
            disabled={!editable}
          />
        </Grid>
        <Grid item>
          <AllClientsInput disabled={editable}/>
        </Grid>
        <FormButtons formFor={formFor} cancelBtn={props.cancelForm}/>
      </Grid>
    </form>
  );
};
export default Form;
