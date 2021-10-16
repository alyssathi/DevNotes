import { SxProps, Theme } from "@mui/system";

interface ISX {
	actionContainer: SxProps<Theme>;
	head: SxProps<Theme>;
	even: SxProps<Theme>;
	odd: SxProps<Theme>;
	container: SxProps<Theme>;
	modal: SxProps<Theme>;
}

export const sx: ISX = {
	actionContainer: {
		display: "flex",
	},
	head: {
		backgroundColor: "secondary.dark",
		color: "white",
		fontSize: "1.2rem",
		textAlign: "center",
	},
	even: {
		backgroundColor: "secondary.light",
		minWidth: "7rem",
	},
	odd: {
		backgroundColor: "secondary.main",
		minWidth: "7rem",
	},
	container: {
		maxWidth: "95vw",
		borderRadius: ".5rem",
		marginBottom: "2.5rem",
	},
	modal: {
		width: "300px",
		height: "150px",
	},
};
