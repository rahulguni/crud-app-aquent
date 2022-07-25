import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormButtons from "./FormButtons";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import { OutlinedInput } from "@mui/material";
import {
  validCommonField,
  validPhone,
  validZIP,
  validURI,
} from "../Layouts/utils/formValidator";
import DialogBox from "./Popup";
import { ErrorMsg } from "./utils/DuplicateErrorMsg";

const defaultValues = {
  clientId: "",
  name: "",
  companyURI: "",
  phone: "",
  streetAddress: "",
  city: "",
  state: "AL",
  zipCode: "",
};
const Form = (props) => {
  const formFor = props.formFor;
  let editable = true;
  if (formFor === "View") {
    editable = false;
  }
  const [formValues, setFormValues] = useState(props.client || defaultValues);
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
          defaultValue={"AL"}
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
        title={`Error saving ${formValues.name}.`}
      >
        <ErrorMsg forPerson={false} disMiss={setErrorPopup} />
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
              error={!validCommonField(formValues.name)}
              id="clientName-input"
              name="name"
              label="Company Name"
              type="text"
              value={formValues.name}
              onChange={handleInputChange}
              sx={{ mt: 3 }}
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
              error={!validURI(formValues.companyURI)}
              id="companyURI-input"
              name="companyURI"
              label="Website"
              type="text"
              value={formValues.companyURI}
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
          <FormButtons
            openErrorPopup={setErrorPopup}
            formFor={formFor}
            cancelBtn={props.cancelForm}
            formMode={"client"}
            currObject={formValues}
          />
        </Grid>
      </form>
    </>
  );
};
export default Form;
