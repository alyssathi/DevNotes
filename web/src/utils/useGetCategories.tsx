import { useEffect } from "react";
import { ContextContainer } from "./contextContainer";

export function useGetCategories() {
	const { categories, setCategories } = ContextContainer.useContainer();
	useEffect(() => {
		let isMounted = true;
		(async () => {
			try {
				const response = await fetch("/api/get-categories", {
					method: "GET",
					headers: { "content-type": "application/json" },
				});
				const data: [] = await response.json();
				if (isMounted) {
					setCategories(data);
				}
			} catch (err) {
				console.error(err);
			}
		})();

		return () => {
			isMounted = false;
		};
	}, [categories, setCategories]);
}
