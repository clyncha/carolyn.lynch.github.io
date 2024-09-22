import styled from 'styled-components'
import { Grid2, Skeleton, Typography } from "@mui/material";
import React, { useState } from 'react';
import Layout from './Layout.tsx';

const StyledGrid = styled(Grid2)`
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
`;

function Home(): JSX.Element {
  const [isImageLaoding, setIsImageLaoding ] = useState(false);

  const RightContent = (): JSX.Element => {
    const IMAGE_WIDTH = "300";
    return isImageLaoding
      ? <Skeleton width={IMAGE_WIDTH} variant="rectangular" />
      :  <img
          alt="Me and my dog"
          onLoad={() => setIsImageLaoding(false)}
          src={`${process.env.PUBLIC_URL}/images/pictureMeBailey.jpg`}
          width={IMAGE_WIDTH}
        />
  }

  const LeftContent = (): JSX.Element => {
    return isImageLaoding
      ? <Skeleton variant="text" />
      : (
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