import { Box } from "@mui/system";
import React from "react";
import { ArticleCard } from "..";
import { categorytype, ContextContainer } from "../../utils/contextContainer";
import { usePublicArticles } from "../../utils/useGetArticles";
import { sx } from "./articleListCss";

interface IArticleListProps {
	category: categorytype;
}

export function ArticleList({ category }: IArticleListProps) {
	usePublicArticles();
	const { publicArticles } = ContextContainer.useContainer();
	if (publicArticles === null) return null;
	const categorizedArticles = publicArticles.filter((article) => {
		return article.category === category;
	});

	return (
		<Box sx={sx.container}>
			{categorizedArticles.map((article) => {
				return (
					<ArticleCard
						key={article.id}
						id={article.id}
						title={article.title}
						body={article.body}
						category={article.category}
						date_created={article.date_created}
					/>
				);
			})}
		</Box>
	);
}
