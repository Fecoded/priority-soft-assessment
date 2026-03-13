"use client";

import { useState } from "react";
import Container from "@mui/material/Container";

import { Header } from "@src/components/header";
import { SwapRequestTable } from "./swapRequestTable";
import { SwapRequestActionModal } from "./action";
import { useGetSwapsRequestQuery } from "@src/store/apis";
import { SwapRequestData } from "./utils";

export const Swaps = () => {
  const [open, setOpen] = useState(false);
  const [swapRequestData, setSwapRequestData] = useState<SwapRequestData>();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { data: swapRequest } = useGetSwapsRequestQuery();

  return (
    <Container
      maxWidth="lg"
      component="main"
      sx={{ display: "flex", flexDirection: "column", my: 5, gap: 4 }}
    >
      <Header />
      <SwapRequestTable
        swapRequest={swapRequest!}
        handleSwapRequest={(swapRequest) => {
          handleOpen();
          setSwapRequestData(swapRequest);
        }}
      />
      <SwapRequestActionModal
        open={open}
        handleClose={handleClose}
        swapRequestData={swapRequestData!}
      />
    </Container>
  );
};
