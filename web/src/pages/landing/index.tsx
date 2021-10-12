import React from "react";
import { Layout, SimpleAccordion } from "../../components";
import { usePublicArticles } from "../../utils/useGetArticles";
import { useGetCategories } from "../../utils/useGetCategories";

export function Landing() {
	usePublicArticles();
	useGetCategories();
	return (
		<Layout>
			<div>
				<SimpleAccordion />
			</div>
		</Layout>
	);
}
