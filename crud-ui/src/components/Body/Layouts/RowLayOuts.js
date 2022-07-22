import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Button from '@mui/material/Button';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

export default function getAllRows(props) {
    const rowsFor = props.rowsFor;
    const objectData = props.objectData;
    const setCurrObject = props.setCurrObject;
    const openForm = props.openForm;
    const setFormFor = props.setFormFor;
    const clientMap = props.clientMap;

    if(rowsFor === "Contacts") {
       return (objectData.map(person => (
            <TableRow
              key={person.personId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {person.lastName}
              </TableCell>
              <TableCell align='right'>{person.firstName}</TableCell>
              <TableCell align='right'> {person.phone}</TableCell>
              <TableCell align="right">{person.emailAddress}</TableCell>
              <TableCell align='right'> {clientMap.get(person.clientId)} </TableCell>
              <TableCell align='right'><Button onClick={() => {
                setFormFor("View");
                setCurrObject(person);
                openForm(true);
              }}><VisibilityIcon/></Button></TableCell>
              <TableCell align='left'><Button onClick={() => {
                setFormFor("Edit");
                setCurrObject(person);
                openForm(true);
              }}><EditIcon/></Button></TableCell>

            </TableRow>
          )
        ))
    }
    else if(rowsFor === "Clients") {
        return (objectData.map(client => (
            <TableRow
              key={client.clientId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {client.name}
              </TableCell>
              <TableCell align='right'>{client.companyURI}</TableCell>
              <TableCell align='right'> {client.phone}</TableCell>
              <TableCell align='center'>
              <Button onClick={() => {
                setFormFor("View");
                setCurrObject(client);
                openForm(true);
              }}><VisibilityIcon/></Button>
                <Button onClick={() => {
                setFormFor("Edit");
                setCurrObject(client);
                openForm(true);
              }}><EditIcon/></Button>
                <Button onClick={() => {
                    setCurrObject(client);
                    props.openFormForClientContacts(true);
                }}><PeopleAltIcon/></Button>
                </TableCell>

            </TableRow>
          )
        ))
    }
    return null;
}