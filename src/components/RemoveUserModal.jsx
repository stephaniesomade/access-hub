// create new component 
// should not call remove User directly
// only handles password input/confirm or cancel actions 
// props: isOpen, onConfirm, onCancel, userName
// should not own the logic but just report event upwards
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}
export default function UserModal({ user, open, onClose }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="user-modal"
      aria-describedby="user-removal-modal"
    >

      <Box sx={style}>
        <Typography id="remove-user-modal" variant="h6" component="h2">
          Are you sure you wish to remove {user.name} permanently?
        </Typography>
        <Typography id="remove-user-description" sx={{ mt: 2 }}>
          {/* <div>
        {user ? `Remove ${user.name}?` : 'No user selected'}
      </div> */}
        </Typography>
      </Box>
    </Modal>
  )
}
