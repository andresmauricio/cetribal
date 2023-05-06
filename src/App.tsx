import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";

export function App() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 0 }}>
      <AppBar position="static">
        <Toolbar>
          <Button variant="text" onClick={() => navigate("/articles")}>
            Articulos
          </Button>
          <Button variant="text" onClick={() => navigate("/orders")}>
            Ordenes
          </Button>
        </Toolbar>
      </AppBar>
      <Outlet />
    </Box>
  );
}
