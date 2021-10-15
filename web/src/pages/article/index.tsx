import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Layout } from "../../components";
import { IArticle } from "../../utils/contextContainer";

export function Article() {
	// const params = new URLSearchParams(paramString);
	const queryString = window.location.search;
	const param = new URLSearchParams(queryString);
	const id = param.get("id");
	const [article, setArticle] = useState<IArticle | null>(null);
	var hdate = require("human-date");

	useEffect(() => {
		let isMounted = true;
		(async () => {
			try {
				const response = await fetch(`/api/get-article/${id}`, {
					method: "GET",
					headers: { "content-type": "application/json" },
				});
				const data: IArticle = await response.json();
				if (isMounted) {
					setArticle(data);
					console.log(data);
				}
			} catch (err) {
				console.error(err);
			}
		})();

		return () => {
			isMounted = false;
		};
	}, []);
	return (
		<Layout>
			<Box>
				<Typography variant="h1">{article?.title}</Typography>
				<Typography variant="subtitle1">{article ? hdate.prettyPrint(article.date_created) : null}</Typography>
				<Typography variant="body1">{article?.body}</Typography>
			</Box>
		</Layout>
	);
}
