import React from "react";
import { ReactNode } from "react";

import { Box } from "@mui/material";
import styled from 'styled-components'

const StyledBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 50px;
`;

function Layout({ children }: { children: ReactNode }) {
  return (
    <StyledBox>{children}</StyledBox>
  )
};

export default Layout;