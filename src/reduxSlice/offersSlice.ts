import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { RootState } from 'App/store';
import {Offer} from 'services/offer.types.ts';

export const fetchOffers = createAsyncThunk('offers/fetchOffers', async () => {
	const response = await axios.get(
		'http://deayloop.backend.test.starway.agency:8002/api/offers/all/'
	);
	return response.data;
});

 export interface OffersState {
	offers: Offer[];
	status: 'idle' | 'loading' | 'succeeded' | 'failed';
	error: string | null;
	pending?: boolean;
}

const initialState: OffersState = {
	offers: [],
	status: 'idle',
	error: null,
};

const offersSlice = createSlice({
	name: 'offers',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchOffers.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchOffers.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.offers = action.payload;
			})
			.addCase(fetchOffers.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message ?? 'Unknown error';
			});
	},
});

export const selectOffers = (state: RootState) => state.offers.offers;

export default offersSlice.reducer;
