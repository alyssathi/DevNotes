import { Box, Fab, Typography } from "@mui/material";
import React from "react";
import { sx } from "./adminPanelCss";
import AddIcon from "@mui/icons-material/Add";

import { ArticleTable, Layout } from "../../components";
import { useHistory } from "react-router";

export function AdminPanel() {
	const history = useHistory();
	return (
		<Layout>
			<Box sx={sx.container}>
				<Typography variant="h3">Admin Panel</Typography>
				<ArticleTable />
				<Fab color="primary" sx={sx.fab} onClick={() => history.push("/adminEditor")}>
					<AddIcon color="secondary" />
				</Fab>
			</Box>
		</Layout>
	);
}
