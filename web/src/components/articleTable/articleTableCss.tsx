import { SxProps, Theme } from "@mui/system";

interface ISX {
	actionContainer: SxProps<Theme>;
	head: SxProps<Theme>;
	even: SxProps<Theme>;
	odd: SxProps<Theme>;
	container: SxProps<Theme>;
	edit: SxProps<Theme>;
}

export const sx: ISX = {
	actionContainer: {
		display: "flex",
	},
	head: {
		backgroundColor: "primary.dark",
		color: "white",
		fontSize: "1.2rem",
		textAlign: "center",
		typography: "subtitle1",
	},
	even: {
		backgroundColor: "primary.light",
		minWidth: "7rem",
	},
	odd: {
		backgroundColor: "primary.main",
		minWidth: "7rem",
	},
	container: {
		maxWidth: "95vw",
		borderRadius: ".5rem",
		marginBottom: "2.5rem",
	},
	edit: {
		color: "primary.dark",
	},
};
