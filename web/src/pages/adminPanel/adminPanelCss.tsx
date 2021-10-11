import { SxProps, Theme } from "@mui/system";

interface ISX {
	container: SxProps<Theme>;
}

export const sx: ISX = {
	container: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",
	},
};
