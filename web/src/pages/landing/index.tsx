import React from "react";
import { SimpleAccordion, ArticleCard, ArticleList, ArticleTable, Layout } from "../../components";
import { usePublicArticles } from "../../utils/useGetArticles";

export function Landing() {
	usePublicArticles();
	return (
		<Layout>
			<div>
				Components
				<SimpleAccordion />
				<ArticleCard />
				<ArticleList />
				<ArticleTable />
			</div>
		</Layout>
	);
}
