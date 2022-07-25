import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import {
  enablePersonFormButtons,
  enableClientsFormButtons,
} from "../Layouts/utils/formValidator";
import {
  createPerson,
  updatePerson,
  removeContact,
  createClient,
  updateClient,
  deleteClient,
} from "../../Requests/Services";

const AllButtons = (props) => {
  const formFor = props.formFor;
  var enableButton;
  if (props.formMode === "person") {
    enableButton = enablePersonFormButtons(props.currObject);
  } else {
    enableButton = enableClientsFormButtons(props.currObject);
  }

  if (formFor === "Create") {
    return (
      <Grid item>
        <Button
          disabled={!enableButton}
          sx={{ m: 3 }}
          variant="contained"
          color="success"
          type="submit"
          onClick={() =>
            props.formMode === "person"
              ? createPerson(
                  props.currObject,
                  props.cancelBtn,
                  props.setAllTableObjects,
                  props.openErrorPopup
                )
              : createClient(props.currObject, props.openErrorPopup)
          }
        >
          Create
        </Button>
        <Button
          sx={{ m: 3 }}
          variant="outlined"
          type="submit"
          onClick={() => props.cancelBtn(false)}
        >
          Cancel
        </Button>
      </Grid>
    );
  } else if (formFor === "Edit") {
    return (
      <Grid item>
        <Button
          sx={{ m: 3 }}
          variant="contained"
          color="error"
          type="submit"
          onClick={() =>
            props.formMode === "person"
              ? removeContact(
                  props.currObject,
                  props.cancelBtn,
                  props.removeTableObjects
                )
              : deleteClient(props.currObject)
          }
        >
          Delete
        </Button>
        <Button
          disabled={!enableButton}
          sx={{ m: 3 }}
          variant="contained"
          color="success"
          type="submit"
          onClick={() =>
            props.formMode === "person"
              ? updatePerson(
                  props.currObject,
                  props.cancelBtn,
                  props.updateTableObjects,
                  props.openErrorPopup
                )
              : updateClient(props.currObject, props.openErrorPopup)
          }
        >
          Update
        </Button>
        <Button
          sx={{ m: 3 }}
          variant="outlined"
          type="submit"
          onClick={() => props.cancelBtn(false)}
        >
          Cancel
        </Button>
      </Grid>
    );
  } else {
    return (
      <Button
        sx={{ m: 3 }}
        variant="outlined"
        type="submit"
        onClick={() => props.cancelBtn(false)}
      >
        Cancel
      </Button>
    );
  }
};

export default AllButtons;
