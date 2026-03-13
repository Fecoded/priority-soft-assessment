"use client";

import { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import { Header } from "@src/components/header";
import { ShiftTable } from "./shiftTable";
import {
  useGetShiftsQuery,
  useGetUserDetailsQuery,
  useGetUserShiftQuery,
} from "@src/store/apis";
import { CreateShiftModal } from "./create";
import { AssignShiftModal } from "./assignShift";
import useStore from "@src/store";
import { CreateData, OmitAssignment } from "./utils";
import { UserShiftTable } from "./userShiftTable";
import { SwapShiftModal } from "./swapShift";

export const Shifts = () => {
  const [open, setOpen] = useState(false);
  const [openAssignSkill, setOpenAssignShift] = useState(false);
  const [openSwapShift, setOpenSwapShift] = useState(false);
  const [shift, setShift] = useState<CreateData>();
  const [userShift, setuserShift] = useState<OmitAssignment>();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useGetUserDetailsQuery();

  const { data: shifts } = useGetShiftsQuery();

  const { data: userShifts } = useGetUserShiftQuery();

  const user = useStore.getState().userDetails;

  return (
    <Container
      maxWidth="lg"
      component="main"
      sx={{ display: "flex", flexDirection: "column", my: 5, gap: 4 }}
    >
      <Header />
      {user.role !== "STAFF" && (
        <Box width="30%">
          <Button type="submit" variant="contained" onClick={handleOpen}>
            Create Shift
          </Button>
        </Box>
      )}
      {user.role === "STAFF" ? (
        <UserShiftTable
          shifts={userShifts!}
          handleOpenSwapShift={(shift) => {
            setuserShift(shift);
            setOpenSwapShift(true);
          }}
        />
      ) : (
        <ShiftTable
          shifts={shifts!}
          handleOpenAssignShift={(shift) => {
            setShift(shift);
            setOpenAssignShift(true);
          }}
        />
      )}
      <CreateShiftModal open={open} handleClose={handleClose} />
      <AssignShiftModal
        open={openAssignSkill}
        handleClose={() => setOpenAssignShift(false)}
        shift={shift}
      />
      <SwapShiftModal
        open={openSwapShift}
        handleClose={() => setOpenSwapShift(false)}
        shift={userShift}
      />
    </Container>
  );
};
