import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
	header: {
		display: "flex",
		justifyContent: "space-between",
		height: "57px",
	},
	main: {
		marginTop: "57px",
		minHeight: "90vh",
	},
	button: {},
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
