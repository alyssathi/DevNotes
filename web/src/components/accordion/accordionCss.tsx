import { SxProps, Theme } from "@mui/system";

interface ISX {
	container: SxProps<Theme>;
	summary: SxProps<Theme>;
}

export const sx: ISX = {
	container: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-between",
		backgroundColor: "secondary.light",
	},
	summary: {
		backgroundColor: "secondary.main",
		color: "primary.dark",
	},
};
