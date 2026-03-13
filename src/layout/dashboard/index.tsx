"use client";

import { useState } from "react";
import Container from "@mui/material/Container";
import { Header } from "@src/components/header";
import { useGetUserInfo } from "@src/hooks";
import { UserTable } from "./userTable";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { CreateUserModal } from "./create";
import { UserDetailsModal } from "./userDetails";
import { User } from "@src/store/types";

export const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [openAssignSkill, setOpenAssignSkill] = useState(false);
  const [user, setUser] = useState<User>();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { users } = useGetUserInfo();

  return (
    <Container
      maxWidth="lg"
      component="main"
      sx={{ display: "flex", flexDirection: "column", my: 5, gap: 4 }}
    >
      <Header />
      <Box width="30%">
        <Button type="submit" variant="contained" onClick={handleOpen}>
          Create User
        </Button>
      </Box>
      <UserTable
        users={users!}
        handleOpenAssignSkill={(user) => {
          setUser(user);
          setOpenAssignSkill(true);
        }}
      />
      <CreateUserModal open={open} handleClose={handleClose} />
      <UserDetailsModal
        open={openAssignSkill}
        handleClose={() => setOpenAssignSkill(false)}
        user={user}
      />
    </Container>
  );
};
