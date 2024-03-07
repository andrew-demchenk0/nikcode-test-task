import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {RootState} from '../App/store.ts';

export const fetchOffers = createAsyncThunk('offers/fetchOffers', async () => {
	const response = await axios.get(
		'http://deayloop.backend.test.starway.agency:8002/api/offers/all/',
	);
	return response.data;
});

const offersSlice = createSlice({
	name: 'offers',
	initialState: {
		offers: [],
		status: 'idle',
		error: null,
	},
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
				state.error = action.error.message;
			});
	},
});

export const selectOffers = (state: RootState) => state.offers.offers;

export default offersSlice.reducer;
