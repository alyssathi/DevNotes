import { useState } from "react";
import { createContainer } from "unstated-next";

//can call any of these exports outside of the React Functional Component directly from this file
export interface IArticle {
	id: string | null;
	title: string | null;
	date_created: string | null;
	body: string | null;
	category: string | null;
	is_published: boolean | null;
}

function ContextDataContainer() {
	const [publicArticles, setPublicArticles] = useState<IArticle>({
		id: null,
		title: null,
		date_created: null,
		body: null,
		category: null,
		is_published: null,
	});

	const [allArticles, setAllArticles] = useState<IArticle>({
		id: null,
		title: null,
		date_created: null,
		body: null,
		category: null,
		is_published: null,
	});

	return {
		publicArticles,
		setPublicArticles,
		allArticles,
		setAllArticles,
	};
}

export const ContextContainer = createContainer(ContextDataContainer);
