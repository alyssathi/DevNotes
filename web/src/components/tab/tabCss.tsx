import { SxProps, Theme } from "@mui/system";

interface ISX {
	container: SxProps<Theme>;
	typography: SxProps<Theme>;
}

export const sx: ISX = {
	container: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-around",
	},
	typography: {
		typography: "subtitle1",
	},
};
