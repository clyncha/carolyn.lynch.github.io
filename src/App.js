import { Card, Container, Grid2 } from "@mui/material";

function App() {
  return (
    <Container maxWidth="md">
      <Grid2 container directon="row" flexDirection={"row"} gap={2}>
      <Card>Carolyn Lynch</Card>
      <Card>Headshot</Card>
      </Grid2>
    </Container>
  );
}

export default App;
