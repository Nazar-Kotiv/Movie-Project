import { useEffect } from "react";
import MovieList from "../../components/MovieList/MovieList";
import LoaderHomePage from "../../components/LoaderHomePage/LoaderHomePage";
// import css from "./HomePage.module.css";

import { useDispatch, useSelector } from "react-redux";
import { selectError, selectLoading } from "../../redux/movies/selectros";
import { getAllMovies } from "../../redux/movies/operations";

export default function AllMovies() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);

  return (
    <div>
      <h1>All Movies</h1>
      {isLoading && <LoaderHomePage />}
      {error && <b> HTTP Error!</b>}
      <MovieList />
    </div>
  );
}
