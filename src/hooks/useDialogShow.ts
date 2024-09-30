import { useState } from 'react';

const useDialogShow = () => {
	const [show, setShow] = useState(false);

	const showDialog = () => {
		setShow(true);
	};
	const onClose = () => {
		setShow(false);
	};
	return {
		show,
		showDialog,
		onClose,
	};
};

export default useDialogShow;
