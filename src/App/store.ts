import { configureStore } from '@reduxjs/toolkit';
import offersReducer from 'reduxSlice/offersSlice.ts';

const store = configureStore({
	reducer: {
		offers: offersReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
