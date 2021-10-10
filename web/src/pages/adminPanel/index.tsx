import React from "react";
import { useAllArticles } from "../../utils/useGetArticles";
import { ContextContainer } from "../../utils/contextContainer";

export function AdminPanel() {
	useAllArticles();

	const { allArticles } = ContextContainer.useContainer();
	console.log("all", allArticles);
	return (
		<div>
			<h1>Admin Panel</h1>
		</div>
	);
}
