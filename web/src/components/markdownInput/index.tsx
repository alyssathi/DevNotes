import { Box, Fab, FormControl, IconButton, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import React, { useRef, useState } from "react";
import { ContextContainer } from "../../utils/contextContainer";
import { useGetCategories } from "../../utils/useGetCategories";
import { useStyles } from "./markdownInputCss";
import AddIcon from "@mui/icons-material/Add";
import { useHistory } from "react-router";

export function MarkdownInput() {
	useGetCategories();
	const { categories } = ContextContainer.useContainer();
	const css = useStyles();
	const titleRef = useRef<HTMLInputElement>();
	const bodyRef = useRef<HTMLInputElement>();
	const [isPublished, setIsPublished] = useState<boolean>(false);
	const [category, setCategory] = useState<string>("");
	const history = useHistory();

	async function handleSaveArticle(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		if (titleRef?.current?.value.trim() === "" || bodyRef?.current?.value.trim() === "") return;

		try {
			const response = await fetch("/api/save-article", {
				method: "POST",
				headers: { "content-type": "application/json" },
				body: JSON.stringify({
					title: titleRef?.current?.value.trim(),
					category: category,
					body: bodyRef?.current?.value.trim(),
					isPublished: isPublished,
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

	return (
		<form onSubmit={handleSaveArticle} className={css.container}>
			<TextField
				required
				inputRef={titleRef}
				placeholder="Title"
				InputProps={{
					className: css.title,
				}}
				inputProps={{ style: { textAlign: "center", fontSize: "1.5rem", fontWeight: "bolder" } }}
			/>
			<Box className={css.category}>
				<FormControl>
					<InputLabel id="category-select-label">Category</InputLabel>
					<Select
						required
						autoWidth
						sx={{ minWidth: 120 }}
						labelId="category-select-label"
						label="Category"
						value={category}
						onChange={(e: SelectChangeEvent) => {
							setCategory(e.target.value);
						}}
					>
						{categories.map((x) => {
							if (x === null) return null;
							return <MenuItem value={x.toString()}>{x}</MenuItem>;
						})}
					</Select>
				</FormControl>
				<IconButton>
					<AddIcon />
				</IconButton>
			</Box>
			<TextField required inputRef={bodyRef} multiline minRows="30" className={css.body} placeholder="The good stuff of your awesome new note!" />
			<Fab sx={{ position: "fixed", bottom: "3rem", right: ".5rem" }} color="secondary" variant="extended" type="submit" onClick={() => setIsPublished(true)}>
				<b>Publish</b>
			</Fab>
			<Fab sx={{ position: "fixed", bottom: "3rem", right: "6.5rem" }} color="primary" variant="extended" type="submit" onClick={() => setIsPublished(false)}>
				Save Draft
			</Fab>
		</form>
	);
}
