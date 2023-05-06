import { Button, Menu, MenuItem } from "@mui/material";
import { useState, MouseEvent } from "react";
import { useTranslation } from "react-i18next";

export function ChangeLanguage() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { t, i18n } = useTranslation();

  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeLanguage = () => {
    i18n.language === "es"
      ? i18n.changeLanguage("en")
      : i18n.changeLanguage("es");

    handleClose();
  };

  return (
    <div>
      <Button
        variant="text"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {i18n.language === "es" ? t("spanish") : t("english")}
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={changeLanguage}>{t("spanish")}</MenuItem>
        <MenuItem onClick={changeLanguage}>{t("english")}</MenuItem>
      </Menu>
    </div>
  );
}
