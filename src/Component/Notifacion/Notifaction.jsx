import * as React from 'react';
import Modal from '@mui/material/Modal';
export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const modalStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    border: '2px solid black',
    boxShadow: 24,
    p: 4,
  };
  return (
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div style={modalStyle}>
          <h2 id="modal-modal-title">dasdbahdbmnb</h2>
          <p id="modal-modal-description">das</p>
        </div>
      </Modal>
  );
}

