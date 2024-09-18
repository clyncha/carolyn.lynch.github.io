import styled from 'styled-components'
import { Grid2, Typography } from "@mui/material";

const StyledGrid = styled(Grid2)`
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
`;

function HomeContent() {
  return (
    <Grid2 container alignItems={"center"} justifyContent={"space-around"} padding={2} paddingTop={4}>
      <Grid2 container direction={"column"} maxWidth="50%" gap={2}>
      <Grid2 item>
        <Typography color="green" variant="h3">Hello!</Typography>
      </Grid2>
      <Grid2 item>
        <Typography variant="h4">I'm Carolyn Lynch</Typography>
      </Grid2>
      <Grid2 item>
        <Typography variant="h4">Experienced web developer with a passion for helping others</Typography>
      </Grid2>
      </Grid2>
      <StyledGrid item>
        <img
          alt="Me and my dog"
          src={`${process.env.PUBLIC_URL}/images/pictureMeBailey.jpg`}
          width="400"
        />
      </StyledGrid>
    </Grid2>
  )
};

export default HomeContent;