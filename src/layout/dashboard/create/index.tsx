import { useState } from "react";
import { Formik, useFormik } from "formik";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import { RegisterSchema } from "@src/layout/utils";
import { StyledModal } from "@src/components/modal";
import { NotificationAlert } from "@src/components";
import { useRegisterMutation } from "@src/store/apis";
import { Role } from "@src/store/types";

type CreateUserModalProps = {
  open: boolean;
  handleClose: () => void;
};

export const CreateUserModal = ({
  open,
  handleClose,
}: CreateUserModalProps) => {
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
      email: "",
      password: "",
      role: "" as Role,
    },
    validationSchema: RegisterSchema,
    validateOnMount: true,
    onSubmit: () => handleLogin(),
  });

  const { mutateAsync: registerUser, isPending: isLoginLoading } =
    useRegisterMutation();

  const handleLogin = () => {
    registerUser(values)
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
          Create User
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

              <FormControl sx={{ width: "100%", mb: 3 }}>
                <FormLabel htmlFor="email">Email</FormLabel>
                <TextField
                  error={!!errors.email && touched.email}
                  helperText={!!errors.email && touched.email && errors.email}
                  id="email"
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  autoComplete="email"
                  autoFocus
                  required
                  fullWidth
                  variant="outlined"
                  color={!!errors.email && touched.email ? "error" : "primary"}
                  value={values.email}
                  onChange={(e) => {
                    const email = (e.target as HTMLInputElement).value;
                    setFieldValue("email", email);
                  }}
                />
              </FormControl>
              <FormControl sx={{ width: "100%", mb: 3 }}>
                <FormLabel htmlFor="password">Password</FormLabel>
                <TextField
                  error={!!errors.password && touched.password}
                  helperText={
                    !!errors.password && touched.password && errors.password
                  }
                  name="password"
                  placeholder="••••••"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  autoFocus
                  required
                  fullWidth
                  variant="outlined"
                  color={
                    !!errors.password && touched.password ? "error" : "primary"
                  }
                  onChange={(e) => {
                    const password = (e.target as HTMLInputElement).value;
                    setFieldValue("password", password);
                  }}
                />
              </FormControl>

              <FormControl fullWidth>
                <FormLabel htmlFor="role">Role</FormLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={values.role}
                  onChange={(e) => {
                    const role = (e.target as HTMLInputElement).value;
                    setFieldValue("role", role);
                  }}
                >
                  <MenuItem value={"ADMIN"}>ADMIN</MenuItem>
                  <MenuItem value={"MANAGER"}>MANAGER</MenuItem>
                  <MenuItem value={"STAFF"}>STAFF</MenuItem>
                </Select>
              </FormControl>

              <Button
                sx={{ mt: 3 }}
                type="submit"
                fullWidth
                variant="contained"
                onClick={() => handleSubmit()}
                loading={isLoginLoading}
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
