import { SxProps, Theme } from "@mui/system";

interface ISX {
	container: SxProps<Theme>;
	fab: SxProps<Theme>;
	title: SxProps<Theme>;
}

export const sx: ISX = {
	container: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",
	},
	fab: {
		position: "fixed",
		bottom: "3rem",
		right: "20px",
	},
	title: {
		display: "flex",
		padding: "1rem",
		width: "100%",
		justifyContent: "space-between",
		alignItems: "end",
	},
};
