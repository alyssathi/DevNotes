import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useStyles } from "./layoutCss";

function Header(): JSX.Element {
	const history = useHistory();
	const css = useStyles();
	return (
		<AppBar>
			<Toolbar className={css.header}>
				<div onClick={() => history.push("/")} className={css.logo}>
					<Typography color="secondary" variant="h3">
						DevNotes
					</Typography>
				</div>
				<div>
					<Button disableRipple color="secondary" onClick={() => history.push("/adminLogin")} variant="outlined" className={css.button}>
						Admin
					</Button>
				</div>
			</Toolbar>
		</AppBar>
	);
}
function Footer(): JSX.Element {
	const css = useStyles();
	return (
		<Box sx={{ bgcolor: "primary.main", color: "white" }} className={css.footer}>
			<Typography color="secondary">Copyright Alyssa Thi 2021</Typography>
			<div className={css.footer_links}>
				<Link className={css.footer_link} to={{ pathname: "https://github.com/alyssathi" }} target="_blank">
					<Typography color="secondary">Alyssa's Github</Typography>
				</Link>
				<Link className={css.footer_link} to={{ pathname: "https:alyssathi.dev" }} target="_blank">
					<Typography color="secondary">Alyssa's Portfolio</Typography>
				</Link>
			</div>
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
