import styled from 'styled-components'
import { Box, Button, IconButton } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const StyledBox = styled(Box)`
  align-items: center;
  border-bottom: 1px solid lightgray;
  box-shadow: rgb(123 124 123 / 50%) -10px -5px 20px -5px;
  display: flex;
  text-align: center;
`;

function Navbar() {
  return (
    <StyledBox gap={2} padding={2}>
      <Button color="darkgreen" variant="text">Contact</Button>
      <Button color="darkgreen" variant="text">Projects</Button>
      <IconButton>
        <GitHubIcon/>
      </IconButton>
      <IconButton>
        <LinkedInIcon/>
      </IconButton>
    </StyledBox>
  );
};

export default Navbar;