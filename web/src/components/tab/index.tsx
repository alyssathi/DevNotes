import * as React from "react";
import { ContextContainer } from "../../utils/contextContainer";
import { ArticleCard, ArticleList } from "..";
import { usePublicArticles } from "../../utils/useGetArticles";
import { sx } from "./tabCss";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

export function Tabs() {
	usePublicArticles();
	const { publicArticles, categories } = ContextContainer.useContainer();
	const [value, setValue] = React.useState("All");

	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(newValue);
	};

	if (publicArticles === null) return null;
	return (
		<Box sx={{ width: "100%" }}>
			<TabContext value={value}>
				<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
					<TabList onChange={handleChange} aria-label="lab API tabs example">
						<Tab label="All" value="All" sx={sx.typography} />
						{categories.map((category) => {
							return <Tab label={category} sx={sx.typography} value={category} />;
						})}
					</TabList>
				</Box>
				<TabPanel sx={sx.container} value="All">
					{publicArticles.map((article) => {
						return (
							<ArticleCard
								key={article.id}
								id={article.id}
								title={article.title}
								body={article.body}
								category={article.category}
								description={article.description}
								date_created={article.date_created}
							/>
						);
					})}
				</TabPanel>
				{categories.map((category) => {
					return <TabPanel value={category as string}>{<ArticleList category={category} />}</TabPanel>;
				})}
			</TabContext>
		</Box>
	);
}
