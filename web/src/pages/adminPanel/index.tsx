import { Box, Button, Fab, Typography } from "@mui/material";
import React from "react";
import { sx } from "./adminPanelCss";
import AddIcon from "@mui/icons-material/Add";

import { ArticleTable, Layout } from "../../components";
import { useHistory } from "react-router";
import { ContextContainer } from "../../utils/contextContainer";

export function AdminPanel() {
	const history = useHistory();
	const { setLoggedIn } = ContextContainer.useContainer();

	async function handleLogout() {
		try {
			const response = await fetch("/api/logout-user");

			const data = await response.json();
			if (data === 200) {
				setLoggedIn(false);
				history.push("/adminLogin");
			}
		} catch (err) {
			console.log(err);
		}
	}

	return (
		<Layout>
			<Box sx={sx.container}>
				<Box sx={sx.title}>
					<Typography variant="h2" color="secondary">
						Admin Panel
					</Typography>
					<Button variant="outlined" sx={sx.logout} onClick={handleLogout}>
						Logout
					</Button>
				</Box>

				<ArticleTable />
				<Fab color="secondary" sx={sx.fab} onClick={() => history.push("/adminEditor")}>
					<AddIcon color="primary" />
				</Fab>
			</Box>
		</Layout>
	);
}
