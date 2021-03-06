import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Layout } from "../../components";
import { IArticle } from "../../utils/contextContainer";
import { useGetArticle } from "../../utils/useGetArticle";
import { sx } from "./articleCss";

export function Article() {
	// const params = new URLSearchParams(paramString);
	const queryString = window.location.search;
	const param = new URLSearchParams(queryString);
	const id = param.get("id");
	const [article, setArticle] = useState<IArticle>();

	useGetArticle(id, setArticle);

	return (
		<Layout>
			<Box sx={sx.containers}>
				<Box sx={sx.container}>
					<Typography sx={sx.title} variant="h1" color="secondary">
						{article?.title}
					</Typography>
					<Box sx={sx.info}>
						<Typography variant="subtitle1">
							<b>Published:</b> {article?.date_created}
						</Typography>
						<Typography variant="subtitle1">
							<b>Category:</b> {article?.category}
						</Typography>
					</Box>
					<Box sx={sx.bodyContainer}>
						<Typography variant="body1">
							<ReactMarkdown children={article ? article.body : ""} remarkPlugins={[remarkGfm]} />
						</Typography>
					</Box>
				</Box>
			</Box>
		</Layout>
	);
}
