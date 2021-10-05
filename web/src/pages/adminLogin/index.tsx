import { Button, TextField, Typography } from "@mui/material";
import React, { useRef } from "react";
import { Layout } from "../../components";
import { useStyles } from "./adminLoginCss";

export function AdminLogin() {
	const css = useStyles();
	const usernameRef = useRef<HTMLInputElement>();
	const passwordRef = useRef<HTMLInputElement>();
	async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		try {
			const response = await fetch("/api/login_user", {
				method: "POST",
				headers: { "content-type": "application/json" },
				body: JSON.stringify({
					username: usernameRef?.current?.value,
					password: passwordRef?.current?.value,
				}),
			});

			const data = await response.json();
			if (data) {
				console.log("yay");
			}
		} catch (err) {
			console.log(err);
		}
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
					<TextField fullWidth label="Username" inputRef={usernameRef} />
					<TextField fullWidth label="Password" inputRef={passwordRef} />
					<Button variant="contained" color="secondary" fullWidth type="submit">
						Submit
					</Button>
				</form>
			</div>
		</Layout>
	);
}
