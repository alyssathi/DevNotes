import React from "react";
import { ArticleCard, ArticleList, Layout, SimpleAccordion } from "../../components";
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
			</div>
		</Layout>
	);
}
