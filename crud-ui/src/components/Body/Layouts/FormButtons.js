import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid"

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
          >
            Delete
          </Button>
          <Button
            sx={{ m: 3 }}
            variant="contained"
            color="success"
            type="submit"
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