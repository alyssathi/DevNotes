import { SxProps, Theme } from "@mui/system";

interface ISX {
	title: SxProps<Theme>;
	bodyContainer: SxProps<Theme>;
	info: SxProps<Theme>;
	container: SxProps<Theme>;
}

export const sx: ISX = {
	title: {
		textAlign: "center",
	},
	info: {
		width: "100%",
		display: "flex",
		justifyContent: "space-around",
		marginBottom: "1rem",
	},
	bodyContainer: {
		minWidth: "75%",
		maxWidth: "100%",
	},
	container: {
		maxWidth: "100%",
		margin: ".5rem",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
};
