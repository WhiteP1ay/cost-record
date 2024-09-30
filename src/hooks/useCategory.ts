import { useAtom } from 'jotai';
import { categoryListAtom } from '@/store/category';

import {
	MAX_CATEGORY_COUNT,
	MAX_CATEGORY_NAME_LENGTH,
	MAX_CATEGORY_NAME_LENGTH_ERROR,
	MAX_CATEGORY_MATCH_LENGTH,
	MAX_CATEGORY_MATCH_LENGTH_ERROR,
} from '@/constants';

import useInput from '@/hooks/useInput';

import { enqueueSnackbar } from 'notistack';

const useAddCategory = () => {
	const [categoryList, setCategoryList] = useAtom(categoryListAtom);

	const {
		onChange: onNameChange,
		value: nameValue,
		setValue: setNameValue,
	} = useInput();
	const {
		onChange: onMatchChange,
		value: MatchValue,
		setValue: setMatchValue,
	} = useInput();

	const addButtonDiasbled =
		nameValue.trim().length === 0 || MatchValue.trim().length === 0;

	const handleAddCategory = (callback?: () => void) => {
		if (categoryList.length >= MAX_CATEGORY_COUNT) return;

		// 分类名称长度校验
		if (nameValue.length > MAX_CATEGORY_NAME_LENGTH) {
			enqueueSnackbar(MAX_CATEGORY_NAME_LENGTH_ERROR);
			return;
		}

		//分类匹配长度校验
		if (MatchValue.length > MAX_CATEGORY_MATCH_LENGTH) {
			enqueueSnackbar(MAX_CATEGORY_MATCH_LENGTH_ERROR);
			return;
		}

		const _match = MatchValue.split(' ').map((item) => item.trim());
		setCategoryList([
			...categoryList,
			{
				name: nameValue,
				id: categoryList.length + 1,
				match: _match,
			},
		]);

		setNameValue('');
		setMatchValue('');
		callback?.();
	};

	const handleDeleteCategory = (id: number) => {
		setCategoryList(categoryList.filter((item) => item.id !== id));
	};

	return {
		addButtonDiasbled,
		nameValue,
		onNameChange,
		MatchValue,
		onMatchChange,
		categoryList,
		handleAddCategory,
		handleDeleteCategory,
		shouldShowAddCategory: categoryList.length < MAX_CATEGORY_COUNT,
	};
};

export default useAddCategory;
