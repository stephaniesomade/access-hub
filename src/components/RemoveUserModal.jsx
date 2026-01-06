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
export default function RemoveUserModal({ user, open, onClose, onConfirm }) {
  const [passwordInput, setPasswordInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleConfirm = () => {
    const adminPassword = "admin123" // replace with secure logic later

    if (passwordInput === adminPassword) {
      onConfirm(user.id);
      setPasswordInput('');
      setErrorMessage('');
      onClose();
    } else {
      setErrorMessage("This password is incorrect.")
    }
  }

  const handleCancel = () => {
    setPasswordInput('');
    setErrorMessage('');
    onClose();
  }

  if (!user) return null;

  return (
    <Modal
      open={open}
      onClose={handleCancel}
      aria-labelledby="user-modal"
      aria-describedby="user-removal-modal"
    >
      <Box sx={style}>
        <h2>Remove {user.name}?</h2>
        <TextField
          type="password"
          label="Admin Password"
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
          autoFocus />

        {errorMessage && <span style={{ color: 'red' }}>{errorMessage}</span>}

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
          <Button variant="contained" color="error" onClick={handleConfirm}>
            Confirm
          </Button>
          <Button variant="outlined" onClick={handleCancel}>
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  )
}
