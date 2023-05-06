import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#18345E",
    },
    text: {
      primary: "#37393D",
      secondary: "#63686D",
    },
  },
  typography: {
    h3: {
      color: "#37393D",
      fontWeight: 700,
    },
    h4: {
      color: "#37393D",
      fontWeight: 700,
    },
    h5: {
      color: "#37393D",
      fontWeight: 700,
    },
    button: {
      fontSize: 18,
      color: "#fff",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
        size: "large",
        fullWidth: true,
        sx(theme) {
          return {
            borderRadius: theme.spacing(4),
            color: "#fff",
          };
        },
      },
    },
    MuiTableCell: {
      defaultProps: {
        align: "right",
      },
    },
    MuiTypography: {
      defaultProps: {
        textAlign: "center",
      },
    },
  },
});
