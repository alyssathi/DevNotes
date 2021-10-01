import React from "react";
import { Layout, MarkdownInput } from "../../components";
import { useStyles } from "./adminEditorCss";

export function AdminEditor() {
	const css = useStyles();
	return (
		<Layout>
			<div className={css.container}>
				<h1>Editor</h1>
				<MarkdownInput />
			</div>
		</Layout>
	);
}
