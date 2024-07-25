import css from "./SearchBox.module.css";
import { useId } from "react";
import { changeFilter } from "../../redux/filtersSlice";
import { useDispatch } from "react-redux";

const SearchBox = () => {
   const dispatch = useDispatch();

   const handleChange = (evt) => {
      dispatch(changeFilter(evt.target.value));
   };

   const id = useId();

   return (
      <div className={css.input}>
         <label htmlFor={`search-${id}`}>Find contacts by name</label>
         <input type="text" id={`search-${id}`} onChange={handleChange} />
      </div>
   );
};

export default SearchBox;
