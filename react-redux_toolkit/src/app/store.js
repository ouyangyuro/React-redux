import { configureStore } from '@reduxjs/toolkit';
import reservationsReducer from '../features/reservationSlice';
import customersReducer from '../features/customerSlice';
import apiReducer from '../features/apiSlice';

export const store = configureStore({
  reducer: {
    reservations: reservationsReducer,
    customers: customersReducer,
    postsApi: apiReducer,
  },
});
