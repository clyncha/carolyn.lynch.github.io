import { Button, Grid2, TextField } from "@mui/material";
import React from "react";
import { SEND_MESSAGE } from "../../constants/button.labels.ts";

const getFormDate = (): any => {
  const email = window.document.getElementById('email');
  const message = window.document.getElementById('message');
  const name = window.document.getElementById('name');

  return {
    email,
    message,
    name,
  };
};

const handleSubmission = async (e: { preventDefault: () => void; }) => {
  e.preventDefault();
  // TODO put this in api file
  await fetch('/send-email', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(getFormDate()),
  });
};

enum PLACEHOLDER_LABELS {
  EMAIL = "Email",
  NAME = "Name",
  SUBJECT = "Subject",
};

const MESSAGE_DEFAULT_VALUE = "Hi, would love to get to know you!";

function EmailForm(): JSX.Element {
  return (
    <>
      <Grid2 container spacing={2}>
        <TextField
          id="outlined-required"
          placeholder={PLACEHOLDER_LABELS.NAME}
          required
        />
        <TextField
          id="outlined-required"
          placeholder={PLACEHOLDER_LABELS.EMAIL}
          required
        />
      </Grid2>
      <Grid2>
        <TextField
          id="outlined-required"
          fullWidth
          placeholder={PLACEHOLDER_LABELS.SUBJECT}
          required
        />
      </Grid2>
      <Grid2>
        <TextField
          defaultValue={MESSAGE_DEFAULT_VALUE}
          fullWidth
          id="outlined-required"
          multiline
          required
          rows={5}
        />
      </Grid2>
      <Grid2 alignSelf={"flex-end"}>
        <Button onClick={handleSubmission} variant="contained">{SEND_MESSAGE}</Button>
      </Grid2>
    </>
  )
};

export default EmailForm;