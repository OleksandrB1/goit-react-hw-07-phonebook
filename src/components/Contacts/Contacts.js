import s from "./Contacts.module.css";
import { useSelector } from "react-redux";
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from "../../redux/contactsSlice";
import React from "react";

const Contacts = () => {
  const { data } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  const filter = useSelector((state) => state.filter);

  return (
    <ul>
      {data &&
        data
          .filter((el) => el.name.toLowerCase().includes(filter.toLowerCase()))
          .map((el) => (
            <li key={el.id} className={s.listItem}>
              <span className={s.item}>{el.name}:</span>
              <span className={s.item}>{el.phone}</span>
              <button
                onClick={() => deleteContact(el.id)}
                type="button"
                className={s.button}
              >
                Delete
              </button>
            </li>
          ))}
    </ul>
  );
};

export default Contacts;
