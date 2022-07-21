import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Button from '@mui/material/Button';


export default function BasicTable(props) {
  const allPeople = props.allContacts;
  const allHeaders = props.allHeaders;
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {
            allHeaders.map((currHeader, idx) => {
              if(idx === 0) {
                return <TableCell>{currHeader} </TableCell>
              }
              return <TableCell align="right">{currHeader}</TableCell>
            })
          }
          <TableCell align='center' colSpan={2}> Actions </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allPeople.map((person) => (
            <TableRow
              key={person.personId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {person.lastName}
              </TableCell>
              <TableCell align='right'>{person.firstName}</TableCell>
              <TableCell align='right'> xxx-xxx-xxxx</TableCell>
              <TableCell align="right">{person.emailAddress}</TableCell>
              <TableCell align='right'> xxx Company </TableCell>
              <TableCell align='right'><Button><VisibilityIcon/></Button></TableCell>
              <TableCell align='left'><Button><EditIcon/></Button></TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
