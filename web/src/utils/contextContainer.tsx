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
	const [publicArticles, setPublicArticles] = useState<IArticle[]>([]);

	const [allArticles, setAllArticles] = useState<IArticle[]>([]);

	return {
		publicArticles,
		setPublicArticles,
		allArticles,
		setAllArticles,
	};
}

export const ContextContainer = createContainer(ContextDataContainer);
