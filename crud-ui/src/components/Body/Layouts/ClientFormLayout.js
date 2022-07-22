import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormButtons from "./FormButtons";

const defaultValues = {
  clientId: "",
  name: "",
  companyURI: "",
  phone: "",
  streetAddress: "",
  city: "",
  state: "",
  zipCode: "",
};
const Form = (props) => {
  const formFor = props.formFor;
  let editable = true;
  if(formFor === "View") {
    editable = false;
  }
  const [formValues, setFormValues] = useState(props.client || defaultValues);
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
            id="clientName-input"
            name="name"
            label="Company Name"
            type="text"
            value={formValues.name}
            onChange={handleInputChange}
            sx={{mt: 3}}
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
        <FormButtons formFor={formFor} cancelBtn={props.cancelForm}/>
      </Grid>
    </form>
  );
};
export default Form;