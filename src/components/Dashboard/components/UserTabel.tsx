import React, { FC } from 'react';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

import { UserTabelProps } from '../interface';

type ValueType = string | undefined;

const createData = (name: ValueType, value: ValueType) => {
  return { name, value };
};

const UserTabel: FC<UserTabelProps> = ({ signedInUser }) => {
  const rows = [
    createData('first Name', signedInUser?.firstName),
    createData('Last Name', signedInUser?.lastName),
    createData('Email', signedInUser?.email),
  ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: '100%' }} aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="right">{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserTabel;
