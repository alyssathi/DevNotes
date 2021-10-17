import { createTheme } from "@mui/material";
import "@fontsource/aleo";
import "@fontsource/abhaya-libre";
import "@fontsource/actor";

export const theme = createTheme({
	palette: {
		primary: {
			main: "#e0c0a9",
		},
		secondary: {
			main: "#484b4d",
		},
	},
	typography: {
		fontFamily: "Actor",
		h1: {
			fontFamily: "Abhaya Libre",
			fontSize: "3rem",
			fontWeight: "bolder",
		},
		h2: {
			fontFamily: "Abhaya Libre",
			fontSize: "2.3rem",
			fontWeight: "bolder",
		},
		h3: {
			fontFamily: "Abhaya Libre",
			fontSize: "2rem",
			fontWeight: "bolder",
		},
		h4: {
			fontFamily: "Abhaya Libre",
			fontSize: "1.75rem",
			fontWeight: "bolder",
		},
		h5: {
			fontFamily: "Abhaya Libre",
			fontSize: "1.5rem",
			fontWeight: "bolder",
		},
		h6: {
			fontFamily: "Abhaya Libre",
			fontSize: "1.25rem",
			fontWeight: "bolder",
		},
		subtitle1: {
			fontFamily: "Aleo",
			fontSize: "1.1rem",
			lineHeight: "24px",
		},
	},
});
