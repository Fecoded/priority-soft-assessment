import { useState } from "react";
import { Formik, useFormik } from "formik";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";

import { AssignShiftSchema } from "@src/layout/utils";
import { StyledModal } from "@src/components/modal";
import { NotificationAlert } from "@src/components";
import { useAssignShiftMutation, useGetUsersQuery } from "@src/store/apis";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import { CreateData } from "../utils";

type AssignShiftModalProps = {
  open: boolean;
  handleClose: () => void;
  shift?: CreateData;
};

export const AssignShiftModal = ({
  open,
  shift,
  handleClose,
}: AssignShiftModalProps) => {
  const [type, setType] = useState<"success" | "error">();
  const [openNotifcation, setOpenNotification] = useState(false);
  const [message, setMessage] = useState("");

  const { data: users } = useGetUsersQuery();

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
      userId: "",
    },
    validationSchema: AssignShiftSchema,
    validateOnMount: true,
    onSubmit: () => handleAssignSkill(),
  });

  const { mutateAsync: assignShift, isPending: isAssignShiftLoading } =
    useAssignShiftMutation();

  const handleAssignSkill = () => {
    assignShift({ userId: values.userId, shiftId: shift?.id ?? "" })
      .then((res) => {
        setType("success");
        setOpenNotification(true);
        setMessage(res.data?.warnings?.[0]?.message ?? res.message);
        setTimeout(() => handleClose(), 1000);
      })
      .catch((err) => {
        const messages: string[] = err?.response?.data?.errors?.map(
          (e: { message: string }) => e.message,
        );

        const suggestions = err?.response?.data?.suggestions?.map(
          (s: { name: string }) => s.name,
        );

        setType("error");
        setOpenNotification(true);
        setMessage(
          `${messages.toString()} 
           \n
          ${suggestions?.length > 0 ? `Suggestions: ${suggestions.toString()} is qualified` : ""} 
          `,
        );
      });
  };

  return (
    <StyledModal open={open} handleClose={handleClose} modalWidth={700}>
      <>
        <Typography
          component="p"
          variant="body2"
          sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 1rem)", mb: 2 }}
        >
          Shift Details
        </Typography>
        <Box mb={2}>
          <Box>
            <Typography
              component="p"
              variant="subtitle2"
              mt={1}
              color="textDisabled"
            >
              Location
            </Typography>
            <Typography component="p" variant="subtitle1">
              {shift?.locationName}
            </Typography>
          </Box>

          <Box>
            <Typography
              component="p"
              variant="subtitle2"
              mt={1}
              color="textDisabled"
            >
              Timezone
            </Typography>
            <Typography component="p" variant="subtitle1">
              {shift?.locationTimezone}
            </Typography>
          </Box>
          <Box>
            <Typography
              component="p"
              variant="subtitle2"
              mt={1}
              color="textDisabled"
            >
              Skill
            </Typography>
            <Typography component="p" variant="subtitle1">
              {shift?.skillName}
            </Typography>
          </Box>

          <Box>
            <Typography
              component="p"
              variant="subtitle2"
              mt={1}
              color="textDisabled"
            >
              Assignment
            </Typography>
            {shift?.assignments && shift?.assignments.length > 0
              ? shift?.assignments.map((s) => (
                  <Typography key={s.id} component="p" variant="subtitle1">
                    {s.user.name}
                  </Typography>
                ))
              : "-"}
          </Box>
        </Box>
        <Divider />
        <Box display="flex" gap={2}>
          <Box width="100%">
            <Typography component="p" variant="subtitle1" mt={2}>
              Assign Shift
            </Typography>
            <Formik initialValues={initialValues} onSubmit={() => {}}>
              {() => (
                <>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Users</InputLabel>
                    <Select
                      error={!!errors.userId && touched.userId}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="User"
                      value={values.userId}
                      color={
                        !!errors.userId && touched.userId ? "error" : "primary"
                      }
                      onChange={(e) => {
                        const userId = (e.target as HTMLInputElement).value;
                        setFieldValue("userId", userId);
                      }}
                    >
                      {users?.map((u) => (
                        <MenuItem key={u.id} value={u.id}>
                          {u.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <Button
                    sx={{ mt: 3 }}
                    type="submit"
                    fullWidth
                    variant="contained"
                    onClick={() => handleSubmit()}
                    disabled={!values.userId}
                    loading={isAssignShiftLoading}
                  >
                    Submit
                  </Button>
                </>
              )}
            </Formik>
          </Box>
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
