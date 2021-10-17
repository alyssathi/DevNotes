import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { sx, useStyles } from "./layoutCss";

function Header(): JSX.Element {
	const history = useHistory();
	return (
		<AppBar>
			<Toolbar sx={sx.header}>
				<Box onClick={() => history.push("/")} sx={sx.logo}>
					<Typography color="secondary" variant="h1">
						DevNotes
					</Typography>
				</Box>
				<Box>
					<Button disableRipple color="secondary" onClick={() => history.push("/adminLogin")} sx={sx.typography} variant="outlined">
						Admin
					</Button>
				</Box>
			</Toolbar>
		</AppBar>
	);
}
function Footer(): JSX.Element {
	const css = useStyles();
	return (
		<Box sx={sx.footer}>
			<Typography color="secondary" variant="subtitle1">
				Copyright Alyssa Thi 2021
			</Typography>
			<Box className={css.footer_links}>
				<Link className={css.footer_link} to={{ pathname: "https://github.com/alyssathi" }} target="_blank">
					<Typography color="secondary" variant="subtitle1">
						Alyssa's Github
					</Typography>
				</Link>
				<Link className={css.footer_link} to={{ pathname: "https:alyssathi.dev" }} target="_blank">
					<Typography color="secondary" variant="subtitle1">
						Alyssa's Portfolio
					</Typography>
				</Link>
			</Box>
		</Box>
	);
}

interface ILayoutProps {
	children: JSX.Element;
}
export function Layout({ children }: ILayoutProps) {
	const css = useStyles();
	return (
		<body>
			<header>
				<Header />
			</header>
			<main className={css.main}>{children}</main>
			<footer>
				<Footer />
			</footer>
		</body>
	);
}
