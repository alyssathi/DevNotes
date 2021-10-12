import { SxProps, Theme } from "@mui/system";

interface ISX {
	container: SxProps<Theme>;
	body: SxProps<Theme>;
}

export const sx: ISX = {
	container: {
		"&:hover": {
			cursor: "pointer",
		},
		maxHeight: "150px",
		maxWidth: "300px",
		margin: ".5rem",
	},
	body: {
		maxHeight: "4rem",
	},
};
