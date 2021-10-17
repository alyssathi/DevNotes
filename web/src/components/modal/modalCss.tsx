import { SxProps, Theme } from "@mui/system";

interface ISX {
	children: SxProps<Theme>;
	container: SxProps<Theme>;
}

export const sx: ISX = {
	children: {
		textAlign: "center",
		position: "absolute",
		width: "300px",
		padding: "1rem",
		backgroundColor: "primary.light",
		borderRadius: ".5rem",
	},
	container: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
};
