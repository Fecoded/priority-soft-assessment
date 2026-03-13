"use client";

import { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import { Header } from "@src/components/header";
import { SkillTable } from "./skillTable";
import { useGetSkillsQuery } from "@src/store/apis";
import { CreateSkillModal } from "./create";
import useStore from "@src/store";

export const Skills = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { data: skills } = useGetSkillsQuery();

  const user = useStore.getState().userDetails;

  return (
    <Container
      maxWidth="lg"
      component="main"
      sx={{ display: "flex", flexDirection: "column", my: 5, gap: 4 }}
    >
      <Header />
      {user.role === "ADMIN" && (
        <Box width="30%">
          <Button type="submit" variant="contained" onClick={handleOpen}>
            Create Skill
          </Button>
        </Box>
      )}
      <SkillTable skills={skills!} />
      <CreateSkillModal open={open} handleClose={handleClose} />
    </Container>
  );
};
