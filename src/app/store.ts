import { configureStore } from '@reduxjs/toolkit';
import { studentApi } from '../features/studentSlice';

export const store = configureStore({
	reducer: {
		[studentApi.reducerPath]: studentApi.reducer,
	},
	middleware: (getDefaultMiddlewere) =>
		getDefaultMiddlewere().concat(studentApi.middleware),
});
