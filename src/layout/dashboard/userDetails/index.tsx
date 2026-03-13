import { useState } from "react";
import { Formik, useFormik } from "formik";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";

import { AssignSkillSchema } from "@src/layout/utils";
import { StyledModal } from "@src/components/modal";
import { NotificationAlert } from "@src/components";
import {
  useAssignSkillMutation,
  useCertifyLocationMutation,
  useGetLocationsQuery,
  useGetSkillsQuery,
} from "@src/store/apis";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import { User } from "@src/store/types";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

type UserDetailsModalProps = {
  open: boolean;
  handleClose: () => void;
  user?: User;
};

export const UserDetailsModal = ({
  open,
  user,
  handleClose,
}: UserDetailsModalProps) => {
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
      skillId: "",
      locationId: "",
    },
    validationSchema: AssignSkillSchema,
    validateOnMount: true,
    onSubmit: () => handleAssignSkill(),
  });

  const { mutateAsync: assignSkill, isPending: isAssignSkillLoading } =
    useAssignSkillMutation();

  const { mutateAsync: certifyLocation, isPending: isCertifyLocationLoading } =
    useCertifyLocationMutation();

  const handleAssignSkill = () => {
    assignSkill({ skillId: values.skillId, userId: user?.id ?? "" })
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

  const handleCertifyLocation = () => {
    certifyLocation({ userId: user?.id ?? "", locationId: values.locationId })
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

  const skillsSet =
    user?.skills && user?.skills.length > 0
      ? user.skills.map((skill) => skill.name)
      : ["-"];

  return (
    <StyledModal open={open} handleClose={handleClose} modalWidth={700}>
      <>
        <Typography
          component="p"
          variant="body2"
          sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 1rem)", mb: 2 }}
        >
          User Details
        </Typography>
        <Box mb={2}>
          <Box>
            <Typography
              component="p"
              variant="subtitle2"
              mt={1}
              color="textDisabled"
            >
              Name
            </Typography>
            <Typography component="p" variant="subtitle1">
              {user?.name}
            </Typography>
          </Box>

          <Box>
            <Typography
              component="p"
              variant="subtitle2"
              mt={1}
              color="textDisabled"
            >
              Email
            </Typography>
            <Typography component="p" variant="subtitle1">
              {user?.email}
            </Typography>
          </Box>
          <Box>
            <Typography
              component="p"
              variant="subtitle2"
              mt={1}
              color="textDisabled"
            >
              Role
            </Typography>
            <Typography component="p" variant="subtitle1">
              {user?.role}
            </Typography>
          </Box>
          <Box>
            <Typography
              component="p"
              variant="subtitle2"
              mt={1}
              color="textDisabled"
            >
              Skills
            </Typography>
            <Typography component="p" variant="subtitle1">
              {...skillsSet.toString().split("")}
            </Typography>
          </Box>
          <Box>
            <Typography
              component="p"
              variant="subtitle2"
              mt={1}
              color="textDisabled"
            >
              Cerifications
            </Typography>
            {user?.certifications && user?.certifications.length > 0
              ? user?.certifications.map((c) => (
                  <Typography key={c.id} component="p" variant="subtitle1">
                    {c.name}
                  </Typography>
                ))
              : "-"}
          </Box>
        </Box>
        <Divider />
        <Box display="flex" gap={2}>
          <Box width="100%">
            <Typography component="p" variant="subtitle1" mt={2}>
              Assign Skill
            </Typography>
            <Formik initialValues={initialValues} onSubmit={() => {}}>
              {() => (
                <>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Skill</InputLabel>
                    <Select
                      error={!!errors.skillId && touched.skillId}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Skill"
                      value={values.skillId}
                      color={
                        !!errors.skillId && touched.skillId
                          ? "error"
                          : "primary"
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

                  <Button
                    sx={{ mt: 3 }}
                    type="submit"
                    fullWidth
                    variant="contained"
                    onClick={() => handleSubmit()}
                    disabled={!values.skillId}
                    loading={isAssignSkillLoading}
                  >
                    Submit
                  </Button>
                </>
              )}
            </Formik>
          </Box>

          <Box width="100%">
            <Typography component="p" variant="subtitle1" mt={2}>
              Certify Location
            </Typography>
            <Formik initialValues={initialValues} onSubmit={() => {}}>
              {() => (
                <>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Location
                    </InputLabel>
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

                  <Button
                    sx={{ mt: 3 }}
                    type="submit"
                    fullWidth
                    variant="contained"
                    onClick={handleCertifyLocation}
                    disabled={!values.locationId}
                    loading={isCertifyLocationLoading}
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
