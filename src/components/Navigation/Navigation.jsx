import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

const makeLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.isActive);
};

export default function Navigation() {
  return (
    <div className={css.container}>
      <nav className={css.nav}>
        <NavLink to="/allMovies" className={makeLinkClass}>
          {" "}
          All Movies
        </NavLink>
        <NavLink to="/" className={makeLinkClass}>
          Home
        </NavLink>
        <NavLink to="/movies" className={makeLinkClass}>
          Movies
        </NavLink>
      </nav>
    </div>
  );
}
