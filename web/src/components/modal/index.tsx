import { IconButton, Modal } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { sx } from "./modalCss";

interface ISimpleModalProps {
	children: JSX.Element;
	buttonName: any;
	setInputOpen?: React.Dispatch<React.SetStateAction<boolean>>;
	inputOpen?: boolean;
}

export function SimpleModal({ children, buttonName, inputOpen, setInputOpen }: ISimpleModalProps): JSX.Element {
	const [open, setOpen] = React.useState<boolean>(false);

	const handleOpen = () => {
		if (setInputOpen) {
			setInputOpen(true);
		} else {
			setOpen(true);
		}
	};

	const handleClose = () => {
		if (setInputOpen) {
			setInputOpen(false);
		} else {
			setOpen(false);
		}
	};

	return (
		<div>
			<IconButton onClick={handleOpen}>{buttonName}</IconButton>
			<Modal
				sx={sx.container}
				open={inputOpen !== undefined ? inputOpen : open}
				onClose={handleClose}
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
			>
				<Box sx={sx.children}>{children}</Box>
			</Modal>
		</div>
	);
}
