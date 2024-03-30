import { createSlice } from "@reduxjs/toolkit";

import { fetchMovies, getMovieDetails } from "./operations";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    items: [],
    loading: false,
    error: false,
  },

  extraReducers: (builder) =>
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchMovies.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(getMovieDetails.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(getMovieDetails.fulfilled, (state, action) => {}),
});

export const movieReducer = movieSlice.reducer;
