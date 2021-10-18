import { Fab, TextField } from "@mui/material";
import React, { useRef, useState } from "react";
import { useHistory } from "react-router";
import { IArticle } from "../../utils/contextContainer";
import { useGetArticle } from "../../utils/useGetArticle";
import Category from "./category";
import { useStyles } from "./markdownInputCss";

export function MarkdownInput() {
	const css = useStyles();
	const titleRef = useRef<HTMLInputElement>();
	const bodyRef = useRef<HTMLInputElement>();
	const descriptionRef = useRef<HTMLInputElement>();
	const [isPublished, setIsPublished] = useState<boolean>(false);
	const [category, setCategory] = useState<string | undefined>("");
	const history = useHistory();
	const [article, setArticle] = useState<IArticle>();
	const queryString = window.location.search;
	const param = new URLSearchParams(queryString);
	const id = param.get("id");

	useGetArticle(id, setArticle, setCategory);

	async function handleSaveArticle(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		if (titleRef?.current?.value.trim() === "" || bodyRef?.current?.value.trim() === "") return;

		let api: string;

		if (id) {
			api = `/api/update-article/${id}`;
		} else {
			api = "/api/save-article";
		}

		try {
			const response = await fetch(api, {
				method: "POST",
				headers: { "content-type": "application/json" },
				body: JSON.stringify({
					title: titleRef?.current?.value.trim(),
					category: category,
					description: descriptionRef?.current?.value,
					body: bodyRef?.current?.value,
					is_published: isPublished,
				}),
			});
			const data = await response.json();
			if (data === 200) {
				history.push("/adminPanel");
			}
		} catch (err) {
			console.log(err);
		}
	}

	if (article?.title === undefined) return null;

	return (
		<form onSubmit={handleSaveArticle} className={css.container}>
			<TextField
				required
				inputRef={titleRef}
				defaultValue={article?.title}
				placeholder="Title"
				InputProps={{
					className: css.title,
				}}
				inputProps={{ style: { textAlign: "center", fontSize: "1.5rem", fontWeight: "bolder" } }}
			/>
			<Category category={category} setCategory={setCategory} />
			<TextField
				InputProps={{
					className: css.title,
				}}
				defaultValue={article?.description}
				inputRef={descriptionRef}
				multiline
				minRows="5"
				className={css.description}
				placeholder="Just a short summary of this amazing note:)"
			/>
			<TextField
				InputProps={{
					className: css.title,
				}}
				inputRef={bodyRef}
				defaultValue={article?.body}
				multiline
				minRows="30"
				className={css.body}
				placeholder="The good stuff of your awesome new note!"
			/>
			<Fab sx={{ position: "fixed", bottom: "3rem", right: ".5rem" }} color="primary" variant="extended" type="submit" onClick={() => setIsPublished(true)}>
				<b>Publish</b>
			</Fab>
			<Fab sx={{ position: "fixed", bottom: "3rem", right: "6.5rem" }} color="secondary" variant="extended" type="submit" onClick={() => setIsPublished(false)}>
				Save Draft
			</Fab>
		</form>
	);
}
