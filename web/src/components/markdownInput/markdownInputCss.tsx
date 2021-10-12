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
		width: "100%",
	},
	category: {
		display: "flex",
		alignItems: "center",
		marginBottom: "1rem",
	},
});
