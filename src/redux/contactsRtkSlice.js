import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsRtkSliceAPI = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6391d4eeb750c8d178cebc75.mockapi.io',
  }),
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Contact'],
    }),

    addContact: builder.mutation({
      query: contacts => ({
        url: '/contacts',
        method: 'POST',
        body: contacts,
      }),
      invalidatesTags: ['Contact'],
    }),
    // addContact: builder.mutation({
    //   query: ({ name, phone }) => ({
    //     url: '/contacts',
    //     method: 'POST',
    //     body: { name, phone },
    //   }),
    //   invalidatesTags: ['Contact'],
    // }),
  }),
});

export const { useGetContactsQuery, useAddContactMutation } =
  contactsRtkSliceAPI;
