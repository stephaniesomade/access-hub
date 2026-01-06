import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import RemoveUserModal from "../components/RemoveUserModal";
import AddUserModal from "../components/AddUserModal";
import { filterUsers } from "../utils/filterUsers";
import { Button } from "@mui/material";
export default function UsersPage() {
  const { users, removeUser, addUser, toggleActive } = useContext(UserContext);

  const [isRemoveUserModalOpen, setRemoveUserModalOpen] = useState(false);
  const [isAddUserModalOpen, setAddUserModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');

  const displayedUsers = filterUsers(users, { searchQuery, roleFilter, sortField, sortOrder })

  return (
    <div>
      <h1>Users Page</h1>
      {/* Controls for filtering */}
      <input type="text" placeholder="Search by name" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />

      <select value={roleFilter} onChange={e => setRoleFilter(e.target.value)}>
        <option value="all">All Roles</option>
        <option value="admin">Admin</option>
        <option value="viewer">Viewer</option>
        <option value="editor">Editor</option>
      </select>

      <TableContainer component={Paper}>
        <Table aria-label="user management table">
          <caption>List of users, roles, active status and actions</caption>
          <TableHead>
            <TableRow>
              <TableCell scope="col" onClick={() => { setSortField('id'); setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'); }}>ID</TableCell>
              <TableCell scope="col" onClick={() => { setSortField('name'); setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'); }}>Name</TableCell>
              <TableCell scope="col">Role</TableCell>
              <TableCell scope="col">Active</TableCell>
              <TableCell scope="col">Remove User?</TableCell>
              <TableCell scope="col">Deactivate User?</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {displayedUsers.map(user => (
              <TableRow key={user.id}>
                <TableCell scope="row">{user.id}</TableCell>
                <TableCell scope="row">{user.name}</TableCell>
                <TableCell scope="row">{user.role}</TableCell>
                <TableCell scope="row">{user.active ? 'Yes' : 'No'}</TableCell>
                {user.role !== "admin" ? (
                  <TableCell scope="row">
                    <Button
                      variant="contained"
                      color="error"
                      aria-label="Open Remove user modal"
                      onClick={() => { setRemoveUserModalOpen(true); setSelectedUser(user); }}
                    >
                      Remove User
                    </Button>
                  </TableCell>
                ) : (
                  <TableCell scope="row"><span>Cannot remove user</span></TableCell>
                )}

                <TableCell scope="row">
                  {user.role !== 'admin' ? (
                    <Button
                      variant="contained"
                      color={user.active ? "warning" : "success"}
                      aria-label={`Toggle user activity for ${user.name}`}
                      onClick={() => toggleActive(user.id)}>
                      {user.active ? "Deactivate User" : "Reactivate User"}
                    </Button>
                  ) : (
                    "Cannot change admin status"
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Button color="success" onClick={() => { setAddUserModalOpen(true) }}>Click to Add New User</Button>

      {/* Modals */}
      {isAddUserModalOpen && (
        <AddUserModal
          open={isAddUserModalOpen}
          onClose={() => setAddUserModalOpen(false)}
          onConfirm={addUser}
        />
      )}

      {isRemoveUserModalOpen && (
        <RemoveUserModal
          open={isRemoveUserModalOpen}
          user={selectedUser}
          onClose={() => setRemoveUserModalOpen(false)}
          onConfirm={removeUser}
        />
      )}
    </div>
  );
};
