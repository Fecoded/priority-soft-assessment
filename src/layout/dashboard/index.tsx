"use client";

import Container from "@mui/material/Container";
import { Header } from "@src/components/header";

export const Dashboard = () => {
  return (
    <Container
      maxWidth="lg"
      component="main"
      sx={{ display: "flex", flexDirection: "column", my: 5, gap: 4 }}
    >
      <Header />
    </Container>
  );
};
