import React from "react";
import { Box, CircularProgress } from "@material-ui/core";

export default function Loading() {
  return (
    <Box style={{ textAlign: "center" }}>
      <CircularProgress style={{ marginTop: 100, color: "#53505a"}} />
    </Box>
  );
}
