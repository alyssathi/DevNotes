import { useState } from "react";
import { createContainer } from "unstated-next";

//can call any of these exports outside of the React Functional Component directly from this file
export interface IArticle {
	id: string | null;
	title: string | null;
	date_created: string | null;
	body: string;
	description: string;
	category: string | null;
	is_published?: boolean | null;
}

export type categorytype = string | null;

function ContextDataContainer() {
	const [loggedIn, setLoggedIn] = useState<boolean>(false);
	const [publicArticles, setPublicArticles] = useState<IArticle[]>([]);
	const [allArticles, setAllArticles] = useState<IArticle[]>([]);
	const [categories, setCategories] = useState<categorytype[]>([]);

	return {
		publicArticles,
		setPublicArticles,
		allArticles,
		setAllArticles,
		categories,
		setCategories,
		loggedIn,
		setLoggedIn,
	};
}

export const ContextContainer = createContainer(ContextDataContainer);
