import { useDispatch, useSelector } from "react-redux";

import Contact from "../Contact/Contact";
import { selectContacts } from "../../redux/contactsSlice";
import { deleteContact } from "../../redux/contactsSlice";

import css from "./ContactList.module.css";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
   const dispatch = useDispatch();

   const contacts = useSelector(selectContacts);
   const filter = useSelector(selectNameFilter);

   let filteredContacts = contacts.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
   );

   return (
      <ul className={css.list}>
         {filteredContacts.map(({ id, name, number }) => {
            return (
               <li key={id} className={css.card}>
                  <Contact name={name} number={number} />
                  <button className={css.button} onClick={() => dispatch(deleteContact(id))}>
                     {"Delete"}
                  </button>
               </li>
            );
         })}
      </ul>
   );
};

export default ContactList;
