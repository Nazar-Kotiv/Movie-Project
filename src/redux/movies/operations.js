import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NDhkNjZmODM0YjFiMDUzYjQ2YTk4ZWZmYWVlMTQ5ZCIsInN1YiI6IjY1ZTg4OTRkOTYzODY0MDE4MWNhMWM1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Aj9IK_-6oYeAc7V6Y3KZdJ1Q3ozhcEPMYYHfj3_XVX4",
  },
};

export const fetchMovies = createAsyncThunk(
  "movies/fetchTrendingMovies",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        "/trending/movie/day?language=en-US",
        options
      );
      return response.data.results;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAllMovies = createAsyncThunk(
  "movies/getAllMovies",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        "/trending/all/day?language=en-US",
        options
      );
      return response.data.results;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const getMovieDetails = createAsyncThunk(
//   "movies/getMovieDetails",
//   async (movieId, thunkAPI) => {
//     try {
//       const response = await axios.get(
//         `/movie/${movieId}?language=en-US`,
//         options
//       );
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
