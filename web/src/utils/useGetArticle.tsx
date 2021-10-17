import { useEffect } from "react";
import { IArticle } from "./contextContainer";

export function useGetArticle(
	id: string | null,
	setArticle: React.Dispatch<React.SetStateAction<IArticle | undefined>>,
	setCategory?: React.Dispatch<React.SetStateAction<string | undefined>>,
) {
	useEffect(() => {
		let isMounted = true;
		if (id === null) {
			const data: IArticle = {
				id: null,
				title: "",
				date_created: null,
				body: "",
				description: "",
				category: "",
			};
			setArticle(data);
			return;
		}
		(async () => {
			try {
				const response = await fetch(`/api/get-article/${id}`, {
					method: "GET",
					headers: { "content-type": "application/json" },
				});
				const data: IArticle = await response.json();
				if (isMounted) {
					setArticle(data);
					if (setCategory) {
						setCategory(data.category);
					}
				}
			} catch (err) {
				console.error(err);
			}
		})();

		return () => {
			isMounted = false;
		};
	}, [id]);
}
