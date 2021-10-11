import { Box, Typography } from "@mui/material";
import React from "react";
import { sx } from "./adminPanelCss";

import { ArticleTable, Layout } from "../../components";

export function AdminPanel() {
	return (
		<Layout>
			<Box sx={sx.container}>
				<Typography variant="h3">Admin Panel</Typography>
				<ArticleTable />
			</Box>
		</Layout>
	);
}
