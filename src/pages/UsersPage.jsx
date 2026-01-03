import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
export default function UsersPage() {
  const { users, removeUser } = useContext(UserContext)
  // addUser} = useContext(UserContext);

  return (
    <div>
      <h1>Users Page</h1>
      <TableContainer component={Paper}>
        <Table aria-label="user table">

          <TableHead>
            <TableRow>
              <TableCell scope="col">iD</TableCell>
              <TableCell scope="col">Name</TableCell>
              <TableCell scope="col">User Acesss</TableCell>
              <TableCell scope="col">Active</TableCell>
              <TableCell scope="col">Remove User?</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {users.map(user => (
              <TableRow key={user.name}
                sx={{}}>
                <TableCell scope="row" component="th">
                  {user.id}
                </TableCell>
                <TableCell scope="row" component="th">
                  {user.name}
                </TableCell>
                <TableCell scope="row">{user.role}</TableCell>
                <TableCell scope="row">{user.active === true ? 'Yes' : 'No'}</TableCell>
                {user.role !== "admin" ? <TableCell><button onClick={() => removeUser(user.id)}>Remove User</button></TableCell> : <TableCell> <h5> Cannot remove user</h5></TableCell>}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};