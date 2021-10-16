import React from "react";
import { Layout, Tabs } from "../../components";
import { usePublicArticles } from "../../utils/useGetArticles";
import { useGetCategories } from "../../utils/useGetCategories";

export function Landing() {
	usePublicArticles();
	useGetCategories();
	return (
		<Layout>
			<>
				<Tabs />
			</>
		</Layout>
	);
}
