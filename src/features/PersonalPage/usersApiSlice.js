import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";

const usersAdapter = createEntityAdapter({
  sortComparer: (a, b) => (a.name === b.name ? 0 : a.name ? 1 : -1),
});

const initialState = usersAdapter.getInitialState();

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: "/users",
        validateStatus: (response, result) => {
          return response.status === 200 && !result.isError;
        },
      }),
      transformErrorResponse: (responseData) => {
        const loadedUsers = responseData.map((user) => {
          user.id = user._id;
          return user;
        });
        return usersAdapter.setAll(initialState, loadedUsers);
      },
      providesTags: (result, error, arg) => {
        if (result?.ids) {
          return [
            { type: "User", id: "LIST" },
            ...result.ids.map((id) => ({ type: "User", id })),
          ];
        } else return [{ type: "User", id: "LIST" }];
      },
    }),
    createUser: builder.mutation({
      query: (credentials) => ({
        url: "/users",
        method: "POST",
        body: { ...credentials },
      }),
    }),
  }),
});

export const { useGetUsersQuery, useCreateUserMutation } = usersApiSlice;

export const selectUserResult = usersApiSlice.endpoints.getUsers.select();

const selectUsersData = createSelector(
  selectUserResult,
  (userResult) => userResult.data
);

export const {
  selectAll: selectAllUsers,
  selectById: selectUserById,
  selectIds: selectUserIds,
} = usersAdapter.getSelectors(
  (state) => selectUsersData(state) ?? initialState
);
