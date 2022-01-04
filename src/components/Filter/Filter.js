import s from "./Filter.module.css";

import { useSelector, useDispatch } from "react-redux";
import { filterContact } from "../../redux/actions";
import React from "react";

const Filter = () => {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        value={filter}
        onChange={(e) => dispatch(filterContact(e.currentTarget.value))}
      />
    </label>
  );
};

export default Filter;
