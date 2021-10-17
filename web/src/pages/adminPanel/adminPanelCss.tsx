import { SxProps, Theme } from "@mui/system";

interface ISX {
	container: SxProps<Theme>;
	fab: SxProps<Theme>;
	title: SxProps<Theme>;
	logout: SxProps<Theme>;
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
		padding: "2rem 0 1.5rem 0",
		width: "95vw",
		justifyContent: "space-between",
		alignItems: "end",
	},
	logout: {
		color: "primary.dark",
		typography: "subtitle1",
	},
};
