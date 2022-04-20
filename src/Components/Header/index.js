// Styles
import style from "./styles.module.css";
import commonStyle from "../../Common.module.css";

// React Router Hooks & Components
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const getLinkClass = ({ isActive }) => `${style.link} ${isActive ? style.active : ""}`;
  const gotoHome = () => {
    navigate("/");
  };

  return (
    <header className={`${style.header} ${commonStyle.wrapper}`}>
      <h1 className={style.logo} onClick={gotoHome}>
        Daily Notes
      </h1>

      <nav className={style.nav}>
        <NavLink to={"/"} className={getLinkClass}>
          All Notes
        </NavLink>

        <NavLink to={"/new"} className={getLinkClass}>
          New Note
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
