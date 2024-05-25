import * as React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'

export default function CommonModal({
  open,
  setOpen,
  body = <></>,
  title = 'Add Address',
}) {
  const handleClose = () => setOpen(false)

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    borderRadius: 2,
    p: 3,
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <div className="text-center mb-3 text-[20px] font-bold">{title}</div>
          {body}
        </Box>
      </Modal>
    </div>
  )
}
