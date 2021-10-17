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
		minHeight: "200px",
		minWidth: "325px",
		maxWidth: "300px",
		margin: ".5rem",
	},
	body: {
		maxHeight: "4rem",
		lineHeight: "1.2rem",
	},
};
