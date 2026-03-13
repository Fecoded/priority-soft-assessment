import { useState } from "react";
import { Formik, useFormik } from "formik";
import { StyledModal } from "@src/components/modal";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { SkillSchema } from "@src/layout/utils";
import { useSkillMutation } from "@src/store/apis";
import { NotificationAlert } from "@src/components";

type CreateSkillModalProps = {
  open: boolean;
  handleClose: () => void;
};

export const CreateSkillModal = ({
  open,
  handleClose,
}: CreateSkillModalProps) => {
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
    },
    validationSchema: SkillSchema,
    validateOnMount: true,
    onSubmit: () => handleCreateSkill(),
  });

  const { mutateAsync: createSkillAsync, isPending: isSkillPending } =
    useSkillMutation();

  const handleCreateSkill = () => {
    const payload = {
      name: values.name,
    };

    createSkillAsync(payload)
      .then((res) => {
        handleClose();
        setType("success");
        setOpenNotification(true);
        setMessage(res.message);
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
          Skill
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
                  placeholder="Bartender"
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

              <Button
                sx={{ mt: 3 }}
                type="submit"
                fullWidth
                variant="contained"
                onClick={() => handleSubmit()}
                loading={isSkillPending}
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
