import { ThemeProvider } from "@mui/material";
import React from "react";
import Routes from "./Routes/routes";
import { theme } from "./models/theme";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Routes />
		</ThemeProvider>
	);
}

export default App;
