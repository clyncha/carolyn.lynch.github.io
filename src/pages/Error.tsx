import { Box, Typography } from "@mui/material";
import ErrorIcon from '@mui/icons-material/Error';
import Layout from "./Layout.tsx";
import React from "react";

function Error(): JSX.Element {
  return (
    <Layout>
      <Box>
        <ErrorIcon fontSize="large" />
        <Typography color="red">
          Uh oh, you have stumbled upon a page that doesn't exist. Click here to return to home.
        </Typography>
      </Box>
    </Layout>
  )
};

export default Error;