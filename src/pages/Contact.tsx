import { Grid2, Typography } from "@mui/material";
import Layout from "./Layout.tsx";
import React from "react";
import EmailForm from "../bundles/Contact/EmailForm.tsx";

function Contact(): JSX.Element {
  return (
    <Layout>
      {/* TODO fun background */ }
      <Grid2 container direction={"column"} gap={4}>
        <Grid2>
          {/* TODO fun font text */ }
          <Typography textAlign={"center"} variant="h3">Contact Me</Typography>
        </Grid2>
        <EmailForm />
      </Grid2>
    </Layout>
  )
};

export default Contact;