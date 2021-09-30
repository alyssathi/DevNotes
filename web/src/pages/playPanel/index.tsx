import { Typography } from "@mui/material";
import React from "react";

export function PlayPanel() {
	return (
		<div>
			<Typography variant="h2">Dev Playground</Typography>
			<Typography>
				Welcome to this playground where I demonstrate what I created on the admin side, where the actual fun and more technical stuff happens. In my real
				appplication, my articles are stored in a database to be hosted on the real site, but this playground will save your articles to your local storage.
			</Typography>
		</div>
	);
}
