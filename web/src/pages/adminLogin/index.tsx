import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import { Layout } from "../../components";
import { useStyles } from "./adminLoginCss";

export function AdminLogin() {
	const css = useStyles();
	async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		console.log("login");
	}
	return (
		<Layout>
			<div className={css.container}>
				<div>
					<Typography variant="h1">Welcome back, Alyssa!</Typography>
					<Typography variant="subtitle1">If you are not Alyssa, please leave and go back to enjoying her wonderful notes.</Typography>
				</div>

				<form onSubmit={handleLogin} className={css.form}>
					<Typography variant="subtitle1">But if you are Alyssa...</Typography>
					<Typography variant="h2" color="primary">
						Login, Gorgeous!
					</Typography>
					<TextField fullWidth label="Username" />
					<TextField fullWidth label="Password" />
					<Button variant="contained" color="secondary" fullWidth type="submit">
						Submit
					</Button>
				</form>
			</div>
		</Layout>
	);
}
