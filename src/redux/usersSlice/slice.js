import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const carsApi = createApi({
    reducerPath: 'rentalCars',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://64febc3ff8b9eeca9e28fc9c.mockapi.io/' }),
    tagTypes: ['rentalCars'],
    endpoints: (builder) => ({
        getCars: builder.query({
            query: () => `rentalCars`,
            providesTags: (result,error,page) => result
                ? [
                    ...result.map(({ id }) => ({ type: 'rentalCars', id })),
                    { type: 'rentalCars', id: 'LIST' },
                ]
                : [{ type: 'rentalCars', id: 'LIST' }],
        }),
    }),
});

export const { useGetCarsQuery } = carsApi;
