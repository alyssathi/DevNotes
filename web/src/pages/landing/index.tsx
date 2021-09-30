import React from "react";
import { Accordion, ArticleCard, ArticleList, ArticleTable, MarkdownInput, Modals, Layout } from "../../components";

export function Landing() {
	return (
		<Layout>
			<div>
				Components
				<Accordion />
				<ArticleCard />
				<ArticleList />
				<ArticleTable />
				<MarkdownInput />
				<Modals />
			</div>
		</Layout>
	);
}
