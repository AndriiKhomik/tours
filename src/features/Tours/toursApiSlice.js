import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";

const toursAdapter = createEntityAdapter({
  sortComparer: (a, b) => (a.name === b.name ? 0 : a.name ? 1 : -1),
});

const initialState = toursAdapter.getInitialState();

export const toursApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTours: builder.query({
      query: () => ({
        url: "/tours",
        validateStatus: (response, result) => {
          return response.status === 200 && !result.isError;
        },
      }),
      transformResponse: (responseData) => {
        const loadedTours = responseData.map((tour) => {
          tour.id = tour._id;
          return tour;
        });
        return toursAdapter.setAll(initialState, loadedTours);
      },
      providesTags: (result, error, arg) => {
        if (result?.ids) {
          return [
            { type: "Tour", id: "LIST" },
            ...result.ids.map((id) => ({ type: "Tour", id })),
          ];
        } else return [{ type: "Tour", id: "LIST" }];
      },
    }),
    addNewTour: builder.mutation({
      query: (initialTour) => ({
        url: "/tours",
        method: "POST",
        body: {
          ...initialTour,
        },
      }),
      invalidatesTags: [{ type: "Tour", id: "LIST" }],
    }),
    updateTour: builder.mutation({
      query: (initialTour) => ({
        url: "/tours",
        method: "PATCH",
        body: {
          ...initialTour,
        },
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Tour", id: arg.id }],
    }),
    deleteTour: builder.mutation({
      query: ({ id }) => ({
        url: "/tours",
        method: "DELETE",
        body: { id },
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Tour", id: arg.id }],
    }),
    addMark: builder.mutation({
      query: (tour) => ({
        url: "/tours",
        method: "PATCH",
        body: tour,
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Tour", id: "LIST" }],
    }),
  }),
});

export const {
  useGetToursQuery,
  useAddNewTourMutation,
  useUpdateTourMutation,
  useDeleteTourMutation,
  useAddMarkMutation,
} = toursApiSlice;

export const selectTourResult = toursApiSlice.endpoints.getTours.select();

const selectToursData = createSelector(
  selectTourResult,
  (tourResult) => tourResult.data
);

export const {
  selectAll: selectAllTours,
  selectById: selectTourById,
  selectIds: selectTourIds,
} = toursAdapter.getSelectors(
  (state) => selectToursData(state) ?? initialState
);
