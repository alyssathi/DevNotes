import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
	header: {
		display: "flex",
		justifyContent: "space-between",
	},
	main: {
		marginTop: "4.5rem",
		minHeight: "90vh",
	},
	button: {
		margin: ".5rem",
	},
	logo: {
		"&:hover": { cursor: "pointer" },
	},
	footer: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	},
	footer_links: {
		display: "flex",
	},
	footer_link: {
		textDecoration: "none",
		margin: ".5rem",
		"&:visited": { color: "white" },
	},
});
