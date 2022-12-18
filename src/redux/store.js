import { configureStore } from '@reduxjs/toolkit';
import { contactsRtkSliceAPI } from './contactsRtkSlice';

import { filterReducer } from './filtersSlice';

export const store = configureStore({
  reducer: {
    [contactsRtkSliceAPI.reducerPath]: contactsRtkSliceAPI.reducer,
    filter: filterReducer,
  },

  tagTypes: ['Contact'],

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsRtkSliceAPI.middleware,
  ],
});
