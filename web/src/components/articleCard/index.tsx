import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { sx } from "./articleCardCss";

export function ArticleCard(): JSX.Element {
	async function handleCardClick() {
		console.log("click");
	}
	return (
		<Card onClick={handleCardClick} sx={sx.container}>
			<CardMedia />
			<CardContent>
				<Typography variant="h3">Title</Typography>
				<Typography variant="subtitle1">Snippet</Typography>
			</CardContent>
		</Card>
	);
}
