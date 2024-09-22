import React from 'react';

import { Link } from "react-router-dom";

import styled from 'styled-components'
import { Box, Button, IconButton } from "@mui/material";

// MUI Icons
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// Constants
import { CONTACT, PROJECTS } from "./constants/button.labels.ts";
import { PAGE } from "./constants/routes.ts";

const StyledBox = styled(Box)`
  align-items: center;
  border-bottom: 1px solid lightgray;
  box-shadow: rgb(123 124 123 / 50%) -10px -5px 20px -5px;
  display: flex;
  text-align: center;
`;

const enum EXTERNAL_LINKS {
  GITHUB = "https://github.com/clyncha",
  LINKEDIN = "https://www.linkedin.com/in/carolyn-lynch-89587b91/",
}

function Navbar() {

  const handleOnClick = (url: EXTERNAL_LINKS) => {
    return window.open(url, "_blank");
  };

  return (
    <StyledBox gap={2} padding={2}>
      <Link to={PAGE.HOME} relative="path">
        <HomeIcon/>
      </Link>
      <Link to={PAGE.PROJECTS} relative="path">
        <Button color="secondary" variant="text">{PROJECTS}</Button>
      </Link>
      <Link to={PAGE.CONTACT} relative="path">
        <Button color="info" variant="text">{CONTACT}</Button>
      </Link>
      <IconButton onClick={() => handleOnClick(EXTERNAL_LINKS.GITHUB)}>
        <GitHubIcon/>
      </IconButton>
      <IconButton onClick={() => handleOnClick(EXTERNAL_LINKS.LINKEDIN)}>
        <LinkedInIcon/>
      </IconButton>
    </StyledBox>
  );
};

export default Navbar;