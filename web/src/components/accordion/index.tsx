import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ContextContainer } from "../../utils/contextContainer";
import { ArticleList } from "..";

//we want to fetch our unique categories from the db and display those names as our accordion summary with the use of a map function and in the accordion details we will map through each of the articles and display those cards. The default view will be open

//useEffect to get get all article data, to be passed down to article list and card... may want to use a custom hook to fetch articles- many components will use it- and expansion to something like article search will be much easier

export function SimpleAccordion() {
	const { categories } = ContextContainer.useContainer();
	return (
		<>
			{categories.map((category, i) => {
				return (
					<>
						<Accordion defaultExpanded>
							<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
								<Typography>{category}</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<ArticleList />
							</AccordionDetails>
						</Accordion>
					</>
				);
			})}
		</>
	);
}
