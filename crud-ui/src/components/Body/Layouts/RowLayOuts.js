import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Button from '@mui/material/Button';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

export default function getAllRows(props) {
    const rowsFor = props.rowsFor;
    const objectData = props.objectData;
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
              <TableCell align='right'> {clientMap.get(person.clientId) || "None"} </TableCell>
              <TableCell align='right'><Button><VisibilityIcon/></Button></TableCell>
              <TableCell align='left'><Button><EditIcon/></Button></TableCell>

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
              <TableCell align='right'><Button><VisibilityIcon/></Button></TableCell>
              <TableCell align='left'><Button><EditIcon/></Button></TableCell>

            </TableRow>
          )
        ))
    }
    return null;
}