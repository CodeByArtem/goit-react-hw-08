// SearchBox.jsx

import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";

import css from "./SearchBox.module.css";
import {
  changeFilter,
  selectNameFilter,
} from "../../redux/contacts/filtersSlice";

export const SearchBox = () => {
  const filterFieldId = useId();
  const { name } = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className="sub-card">
      <div className={css.searchContainer}>
        <h2>Search for someone</h2>
        <label htmlFor={filterFieldId}>Find contacts by name</label>
        <input
          type="text"
          name="filter"
          id={filterFieldId}
          placeholder="Enter search prompt..."
          value={name}
          onChange={handleChange}
          className={css.input} // Добавлено
        />
      </div>
    </div>
  );
};

export default SearchBox;