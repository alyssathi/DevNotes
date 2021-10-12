import React from "react";
import { ArticleCard, Layout, SimpleAccordion } from "../../components";
import { usePublicArticles } from "../../utils/useGetArticles";
import { useGetCategories } from "../../utils/useGetCategories";

export function Landing() {
	usePublicArticles();
	useGetCategories();
	return (
		<Layout>
			<div>
				<SimpleAccordion />
				<ArticleCard />
			</div>
		</Layout>
	);
}
