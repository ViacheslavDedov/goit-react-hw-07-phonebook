import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62fc9e2fb9e38585cd42364f.mockapi.io/',
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => '/contacts/',
      providesTags: ['Contacts'],
    }),
    addContact: builder.mutation({
      query: newContact => ({
        url: '/contacts/',
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: [{ type: 'Contacts' }],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Contacts' }],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useDeleteContactMutation,
  useAddContactMutation,
} = contactApi;