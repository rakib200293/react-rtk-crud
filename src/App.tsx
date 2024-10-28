import { createBrowserRouter, Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import { Provider } from 'react-redux';
import { store } from './app/store.ts';
import Read from './components/Read.tsx';
import Create from './components/Create.tsx';

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
				element: <Create />,
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
