import React, { useEffect, useState } from "react";
import { IArticle } from "../../utils/contextContainer";

export function Article() {
	// const params = new URLSearchParams(paramString);
	const queryString = window.location.search;
	const param = new URLSearchParams(queryString);
	const id = param.get("id");
	const [article, setArticle] = useState<IArticle | null>(null);

	useEffect(() => {
		let isMounted = true;
		(async () => {
			try {
				const response = await fetch(`/api/get-article/${id}`, {
					method: "GET",
					headers: { "content-type": "application/json" },
				});
				const data: IArticle = await response.json();
				if (isMounted) {
					setArticle(data);
					console.log(data);
				}
			} catch (err) {
				console.error(err);
			}
		})();

		return () => {
			isMounted = false;
		};
	}, []);
	return (
		<div>
			<h1>{article?.title}</h1>
			<h1>{article?.date_created?.toString()}</h1>
			<p>{article?.body}</p>
		</div>
	);
}
