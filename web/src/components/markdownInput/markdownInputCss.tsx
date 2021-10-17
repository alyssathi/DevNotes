import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
	container: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		maxWidth: "100%",
	},
	title: {
		minWidth: "70vw",
		marginBottom: "1rem",
	},
	body: {
		width: "95%",
	},
	description: {
		width: "95%",
	},
	category: {
		display: "flex",
		alignItems: "center",
		marginRight: "1rem",
	},
	categoryContainer: {
		display: "flex",
		alignItems: "center",
		marginBottom: "1rem",
	},
	form: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
});
