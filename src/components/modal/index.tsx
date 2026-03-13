import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";

type StyledModalProps = {
  children: React.ReactElement;
  handleClose: () => void;
  open: boolean;
  modalWidth?: number;
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export const StyledModal: React.FC<StyledModalProps> = ({
  children,
  handleClose,
  open,
  modalWidth = 500,
}) => {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={{ ...style, width: modalWidth }}>{children}</Box>
      </Fade>
    </Modal>
  );
};
