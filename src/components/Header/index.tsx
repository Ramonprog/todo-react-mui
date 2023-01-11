import { Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

export default function Header() {
  return (
    <Box>
      <AppBar
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#282c34",
        }}
      >
        <Toolbar>
          <Typography variant="h4" color="#61dafb">
            To Do List
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
