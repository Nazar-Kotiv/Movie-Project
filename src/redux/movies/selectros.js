export const selectLoading = (state) => state.movies.loading;

export const selectError = (state) => state.movies.error;

export const selectMovies = (state) => state.movies.items;

// export const selectMovieById = (state, movieId) =>
//   state.movies.items.find((movie) => movie.id === movieId);
