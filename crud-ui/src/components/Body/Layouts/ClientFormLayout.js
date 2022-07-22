import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormButtons from "./FormButtons";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import { OutlinedInput } from "@mui/material";

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

  const AllStatesInput = (props) => {
    const allStates = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY',
    'LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA',
    'RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY']
    return(
      <FormControl sx={{width:100}} disabled={!props.disabled}>
        <InputLabel id="states-list-id">State</InputLabel>
        <Select
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
    )
  }

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
          <AllStatesInput disabled={editable}></AllStatesInput>
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
        <FormButtons formFor={formFor} cancelBtn={props.cancelForm} formMode={"client"} currObject={formValues}/>
      </Grid>
    </form>
  );
};
export default Form;