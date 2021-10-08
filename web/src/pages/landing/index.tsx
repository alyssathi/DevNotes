import React from "react";
import { SimpleAccordion, ArticleCard, ArticleList, ArticleTable, Layout } from "../../components";

export function Landing() {
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
