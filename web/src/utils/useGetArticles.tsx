import { useEffect } from "react";
import { IArticle, ContextContainer } from "../utils/contextContainer";

//this is a custom hook designed to be called at the beginning of each page to allow current User state and info to be persisted across refreshes.
export function usePublicArticles() {
	const { setPublicArticles } = ContextContainer.useContainer();

	// this useEffect will run on every reload of the page component only
	useEffect(() => {
		let isMounted = true;
		(async () => {
			try {
				const response = await fetch("/api/get-articles", {
					method: "GET",
					headers: { "content-type": "application/json" },
				});
				const data: IArticle[] = await response.json();
				if (isMounted) {
					setPublicArticles(data);
				}
			} catch (err) {
				console.error(err);
			}
		})();

		return () => {
			isMounted = false;
		};
	}, [setPublicArticles]);
}

export function useAllArticles() {
	const { setAllArticles } = ContextContainer.useContainer();

	// this useEffect will run on every reload of the page component only
	useEffect(() => {
		let isMounted = true;
		(async () => {
			try {
				const response = await fetch("/api/get-all-articles", {
					method: "GET",
					headers: { "content-type": "application/json" },
				});
				const data: IArticle[] = await response.json();
				if (isMounted) {
					setAllArticles(data);
				}
			} catch (err) {
				console.error(err);
			}
		})();

		return () => {
			isMounted = false;
		};
	}, [setAllArticles]);
}
