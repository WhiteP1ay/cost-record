import {
	Dialog,
	DialogTitle,
	DialogContent,
	TextField,
	Button,
} from '@mui/material';
import useCategory from '@/hooks/useCategory';

interface Props {
	open: boolean;
	onClose: () => void;
}

const AddCategoryDialog = (props: Props) => {
	const { open, onClose } = props;

	const {
		MatchValue,
		nameValue,
		onMatchChange,
		onNameChange,
		addButtonDiasbled,
		handleAddCategory,
	} = useCategory();

	return (
		<>
			<Dialog open={open} onClose={onClose}>
				<DialogTitle>添加分类</DialogTitle>
				<DialogContent className='flex flex-col gap-10'>
					<TextField
						required
						className='mt-5 w-96'
						label='分类名称'
						value={nameValue}
						onChange={onNameChange}
					></TextField>
					<TextField
						label='匹配关键字'
            className='w-96'
						helperText='多个关键字用空格隔开'
						value={MatchValue}
						onChange={onMatchChange}
						required
					></TextField>
					<div className='w-full flex justify-end'>
						<Button
							variant='contained'
							className='w-20'
							disabled={addButtonDiasbled}
							onClick={()=>handleAddCategory(onClose)}
						>
							添加
						</Button>
					</div>
				</DialogContent>
			</Dialog>
		</>
	);
};

export default AddCategoryDialog;
