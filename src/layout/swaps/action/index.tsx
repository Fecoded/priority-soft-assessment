import { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import { StyledModal } from "@src/components/modal";
import { useAcceptSwapMutation, useRejectSwapMutation } from "@src/store/apis";
import { NotificationAlert } from "@src/components";
import { SwapRequestData } from "../utils";

type SwapRequestActionModalProps = {
  open: boolean;
  handleClose: () => void;
  swapRequestData: SwapRequestData;
};

export const SwapRequestActionModal = ({
  open,
  handleClose,
  swapRequestData,
}: SwapRequestActionModalProps) => {
  const [type, setType] = useState<"success" | "error">();
  const [openNotifcation, setOpenNotification] = useState(false);
  const [message, setMessage] = useState("");

  const {
    mutateAsync: acceptSwapRequestAsync,
    isPending: isAcceptRequestPending,
  } = useAcceptSwapMutation();

  const {
    mutateAsync: rejectSwapRequestAsync,
    isPending: isRejectRequestPending,
  } = useRejectSwapMutation();

  const handleAcceptRequest = () => {
    const payload = {
      swapId: swapRequestData.id,
    };

    acceptSwapRequestAsync(payload)
      .then((res) => {
        setType("success");
        setOpenNotification(true);
        setMessage(res.message);
        setTimeout(() => handleClose(), 1000);
      })
      .catch((err) => {
        setType("error");
        setOpenNotification(true);
        setMessage(err?.response?.data?.message || err?.message);
      });
  };

  const handleRejectRequest = () => {
    const payload = {
      swapId: swapRequestData.id,
    };

    rejectSwapRequestAsync(payload)
      .then((res) => {
        setType("success");
        setOpenNotification(true);
        setMessage(res.message);
        setTimeout(() => handleClose(), 1000);
      })
      .catch((err) => {
        setType("error");
        setOpenNotification(true);
        setMessage(err?.response?.data?.message || err?.message);
      });
  };

  return (
    <StyledModal open={open} handleClose={handleClose}>
      <>
        <Typography
          component="p"
          variant="body2"
          sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)", mb: 2 }}
        >
          Swap Request Action
        </Typography>
        <Box display="flex" gap={3}>
          <Button
            sx={{ mt: 3 }}
            type="submit"
            fullWidth
            variant="contained"
            onClick={handleAcceptRequest}
            loading={isAcceptRequestPending}
          >
            Accept
          </Button>
          <Button
            sx={{ mt: 3 }}
            type="submit"
            fullWidth
            variant="outlined"
            onClick={handleRejectRequest}
            loading={isRejectRequestPending}
          >
            Reject
          </Button>
        </Box>

        <NotificationAlert
          open={openNotifcation}
          setOpen={setOpenNotification}
          message={message}
          type={type}
        />
      </>
    </StyledModal>
  );
};
