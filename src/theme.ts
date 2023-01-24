import {TypographyOptions} from "@mui/material/styles/createTypography";
import {createTheme, PaletteOptions} from "@mui/material";

export const baseFont = [
  "\"Open Sans\"",
  "\"Helvetica\"",
  "\"Arial\"",
  "\"sans-serif",
].join(", ");

export const titlesFont = [
  "\"Ubuntu\"",
  "\"Helvetica\"",
  "\"Arial\"",
  "\"sans-serif\"",
].join(", ");

const htmlFontSize = 16;

const pxToRem = (size: number) => `${size / htmlFontSize}rem`;

const typography: TypographyOptions = {
  fontFamily: baseFont,
  h1: {
    fontFamily: titlesFont,
    fontWeight: 500,
    fontSize: pxToRem(98),
  },
  h2: {
    fontFamily: titlesFont,
    fontWeight: 500,
    fontSize: pxToRem(61),
  },
  h3: {
    fontFamily: titlesFont,
    fontWeight: 500,
    fontSize: pxToRem(49),
  },
  h4: {
    fontFamily: titlesFont,
    fontWeight: 700,
    fontSize: pxToRem(35),
  },
  h5: {
    fontFamily: titlesFont,
    fontWeight: 700,
    fontSize: pxToRem(24),
  },
  h6: {
    fontFamily: titlesFont,
    fontWeight: 700,
    fontSize: pxToRem(20),
  },
  subtitle1: {
    fontFamily: titlesFont,
    fontWeight: 700,
    fontSize: pxToRem(18),
  },
  subtitle2: {
    fontFamily: titlesFont,
    fontWeight: 700,
    fontSize: pxToRem(14),
  },
  body1: {
    fontSize: pxToRem(16),
    fontWeight: 400,
  },
  body2: {
    fontSize: pxToRem(12),
    fontWeight: 400,
  },
  button: {
    fontFamily: titlesFont,
  },
  caption: {
    fontSize: pxToRem(11),
    fontWeight: 300,
  },
  overline: {
    fontSize: pxToRem(16),
    fontWeight: 400,
  },
};

const palette: PaletteOptions = {
  primary: {
    main: "#1445F5",
    light: "#59C5FA",
  },
  secondary: {
    main: "#9C27B0",
  },
  text: {
    primary: "#2D2C30",
    secondary: "#73777C",
  },
  background: {
    // default: "#F5F7f6",
    default: "#FFFF00",
  },
  error: {
    main: "#ed6f00",
  },
  success: {
    main: "#26ce55",
  },
  info: {
    main: "#59c5fa",
  },
};

const theme = createTheme({
  components: {
    MuiTextField: {
      defaultProps: {
        variant: "standard",
        fullWidth: true,
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          "&.MuiContainer-maxWidthXl": {
            maxWidth: 1920,
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          lineHeight: "1.358em",
        },
      },
    },
    MuiSelect: {
      defaultProps: {
        variant: "standard",
      },
      styleOverrides: {
        select: {
          height: "1.358em",
          minHeight: "1.358em",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          ...typography.subtitle2,
        },
        shrink: {
          ...typography.body1,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          ...typography.subtitle2,
          paddingLeft: 8,
          height: "1.358em",
        },
        inputTypeSearch: {
          "::-ms-clear": {},
          "::-ms-reveal": {},
          "&::-webkit-search-decoration": {
            display: "none",
          },
          "&::-webkit-search-cancel-button": {
            display: "none",
          },
          "&::-webkit-search-results-button": {
            display: "none",
          },
          "&::-webkit-search-results-decoration": {
            display: "none",
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          marginLeft: 8,
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          marginLeft: -9,
        },
        labelPlacementStart: {
          marginLeft: -9,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        textSizeSmall: {
          fontSize: pxToRem(12),
          padding: "5px 8px",
          lineHeight: 1.85,
        },
        outlinedPrimary: {
          backgroundColor: "transparent",
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          "&.Mui-checked": {
            "& + .MuiTypography-root": {
              fontWeight: 700,
            },
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          "&.MuiButtonBase-root": {
            textTransform: "none",
            minWidth: 120,
            color: palette.text!.primary,
          },
          "&.Mui-selected": {
            color: palette.text!.primary,
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          height: 4,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        colorDefault: {
          backgroundColor: "transparent",
        },
      },
    },
  },
  palette,
  typography,
});

export default theme;