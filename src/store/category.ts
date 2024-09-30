import { atom } from 'jotai';

type Category = {
	name: string;
	id: number;
	match: string[];
};

export const categoryListAtom = atom<Category[]>([]);


