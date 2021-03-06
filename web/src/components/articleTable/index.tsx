import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Button, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import React from "react";
import { useHistory } from "react-router";
import { ContextContainer } from "../../utils/contextContainer";
import { useAllArticles } from "../../utils/useGetArticles";
import { SimpleModal } from "../modal";
import { sx } from "./articleTableCss";

export function ArticleTable() {
	useAllArticles();
	const history = useHistory();

	async function deleteArticle(id: string | null) {
		try {
			const response = await fetch(`/api/delete-article/${id}`);
			const data = await response.json();
			if (data === 200) {
				window.location.reload();
			}
		} catch (err) {
			console.log(err);
		}
	}

	function handleEdit(id: string | null) {
		if (id !== null) {
			history.push(`/adminEditor?id=${id}`);
			return;
		}
	}

	const { allArticles } = ContextContainer.useContainer();
	if (allArticles === null) return null;
	return (
		<TableContainer sx={sx.container}>
			<Table aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell sx={sx.head}>Id</TableCell>
						<TableCell sx={sx.head}>Title</TableCell>
						<TableCell sx={sx.head}>Category</TableCell>
						<TableCell sx={sx.head}>Date Created</TableCell>

						<TableCell sx={sx.head}>Is Published?</TableCell>
						<TableCell sx={sx.head}>Actions</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{allArticles.map((article, i) => (
						<TableRow key={article.id} sx={{ minHeight: "100%" }}>
							<TableCell sx={i % 2 === 0 ? sx.even : sx.odd} align="center" component="th" scope="row">
								{article.id}
							</TableCell>
							<TableCell sx={i % 2 === 0 ? sx.even : sx.odd} align="center">
								{article.title}
							</TableCell>
							<TableCell sx={i % 2 === 0 ? sx.even : sx.odd} align="center">
								{article.category}
							</TableCell>
							<TableCell sx={i % 2 === 0 ? sx.even : sx.odd} align="center">
								{article.date_created}
							</TableCell>
							<TableCell sx={i % 2 === 0 ? sx.even : sx.odd} align="center">
								{article.is_published ? <CheckCircleOutlineIcon color="success" /> : <CancelIcon color="error" />}
							</TableCell>
							<TableCell sx={i % 2 === 0 ? sx.even : sx.odd} align="right">
								<Box sx={sx.actionContainer}>
									<IconButton sx={sx.edit} onClick={() => handleEdit(article?.id)}>
										<EditIcon />
									</IconButton>
									<SimpleModal buttonName={<DeleteIcon color="error" />}>
										<>
											<Typography variant="subtitle1" sx={sx.space}>
												Are you sure you want to delete <b> {article.title}</b> permanently?
											</Typography>
											<Button onClick={() => deleteArticle(article.id)} variant="outlined" color="error">
												<Typography variant="subtitle1">Delete</Typography>
											</Button>
										</>
									</SimpleModal>
								</Box>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
