import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import {createPerson, updatePerson, removeContact} from '../../Requests/Services';

const AllButtons = (props) => {
    const formFor = props.formFor;
    if(formFor === "Create") {
        return(
        <Grid item>
          <Button
            sx={{ m: 3 }}
            variant="contained"
            color="success"
            type="submit"
            onClick={() => (props.formMode === 'person') ? createPerson(props.currObject, props.cancelBtn, props.setAllTableObjects) : null}
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
        )
    }
    else if (formFor === "Edit") {
        return (
        <Grid item>
          <Button
            sx={{ m: 3 }}
            variant="contained"
            color="error"
            type="submit"
            onClick={() => (props.formMode === 'person') ? removeContact(props.currObject, props.cancelBtn, props.removeTableObjects): null}
          >
            Delete
          </Button>
          <Button
            sx={{ m: 3 }}
            variant="contained"
            color="success"
            type="submit"
            onClick={() => (props.formMode === 'person') ? updatePerson(props.currObject, props.cancelBtn, props.updateTableObjects): null}
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
        )
    }
    else {
        return (
            <Button
            sx={{ m: 3 }}
            variant="outlined"
            type="submit"
            onClick={() => props.cancelBtn(false)}
          >
            Cancel
          </Button>
        )
    }
  }

export default AllButtons;