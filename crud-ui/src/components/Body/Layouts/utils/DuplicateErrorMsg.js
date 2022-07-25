import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export const ErrorMsg = (props) => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom component="div">
        {props.forPerson
          ? "Error saving person. Make sure the email and phone numbers do not match with other contacts."
          : "Error saving client. Make sure phone number and website URL do not match with other clients"}
      </Typography>
      <Button
        variant="contained"
        color="success"
        onClick={() => props.disMiss(false)}
      >
        OK
      </Button>
    </Box>
  );
};
