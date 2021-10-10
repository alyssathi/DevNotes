import { ThemeProvider } from "@mui/material";
import { ContextContainer } from "./utils/contextContainer";
import React from "react";
import Routes from "./Routes/routes";
import { theme } from "./models/theme";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<ContextContainer.Provider>
				<Routes />
			</ContextContainer.Provider>
		</ThemeProvider>
	);
}

export default App;
