import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

type NotificationAlertProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  message: string;
  type?: "success" | "error" | "warning" | "info";
};

export const NotificationAlert: React.FC<NotificationAlertProps> = ({
  open,
  setOpen,
  message,
  type = "success",
}) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={open}
      autoHideDuration={3000}
      onClose={() => setOpen(false)}
      message={message}
    >
      <Alert severity={type} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};
