import { Fab, TextField } from "@mui/material";
import React from "react";
import { useStyles } from "./markdownInputCss";

export function MarkdownInput() {
	const css = useStyles();
	return (
		<div className={css.container}>
			<TextField
				placeholder="Title"
				InputProps={{
					className: css.title,
				}}
				inputProps={{ style: { textAlign: "center", fontSize: "1.5rem", fontWeight: "bolder" } }}
			/>
			<TextField multiline minRows="30" className={css.body} placeholder="The good stuff of your awesome new note!" />
			<Fab sx={{ position: "fixed", bottom: "2.5rem", right: ".5rem" }} color="primary" variant="extended">
				Publish
			</Fab>
		</div>
	);
}
