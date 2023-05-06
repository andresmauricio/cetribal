import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Outlet, useNavigate } from "react-router-dom";
import { ChangeLanguage } from "./translations/ChangeLanguage";

export function App() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <Box sx={{ flexGrow: 0 }}>
      <AppBar position="static">
        <Toolbar>
          <Button variant="text" onClick={() => navigate("/articles")}>
            {t("article")}
          </Button>
          <Button variant="text" onClick={() => navigate("/orders")}>
            {t("order")}
          </Button>
          <ChangeLanguage />
        </Toolbar>
      </AppBar>
      <Outlet />
    </Box>
  );
}
