// Styling
import style from "./styles.module.css";

// Hooks
import { useDispatch, useSelector } from "react-redux";

// Action Creators
import { changeFilter, resetFilter } from "../../Redux/Filters/ActionCreators";
import { useEffect, useState } from "react";

// Utilities
import { getMonthFromNumber, getWeekNumber } from "../../Utilities/date";

const Search = () => {
  const dispatch = useDispatch();
  const { notes, filters } = useSelector((state) => state);

  // States
  const [sort, setSort] = useState(filters.sort);
  const [filter, setFilter] = useState(filters.filter);
  const [filterOptions, setFilterOptions] = useState([]);
  const [subFilter, setSubFilter] = useState(filters.subFilter);

  // Getting List of Sub-Filter Options based on the Filter Selected
  useEffect(() => {
    let options = [];

    if (filter === "year") {
      options = [...new Set(notes.map((note) => note.date.getFullYear()))].sort();
    } else if (filter === "month") {
      const monthNumbers = [...new Set(notes.map((note) => note.date.getMonth()))];
      options = monthNumbers.sort((a, b) => +a - +b).map((monthNum) => getMonthFromNumber(monthNum));
    } else if (filter === "week") {
      options = [...new Set(notes.map((note) => getWeekNumber(note.date)))].sort((a, b) => +a - +b);
    }

    setFilterOptions(options);
    setSubFilter(filters.subFilter);
  }, [filter, notes, filters]);

  const handleChangeSort = (e) => {
    setSort(e.target.value);
  };

  const handleChangeFilter = (e) => {
    setFilter(e.target.value);
  };

  const handleChangeSubFilter = (e) => {
    setSubFilter(e.target.value);
  };

  const handleApply = () => {
    if (filter !== "all" && subFilter === "") {
      return;
    }

    dispatch(changeFilter(sort, filter, subFilter));
  };

  const handleReset = () => {
    setSort("new");
    setFilter("all");
    dispatch(resetFilter());
  };

  return (
    <div className={style.container}>
      <div className={style.section}>
        <div className={style.inputGroup}>
          <h3>Sort:</h3>

          <select value={sort} onChange={handleChangeSort}>
            <option value="new">Newest First</option>
            <option value="old">Oldest First</option>
          </select>
        </div>

        <div className={style.inputGroup}>
          <h3>Filter:</h3>

          <select value={filter} onChange={handleChangeFilter}>
            <option value="all">All</option>
            <option value="week">Week</option>
            <option value="month">Month</option>
            <option value="year">Year</option>
          </select>

          {filterOptions.length === 0 ? (
            <></>
          ) : (
            <select value={subFilter} onChange={handleChangeSubFilter}>
              <option value="">Select {filter.toUpperCase()}</option>
              {filterOptions.map((opt, index) => (
                <option value={opt} key={index}>
                  {opt}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>

      <div className={style.section}>
        <button type="button" className={style.btn} onClick={handleApply}>
          Apply
        </button>
        <button type="button" className={style.btn} onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Search;
