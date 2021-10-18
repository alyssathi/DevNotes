import { Box, FormControl, InputLabel, Select, SelectChangeEvent, MenuItem, TextField, Button } from "@mui/material";
import React, { useRef } from "react";
import { SimpleModal } from "..";
import { ContextContainer } from "../../utils/contextContainer";
import { useGetCategories } from "../../utils/useGetCategories";
import { useStyles } from "./markdownInputCss";
import AddIcon from "@mui/icons-material/Add";

interface ICategoryProps {
	category: string | undefined;
	setCategory: React.Dispatch<React.SetStateAction<string | undefined>>;
	id: string | null;
}

export default function Category({ id, category, setCategory }: ICategoryProps) {
	useGetCategories();
	const css = useStyles();
	const { setCategories, categories } = ContextContainer.useContainer();
	const categoryRef = useRef<HTMLInputElement>();
	const [inputOpen, setInputOpen] = React.useState<boolean>(false);

	async function handleAddCategory(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		if (categoryRef?.current?.value.trim() === "") return;

		try {
			const response = await fetch("/api/add-category", {
				method: "POST",
				headers: { "content-type": "application/json" },
				body: JSON.stringify({
					category: categoryRef?.current?.value.trim(),
				}),
			});
			const data = await response.json();
			if (data === "ok") {
				(async () => {
					try {
						const response = await fetch("/api/get-categories", {
							method: "GET",
							headers: { "content-type": "application/json" },
						});
						const data: [] = await response.json();
						if (data) {
							setCategories(data);
						}
					} catch (err) {
						console.error(err);
					}
				})();
			}
			setCategory(categoryRef?.current?.value.trim());
			setInputOpen(false);
		} catch (err) {
			console.log(err);
		}
	}

	return (
		<Box className={css.categoryContainer}>
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
			<SimpleModal id={id} setInputOpen={setInputOpen} inputOpen={inputOpen} buttonName={<AddIcon />}>
				<Box component="form" id="category" className={css.form} onSubmit={handleAddCategory}>
					<TextField
						color="secondary"
						required
						inputRef={categoryRef}
						label="New Category"
						InputProps={{
							className: css.category,
						}}
					/>
					<Button type="submit" form="category" variant="contained" color="secondary">
						Add
					</Button>
				</Box>
			</SimpleModal>
		</Box>
	);
}
