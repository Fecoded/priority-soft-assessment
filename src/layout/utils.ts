import * as yup from "yup";

export const LoginSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

export const RegisterSchema = yup.object({
  name: yup
    .string()
    .min(6, "Name must be more than 6 characters")
    .required("Name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

export const LocationSchema = yup.object({
  name: yup
    .string()
    .min(6, "Name must be more than 6 characters")
    .required("Name is required"),
  timezone: yup
    .string()
    .min(3, "Timezone must be more than 3 characters")
    .required("Timezone is required"),
});

export const SkillSchema = yup.object({
  name: yup
    .string()
    .min(3, "Name must be more than 3 characters")
    .required("Name is required"),
});

export const AssignSkillSchema = yup.object({
  skillId: yup.string().required("Skill is required"),
});

export const AssignShiftSchema = yup.object({
  userId: yup.string().required("User is required"),
});

export const CreateShiftSchema = yup.object({
  skillId: yup.string().required("Skill is required"),
  locationId: yup.string().required("Location is required"),
  startTime: yup.date().required("Start Time is required"),
  endTime: yup
    .date()
    .required("End Time is required")
    // This ensures endTime is at least the same as or after startTime
    .min(yup.ref("startTime"), "End Time cannot be before Start Time"),
  headCount: yup.string().required("HeadCount is required"),
});
