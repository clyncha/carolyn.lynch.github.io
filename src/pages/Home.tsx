import styled from 'styled-components'
import { Grid2, Typography } from "@mui/material";
import React from 'react';
import Layout from './Layout.tsx';

const StyledGrid = styled(Grid2)`
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
`;

const RightContent = (): JSX.Element => {
  return (
    <img
      alt="Me and my dog"
      src={`${process.env.PUBLIC_URL}/images/pictureMeBailey.jpg`}
      width="400"
    />
  )
}

const LeftContent = (): JSX.Element => {
  return (
    <Grid2 container direction={"column"} gap={4} paddingTop={6}>
      <Grid2>
        <Typography color="green" variant="h3">Hello!</Typography>
      </Grid2>
      <Grid2>
        <Typography variant="h4">I'm Carolyn Lynch</Typography>
      </Grid2>
      <Grid2>
        <Typography variant="h4">
          Experienced web developer with a passion for helping others
        </Typography>
      </Grid2>
    </Grid2>
  )
}

function Home(): JSX.Element {
  return (
    <Layout>
      <Grid2 container columns={2} columnSpacing={0} justifyContent={"space-around"}>
        <Grid2 maxWidth="50%">
          <LeftContent />
        </Grid2>
        <StyledGrid>
          <RightContent />
        </StyledGrid>
      </Grid2>
    </Layout>
  )
};

export default Home;