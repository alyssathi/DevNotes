import { Fab, TextField } from "@mui/material";
import React, { useRef, useState } from "react";
import { useStyles } from "./markdownInputCss";

export function MarkdownInput() {
	const css = useStyles();
	const titleRef = useRef<HTMLInputElement>();
	const categoryRef = useRef<HTMLInputElement>();
	const bodyRef = useRef<HTMLInputElement>();
	const [isPublished, setIsPublished] = useState<boolean>(false);

	async function handleSaveArticle(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		console.log("hit save article");
		try {
			const response = await fetch("/api/save-article", {
				method: "POST",
				headers: { "content-type": "application/json" },
				body: JSON.stringify({
					title: titleRef?.current?.value,
					category: categoryRef?.current?.value,
					body: bodyRef?.current?.value,
					isPublished: isPublished,
				}),
			});
			const data = await response.json();
			console.log(data);
		} catch (err) {
			console.log(err);
		}
	}
	return (
		<form onSubmit={handleSaveArticle} className={css.container}>
			<TextField
				inputRef={titleRef}
				placeholder="Title"
				InputProps={{
					className: css.title,
				}}
				inputProps={{ style: { textAlign: "center", fontSize: "1.5rem", fontWeight: "bolder" } }}
			/>
			<TextField inputRef={categoryRef} placeholder="Category" />
			<TextField inputRef={bodyRef} multiline minRows="30" className={css.body} placeholder="The good stuff of your awesome new note!" />
			<Fab sx={{ position: "fixed", bottom: "3rem", right: ".5rem" }} color="secondary" variant="extended" type="submit" onClick={() => setIsPublished(true)}>
				<b>Publish</b>
			</Fab>
			<Fab sx={{ position: "fixed", bottom: "3rem", right: "6.5rem" }} color="primary" variant="extended" type="submit" onClick={() => setIsPublished(false)}>
				Save Draft
			</Fab>
		</form>
	);
}
