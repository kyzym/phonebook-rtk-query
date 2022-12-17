import { configureStore } from '@reduxjs/toolkit';
import { contactsRtkSliceAPI } from './contactsRtkSlice';
// import { contactsReducer } from './contactsSlice';

// import { filterReducer } from './filtersSlice';

export const store = configureStore({
  reducer: { [contactsRtkSliceAPI.reducerPath]: contactsRtkSliceAPI.reducer },

  tagTypes: ['Contact'],

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsRtkSliceAPI.middleware,
  ],
});

// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     filter: filterReducer,
//   },
// });
