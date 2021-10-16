import { IconButton, Modal } from "@mui/material";
import { Box } from "@mui/system";
import { truncate } from "fs";
import React from "react";
import { sx } from "./modalCss";

interface ISimpleModalProps {
	children: JSX.Element;
	buttonName: any;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	open: boolean;
}

export function SimpleModal({ children, buttonName, open, setOpen }: ISimpleModalProps): JSX.Element {
	return (
		<div>
			<IconButton onClick={() => setOpen(true)}>{buttonName}</IconButton>
			<Modal sx={sx.container} open={open} onClose={() => setOpen(false)} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description">
				<Box sx={sx.children}>{children}</Box>
			</Modal>
		</div>
	);
}
