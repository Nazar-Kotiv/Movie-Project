import { Link, useLocation } from "react-router-dom";
import styles from "./MovieList.module.css";
import { useSelector } from "react-redux";

import { selectMovies } from "../../redux/movies/selectros";

export default function MovieList() {
  const location = useLocation();

  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

  const items = useSelector(selectMovies);

  return (
    <ul className={styles.ul}>
      {items.map((movie) => (
        <li key={movie.id} className={styles.li}>
          <Link
            to={`/movies/${movie.id}`}
            state={location}
            className={styles.link}
          >
            <div className={styles.container}>
              <div className={styles.card} data-title={movie.title}>
                <div>
                  <img
                    className={styles.posterMovie}
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                        : defaultImg
                    }
                    alt="Movie poster"
                  ></img>
                </div>
                <p className={styles.title}>{movie.title}</p>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
