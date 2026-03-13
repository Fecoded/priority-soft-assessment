import { useState } from "react";
import { StyledModal } from "@src/components/modal";
import Typography from "@mui/material/Typography";
import { Formik, useFormik } from "formik";
import { LocationSchema } from "@src/layout/utils";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useLocationMutation } from "@src/store/apis";
import { NotificationAlert } from "@src/components";

type CreateLocationModalProps = {
  open: boolean;
  handleClose: () => void;
};

export const CreateLocationModal = ({
  open,
  handleClose,
}: CreateLocationModalProps) => {
  const [type, setType] = useState<"success" | "error">();
  const [openNotifcation, setOpenNotification] = useState(false);
  const [message, setMessage] = useState("");

  // Formik setup
  const {
    initialValues,
    handleSubmit,
    errors,
    touched,
    values,
    setFieldValue,
  } = useFormik({
    initialValues: {
      name: "",
      timezone: "",
    },
    validationSchema: LocationSchema,
    validateOnMount: true,
    onSubmit: () => handleCreateLocation(),
  });

  const { mutateAsync: createLocationAsync, isPending: isLocationPending } =
    useLocationMutation();

  const handleCreateLocation = () => {
    const payload = {
      name: values.name,
      timezone: values.timezone,
    };

    createLocationAsync(payload)
      .then((res) => {
        handleClose();
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
          Location
        </Typography>
        <Formik initialValues={initialValues} onSubmit={() => {}}>
          {() => (
            <>
              <FormControl sx={{ width: "100%", mb: 3 }}>
                <FormLabel htmlFor="name">Name</FormLabel>
                <TextField
                  error={!!errors.name && touched.name}
                  helperText={!!errors.name && touched.name && errors.name}
                  id="name"
                  type="name"
                  name="name"
                  placeholder="John doe"
                  autoComplete="name"
                  autoFocus
                  required
                  fullWidth
                  variant="outlined"
                  color={!!errors.name && touched.name ? "error" : "primary"}
                  value={values.name}
                  onChange={(e) => {
                    const name = (e.target as HTMLInputElement).value;
                    setFieldValue("name", name);
                  }}
                />
              </FormControl>

              <FormControl sx={{ width: "100%" }}>
                <FormLabel htmlFor="name">Timezone</FormLabel>
                <TextField
                  error={!!errors.timezone && touched.timezone}
                  helperText={
                    !!errors.timezone && touched.timezone && errors.timezone
                  }
                  name="timezone"
                  placeholder="America/New_York"
                  autoComplete="name"
                  autoFocus
                  required
                  fullWidth
                  variant="outlined"
                  color={
                    !!errors.timezone && touched.timezone ? "error" : "primary"
                  }
                  value={values.timezone}
                  onChange={(e) => {
                    const timezone = (e.target as HTMLInputElement).value;
                    setFieldValue("timezone", timezone);
                  }}
                />
              </FormControl>

              <Button
                sx={{ mt: 3 }}
                type="submit"
                fullWidth
                variant="contained"
                onClick={() => handleSubmit()}
                loading={isLocationPending}
              >
                Submit
              </Button>
            </>
          )}
        </Formik>
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
