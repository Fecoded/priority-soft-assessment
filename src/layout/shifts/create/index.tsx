import { useState } from "react";
import { Formik, useFormik } from "formik";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { StyledModal } from "@src/components/modal";
import { CreateShiftSchema } from "@src/layout/utils";
import { NotificationAlert } from "@src/components";
import {
  useGetLocationsQuery,
  useGetSkillsQuery,
  useShiftMutation,
} from "@src/store/apis";

type CreateShiftModalProps = {
  open: boolean;
  handleClose: () => void;
};

export const CreateShiftModal = ({
  open,
  handleClose,
}: CreateShiftModalProps) => {
  const [type, setType] = useState<"success" | "error">();
  const [openNotifcation, setOpenNotification] = useState(false);
  const [message, setMessage] = useState("");

  const { data: skills } = useGetSkillsQuery();
  const { data: locations } = useGetLocationsQuery();

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
      locationId: "",
      skillId: "",
      startTime: "",
      endTime: "",
      headCount: "",
    },
    validationSchema: CreateShiftSchema,
    validateOnMount: true,
    onSubmit: () => handleCreateLocation(),
  });

  const { mutateAsync: createShiftAsync, isPending: isShiftPending } =
    useShiftMutation();

  const handleCreateLocation = () => {
    const payload = {
      locationId: values.locationId,
      skillId: values.skillId,
      startTime: values.startTime,
      endTime: values.endTime,
      headCount: Number(values.headCount),
    };

    createShiftAsync(payload)
      .then((res) => {
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
          Shift
        </Typography>
        <Formik initialValues={initialValues} onSubmit={() => {}}>
          {() => (
            <>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Location</InputLabel>
                <Select
                  error={!!errors.locationId && touched.locationId}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Location"
                  value={values.locationId}
                  color={
                    !!errors.locationId && touched.locationId
                      ? "error"
                      : "primary"
                  }
                  onChange={(e) => {
                    const locationId = (e.target as HTMLInputElement).value;
                    setFieldValue("locationId", locationId);
                  }}
                >
                  {locations?.map((location) => (
                    <MenuItem key={location.id} value={location.id}>
                      {location.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl fullWidth sx={{ my: 3 }}>
                <InputLabel id="demo-simple-select-label">Skill</InputLabel>
                <Select
                  error={!!errors.skillId && touched.skillId}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Skill"
                  value={values.skillId}
                  color={
                    !!errors.skillId && touched.skillId ? "error" : "primary"
                  }
                  onChange={(e) => {
                    const skillId = (e.target as HTMLInputElement).value;
                    setFieldValue("skillId", skillId);
                  }}
                >
                  {skills?.map((skill) => (
                    <MenuItem key={skill.id} value={skill.id}>
                      {skill.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl sx={{ width: "100%" }}>
                <FormLabel htmlFor="name">StartTime</FormLabel>
                <TextField
                  error={!!errors.startTime && touched.startTime}
                  helperText={
                    !!errors.startTime && touched.startTime && errors.startTime
                  }
                  name="startTime"
                  placeholder="2026-06-01T17:00:00Z"
                  type="datetime-local"
                  autoComplete="name"
                  autoFocus
                  required
                  fullWidth
                  variant="outlined"
                  color={
                    !!errors.startTime && touched.startTime
                      ? "error"
                      : "primary"
                  }
                  value={values.startTime}
                  onChange={(e) => {
                    const startTime = (e.target as HTMLInputElement).value;
                    setFieldValue("startTime", startTime);
                  }}
                />
              </FormControl>

              <FormControl sx={{ width: "100%", my: 2 }}>
                <FormLabel htmlFor="name">EndTime</FormLabel>
                <TextField
                  error={!!errors.endTime && touched.endTime}
                  helperText={
                    !!errors.endTime && touched.endTime && errors.endTime
                  }
                  name="endTime"
                  placeholder="2026-06-01T17:00:00Z"
                  type="datetime-local"
                  autoComplete="name"
                  autoFocus
                  required
                  fullWidth
                  variant="outlined"
                  color={
                    !!errors.endTime && touched.endTime ? "error" : "primary"
                  }
                  value={values.endTime}
                  onChange={(e) => {
                    const endTime = (e.target as HTMLInputElement).value;
                    setFieldValue("endTime", endTime);
                  }}
                />
              </FormControl>

              <FormControl sx={{ width: "100%", mb: 3 }}>
                <FormLabel htmlFor="name">Head Count</FormLabel>
                <TextField
                  error={!!errors.headCount && touched.headCount}
                  helperText={
                    !!errors.headCount && touched.headCount && errors.headCount
                  }
                  id="headCount"
                  type="text"
                  name="headCount"
                  placeholder="1"
                  autoComplete="headCount"
                  autoFocus
                  required
                  fullWidth
                  variant="outlined"
                  color={
                    !!errors.headCount && touched.headCount
                      ? "error"
                      : "primary"
                  }
                  value={values.headCount}
                  onChange={(e) => {
                    const headCount = (e.target as HTMLInputElement).value;
                    setFieldValue("headCount", headCount);
                  }}
                />
              </FormControl>

              <Button
                sx={{ mt: 3 }}
                type="submit"
                fullWidth
                variant="contained"
                onClick={() => handleSubmit()}
                loading={isShiftPending}
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
