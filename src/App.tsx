import AddCategory from '@/sections/Category/AddCategory';
import { SnackbarProvider } from 'notistack';

const App = () => (
	<section className='w-screen h-screen bg-slate-200'>
		<AddCategory></AddCategory>
		<SnackbarProvider
			anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
		></SnackbarProvider>
	</section>
);

export default App;
