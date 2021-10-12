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
	},
	summary: {
		backgroundColor: "secondary.light",
		color: "primary.dark",
	},
};
