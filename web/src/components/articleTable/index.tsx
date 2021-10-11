import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React from "react";
import { ContextContainer } from "../../utils/contextContainer";
import { useAllArticles } from "../../utils/useGetArticles";
import { sx } from "./articleTableCss";

export function ArticleTable() {
	useAllArticles();

	const { allArticles } = ContextContainer.useContainer();
	console.log("all", allArticles);
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
								<IconButton color="error">
									<DeleteIcon />
								</IconButton>
								<IconButton color="primary">
									<EditIcon />
								</IconButton>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
