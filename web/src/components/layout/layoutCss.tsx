import { makeStyles } from "@mui/styles";
import { SxProps, Theme } from "@mui/system";

interface ISX {
	header: SxProps<Theme>;
	typography: SxProps<Theme>;
	logo: SxProps<Theme>;
	footer: SxProps<Theme>;
}

export const sx: ISX = {
	typography: {
		typography: "subtitle1",
	},
	header: {
		display: "flex",
		justifyContent: "space-between",
		height: "57px",
	},
	logo: {
		"&:hover": { cursor: "pointer" },
	},
	footer: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		bgcolor: "primary.main",
		color: "white",
	},
};

export const useStyles = makeStyles({
	footer_links: {
		display: "flex",
	},
	footer_link: {
		textDecoration: "none",
		margin: ".5rem",
		"&:visited": { color: "white" },
	},
	main: {
		marginTop: "64px",
		minHeight: "90vh",
	},
});
