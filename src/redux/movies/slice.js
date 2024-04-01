import { createSlice } from "@reduxjs/toolkit";

import { fetchMovies } from "./operations";

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
      }),
  // .addCase(getMovieDetails.pending, (state) => {
  //   state.error = false;
  //   state.loading = true;
  // })

  // .addCase(getMovieDetails.fulfilled, (state, action) => {
  //   state.loading = false;
  //   const movieToAdd = action.payload;
  //   if (!state.items.find((movie) => movie.id === movieToAdd.id)) {
  //     state.items.push(movieToAdd);
  //   }
  // })
  // .addCase(getMovieDetails.rejected, (state) => {
  //   state.error = true;
  //   state.loading = false;
  // }),
});

export const movieReducer = movieSlice.reducer;

// .addCase(getMovieDetails.fulfilled, (state, action) => {
//   state.loading = false;
//   const updatedMovie = action.payload;
//   state.items = state.items.map((movie) =>
//     movie.id === updatedMovie.id ? updatedMovie : movie
//   );
// })
