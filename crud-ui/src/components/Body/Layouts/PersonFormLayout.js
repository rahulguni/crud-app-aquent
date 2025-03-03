import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import { OutlinedInput } from "@mui/material";
import FormButtons from "./FormButtons";
import {
  validCommonField,
  validEmail,
  validPhone,
  validZIP,
} from "../Layouts/utils/formValidator";
import DialogBox from "./Popup";
import { ErrorMsg } from "./utils/DuplicateErrorMsg";

const defaultValues = {
  personId: "",
  firstName: "",
  lastName: "",
  clientId: -1,
  phone: "",
  emailAddress: "",
  streetAddress: "",
  city: "",
  state: "AL",
  zipCode: "",
};
const Form = (props) => {
  const formFor = props.formFor;
  const clientMap = props.clientMap;
  let editable = true;
  if (formFor === "View") {
    editable = false;
  }
  const [formValues, setFormValues] = useState(props.person || defaultValues);
  const [errorPopup, setErrorPopup] = useState(false);
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

  const AllStatesInput = (props) => {
    const allStates = [
      "AL",
      "AK",
      "AZ",
      "AR",
      "CA",
      "CO",
      "CT",
      "DE",
      "FL",
      "GA",
      "HI",
      "ID",
      "IL",
      "IN",
      "IA",
      "KS",
      "KY",
      "LA",
      "ME",
      "MD",
      "MA",
      "MI",
      "MN",
      "MS",
      "MO",
      "MT",
      "NE",
      "NV",
      "NH",
      "NJ",
      "NM",
      "NY",
      "NC",
      "ND",
      "OH",
      "OK",
      "OR",
      "PA",
      "RI",
      "SC",
      "SD",
      "TN",
      "TX",
      "UT",
      "VT",
      "VA",
      "WA",
      "WV",
      "WI",
      "WY",
    ];
    return (
      <FormControl sx={{ width: 100 }} disabled={!props.disabled}>
        <InputLabel id="states-list-id">State</InputLabel>
        <Select
          defaultValue={allStates[0]}
          labelId="State"
          id="state-id"
          name="state"
          value={formValues.state}
          onChange={handleInputChange}
          input={<OutlinedInput label="Client" />}
        >
          {allStates.map((state, val) => (
            <MenuItem key={val} value={state}>
              {state}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  };

  return (
    <>
      <DialogBox
        openPopup={errorPopup}
        setOpenPopup={setErrorPopup}
        title={`Error saving ${formValues.firstName} ${formValues.lastName}.`}
      >
        <ErrorMsg forPerson={true} disMiss={setErrorPopup} />
      </DialogBox>
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
              error={!validCommonField(formValues.firstName)}
              id="firstName-input"
              name="firstName"
              label="First Name"
              type="text"
              value={formValues.firstName}
              onChange={handleInputChange}
              sx={{ mt: 3 }}
              disabled={!editable}
            />
            <TextField
              error={!validCommonField(formValues.lastName)}
              id="lastName-input"
              name="lastName"
              label="Last Name"
              type="text"
              value={formValues.lastName}
              onChange={handleInputChange}
              sx={{ ml: 5, mt: 3 }}
              disabled={!editable}
            />
          </Grid>
          <Grid item>
            <TextField
              error={!validPhone(formValues.phone)}
              id="phone-input"
              name="phone"
              label="Phone"
              type="text"
              value={formValues.phone}
              onChange={handleInputChange}
              disabled={!editable}
            />
            <TextField
              error={!validEmail(formValues.emailAddress)}
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
              error={!validCommonField(formValues.streetAddress)}
              id="street-address-input"
              name="streetAddress"
              label="Street Address"
              type="text"
              value={formValues.streetAddress}
              onChange={handleInputChange}
              disabled={!editable}
            />
            <TextField
              error={!validCommonField(formValues.city)}
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
            <AllStatesInput disabled={editable}></AllStatesInput>
            <TextField
              error={!validZIP(formValues.zipCode)}
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
            <AllClientsInput disabled={editable} />
          </Grid>
          <FormButtons
            formFor={formFor}
            openErrorPopup={setErrorPopup}
            cancelBtn={props.cancelForm}
            formMode={"person"}
            currObject={formValues}
            setAllTableObjects={props.setAllTableObjects}
            updateTableObjects={props.updateTableObjects}
            removeTableObjects={props.removeTableObjects}
          />
        </Grid>
      </form>
    </>
  );
};
export default Form;
