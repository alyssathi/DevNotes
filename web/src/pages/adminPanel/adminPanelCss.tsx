import { SxProps, Theme } from "@mui/system";

interface ISX {
	container: SxProps<Theme>;
	fab: SxProps<Theme>;
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
};
