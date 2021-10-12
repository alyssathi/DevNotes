import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { IArticle } from "../../utils/contextContainer";
import { sx } from "./articleCardCss";

export function ArticleCard({ title, body, id, date_created, category }: IArticle): JSX.Element {
	async function handleCardClick() {
		console.log("click");
	}
	return (
		<Card onClick={handleCardClick} sx={sx.container}>
			<CardMedia />
			<CardContent>
				<Typography variant="h6">
					{category}: {title}
				</Typography>
				<Typography variant="subtitle1" sx={sx.body}>
					{body}
				</Typography>
			</CardContent>
		</Card>
	);
}
