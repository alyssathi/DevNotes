import { createTheme } from "@mui/material";
import "@fontsource/aleo";
import "@fontsource/abel";
import "@fontsource/abhaya-libre";

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
		fontFamily: "Aleo",
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
			fontFamily: "Abel",
			lineHeight: "18px",
		},
	},
});
