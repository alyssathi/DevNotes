import React from "react";
import { Layout, MarkdownInput } from "../../components";
import { useStyles } from "./adminEditorCss";
import { Typography } from "@mui/material";

export function AdminEditor() {
	const css = useStyles();
	return (
		<Layout>
			<div className={css.container}>
				<Typography color="primary" variant="h2">
					Article Editor
				</Typography>
				<MarkdownInput />
			</div>
		</Layout>
	);
}
