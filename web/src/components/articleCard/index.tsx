import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { useHistory } from "react-router";
import { IArticle } from "../../utils/contextContainer";
import { sx } from "./articleCardCss";

export function ArticleCard({ title, body, id, description, date_created, category }: IArticle): JSX.Element {
	const history = useHistory();
	async function handleCardClick() {
		history.push(`/article?id=${id}`);
	}
	return (
		<Card onClick={handleCardClick} sx={sx.container}>
			<CardMedia />
			<CardContent>
				<Typography variant="h2">
					{category}: {title}
				</Typography>
				<Typography sx={sx.body}>{description}</Typography>
			</CardContent>
		</Card>
	);
}
