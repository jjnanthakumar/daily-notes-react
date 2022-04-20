// Styling
import style from "./styles.module.css";

// Hooks
import { useDispatch, useSelector } from "react-redux";

// Action Creators
import { changeSort, changeFilter } from "../../Redux/Filters/ActionCreators";

const Search = () => {
  const dispatch = useDispatch();
  const { sort, filter } = useSelector((state) => state.filters);

  const handleChangeSort = (e) => {
    dispatch(changeSort(e.target.value));
  };

  const handleChangeFilter = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={style.container}>
      <div className={style.section}>
        <h3>Sort:</h3>

        <select value={sort} onChange={handleChangeSort}>
          <option value="new">Newest First</option>
          <option value="old">Oldest First</option>
        </select>
      </div>

      <div className={style.section}>
        <h3>Filter:</h3>

        <select value={filter} onChange={handleChangeFilter}>
          <option value="week">Week</option>
          <option value="month">Month</option>
          <option value="year">Year</option>
        </select>
      </div>
    </div>
  );
};

export default Search;
