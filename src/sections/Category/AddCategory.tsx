import { Button, Chip, Tooltip } from '@mui/material';
import useAddCategory from '@/hooks/useCategory';
import useDialogShow from '@/hooks/useDialogShow';
import AddCategoryDialog from '@/sections/Dialog/AddCategory';

const AddCategory = () => {
	const { categoryList, handleDeleteCategory } = useAddCategory();
	const { show, onClose, showDialog } = useDialogShow();

	return (
		<>
			<AddCategoryDialog open={show} onClose={onClose}></AddCategoryDialog>
			<section className='p-5 bg-white flex items-center rounded-md'>
				<Button variant='contained' onClick={showDialog}>
					添加分类
				</Button>

				<section className='ml-5 flex gap-2 flex-wrap'>
					{categoryList.map((item) => {
						return (
							<Tooltip
								key={item.id}
								title={'匹配关键字: ' + item.match.join(' ')}
							>
								<Chip
									variant='outlined'
									label={item.name}
									onDelete={() => handleDeleteCategory(item.id)}
								></Chip>
							</Tooltip>
						);
					})}
				</section>
			</section>
		</>
	);
};

export default AddCategory;
