// import { getMovies } from "../../movies-api";
import { useEffect } from "react";
import MovieList from "../../components/MovieList/MovieList";
import LoaderHomePage from "../../components/LoaderHomePage/LoaderHomePage";
import css from "./HomePage.module.css";

import { useDispatch, useSelector } from "react-redux";
import { selectError, selectLoading } from "../../redux/movies/selectros";
import { fetchMovies } from "../../redux/movies/operations";

export default function HomePage() {
  // const [movies, setMovies] = useState([]);

  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  // useEffect(() => {
  //   async function getData() {
  //     try {
  //       setIsLoading(true);
  //       const data = await getMovies();
  //       setMovies(data);
  //     } catch (error) {
  //       setError(true);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  //   getData();
  // }, []);
  return (
    <div>
      <h1 className={css.title}>Trending today</h1>
      {isLoading && <LoaderHomePage />}
      {error && <b>HTTP error!</b>}
      <MovieList />
    </div>
  );
}
