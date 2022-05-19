// Styled Components
import { Button, Container, InputGroup, Section, Select, Title } from "./styledComponents";

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
    <Container>
      <Section>
        <InputGroup>
          <Title>Sort:</Title>
          <Select value={sort} onChange={handleChangeSort}>
            <option value="new">Newest First</option>
            <option value="old">Oldest First</option>
          </Select>
        </InputGroup>

        <InputGroup>
          <Title>Filter:</Title>

          <Select value={filter} onChange={handleChangeFilter}>
            <option value="all">All</option>
            <option value="week">Week</option>
            <option value="month">Month</option>
            <option value="year">Year</option>
          </Select>

          {filterOptions.length === 0 ? (
            <Select value="" disabled>
              <option value="">Select a Filter</option>
            </Select>
          ) : (
            <Select value={subFilter} onChange={handleChangeSubFilter}>
              <option value="">Select {filter.toUpperCase()}</option>
              {filterOptions.map((opt, index) => (
                <option value={opt} key={index}>
                  {opt}
                </option>
              ))}
            </Select>
          )}
        </InputGroup>
      </Section>

      <Section>
        <Button type="button" onClick={handleApply}>
          Apply
        </Button>

        <Button type="button" onClick={handleReset}>
          Reset
        </Button>
      </Section>
    </Container>
  );
};

export default Search;
