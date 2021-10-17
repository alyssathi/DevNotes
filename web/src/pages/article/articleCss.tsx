import { SxProps, Theme } from "@mui/system";

interface ISX {
	title: SxProps<Theme>;
	bodyContainer: SxProps<Theme>;
	info: SxProps<Theme>;
	container: SxProps<Theme>;
	containers: SxProps<Theme>;
}

export const sx: ISX = {
	title: {
		textAlign: "center",
		margin: "2rem",
	},
	info: {
		width: "100%",
		display: "flex",
		justifyContent: "space-around",
		marginBottom: "2rem",
	},
	bodyContainer: {
		width: ["100%", "100%", "90%"],
	},
	container: {
		width: ["100%", "90%", "80%"],
		margin: ".5rem",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	containers: {
		width: "100%",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
};
