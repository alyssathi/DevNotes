import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
	form: {
		border: "lightgrey 1px solid",
		borderRadius: ".5rem",
		padding: "1rem",
		margin: "2rem",
		minHeight: "20rem",
		minWidth: "500px",
		maxWidth: "90vw",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
	},
	container: {
		textAlign: "center",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		minHeight: "90vh",
	},
});
