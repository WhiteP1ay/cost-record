import { useState } from 'react';

const useInput = () => {
	const [value, setValue] = useState('');
	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};
	return {
		value,
		setValue,
		onChange,
	};
};

export default useInput;
