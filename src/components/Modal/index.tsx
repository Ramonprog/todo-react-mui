import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";

const style = {
  position: "absolute" as "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

interface Props {
  open: boolean;
  handleClose: any;
  children: React.ReactNode;
}

const KeepMountedModal = ({ children, open, handleClose }: Props) => {
  return (
    <div>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <h2 style={{ marginBottom: "1rem" }}>Edite sua tarefa </h2>
          {children}
        </Box>
      </Modal>
    </div>
  );
};

export default KeepMountedModal;
