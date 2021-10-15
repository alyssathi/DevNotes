import React from "react";
import { Modal, Button, IconButton } from "@mui/material";
import { sx } from "./modalCss";
import { Box } from "@mui/system";

interface ISimpleModalProps {
	children: JSX.Element;
	buttonName: any;
	buttonColor?: "primary" | "secondary" | "default" | "inherit";
	buttonVariant?: "text" | "outlined" | "contained";
}

export function SimpleModal({ children, buttonName, buttonVariant }: ISimpleModalProps): JSX.Element {
	const [open, setOpen] = React.useState<boolean>(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<IconButton onClick={handleOpen}>{buttonName}</IconButton>
			<Modal sx={sx.container} open={open} onClose={handleClose} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description">
				<Box sx={sx.children}>{children}</Box>
			</Modal>
		</div>
	);
}
