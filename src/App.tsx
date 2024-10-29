import { createBrowserRouter, Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import { Provider } from 'react-redux';
import { store } from './app/store.ts';
import Read from './components/Read.tsx';
import AddEdit from './components/AddEdit.tsx';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Read />,
			},
			{
				path: '/create',
				element: <AddEdit />,
			},
			{
				path: '/edit/:id',
				element: <AddEdit />,
			},
		],
	},
]);

function App() {
	return (
		<Provider store={store}>
			<Header />
			<Outlet />
		</Provider>
	);
}

export default App;
