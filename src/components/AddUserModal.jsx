import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

export default function AddUserModal({ open, onClose, onConfirm }) {
  const [userName, setUserName] = useState('');
  const [role, setRole] = useState('viewer');
  const [active, setActive] = useState(true);
  const handleCancel = () => {
    onClose();
  }

  const handleConfirm = () => {
    onConfirm(userName, role, active)
    onClose()
  }

  return (
    <Modal
      open={open}
      onClose={handleCancel}
    >
      <Box sx={style}>
        <h2>Add new user</h2>
        <TextField
          type="user name"
          label=" User's name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          autoFocus />
        <br></br>

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}>
          <option value="viewer">viewer</option>
          <option value="editor">editor</option>
          <option value="support">support</option>
          <option value="admin">admin</option>
        </select>
        <br></br>
        <br></br>
        <Button variant="contained" color="success" onClick={handleConfirm}>
          Confirm
        </Button>
        <Button variant="outlined" onClick={handleCancel}>
            Cancel
          </Button>

      </Box>

    </Modal>
  )
}