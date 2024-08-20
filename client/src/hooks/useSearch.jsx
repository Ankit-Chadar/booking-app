import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import { Navigate, useNavigate } from "react-router-dom";

export const useSearch = () => {
  const { dispatch } = useContext(SearchContext);
  const navigate = useNavigate();


  const handleSearch = (destination, dates, options,route="hotels") => {
     dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
    navigate("/"+route, { state: { destination, dates, options } });
    }
    
  return {handleSearch}
}
