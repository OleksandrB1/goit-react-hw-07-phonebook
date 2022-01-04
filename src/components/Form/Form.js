import { useState } from "react";
import {
  useAddContactMutation,
  useGetContactsQuery,
} from "../../redux/contactsSlice";
import s from "./Form.module.css";

export default function Form() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [createContact] = useAddContactMutation();

  const { data } = useGetContactsQuery();

  const submit = (event) => {
    event.preventDefault();
    if (data.find((contact) => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    createContact({ name, phone });
    setName("");
    setPhone("");
  };

  return (
    <div>
      <form className={s.form} onSubmit={submit}>
        <label className={s.label}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            onChange={(e) => {
              setName(e.currentTarget.value);
            }}
          />
        </label>
        <label className={s.label}>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={phone}
            onChange={(e) => {
              setPhone(e.currentTarget.value);
            }}
          />
        </label>

        <button className={s.button} type="submit">
          Add contacts
        </button>
      </form>
    </div>
  );
}
