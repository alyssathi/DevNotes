import { createTheme } from "@mui/material";
import "@fontsource/abeezee";
import "@fontsource/aleo";

export const theme = createTheme({
	palette: {
		primary: {
			main: "#546a7b",
		},
		secondary: {
			main: "#E5CEDC",
		},
	},
	typography: {
		fontFamily: "Aleo",
		h1: {
			fontFamily: "ABeeZee",
			fontSize: "5rem",
		},
		h2: {
			fontFamily: "ABeeZee",
			fontSize: "4.25rem",
		},
		h3: {
			fontFamily: "ABeeZee",
			fontSize: "3.5rem",
		},
		h4: {
			fontFamily: "ABeeZee",
			fontSize: "2.75rem",
		},
		h5: {
			fontFamily: "ABeeZee",
			fontSize: "2rem",
		},
		h6: {
			fontFamily: "ABeeZee",
			fontSize: "1.5rem",
		},
	},
});
