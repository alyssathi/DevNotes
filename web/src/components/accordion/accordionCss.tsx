import { SxProps, Theme } from "@mui/system";

interface ISX {
	container: SxProps<Theme>;
}

export const sx: ISX = {
	container: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-between",
	},
};
