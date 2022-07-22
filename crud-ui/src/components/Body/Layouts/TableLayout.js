import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import RowLayouts from './RowLayOuts'

export default function BasicTable(props) {
  const allHeaders = props.allHeaders;
  const tableFor = props.tableFor;
  const clientMap = props.clientMap;

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
          <RowLayouts rowsFor={tableFor} objectData={props.allContacts || props.allClients}
          clientMap={clientMap}>
          </RowLayouts>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
