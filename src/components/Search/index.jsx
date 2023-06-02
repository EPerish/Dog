import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"
import { useDispatch } from "react-redux";
import { changeSearch } from "../../redux/slices/filterSlice";
import { useDebounce } from "../../hooks/useDebounce";
import { PARAM_SEARCH } from "../../utils/constants";

export const Search = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(() => {
    const fitchSearch = searchParams.get(PARAM_SEARCH)

    return fitchSearch ? fitchSearch : ''
  })

  const debounceValue = useDebounce(searchValue, 500)

  useEffect(() => {
    dispatch(changeSearch(debounceValue))
  }, [debounceValue, dispatch])

  const handleChange = (event) => {
    const value = event.target.value
    setSearchValue(value)

    if (value) {
      return setSearchParams((prev) => {
        prev.set(PARAM_SEARCH, value);
        return prev
      })
    }

    return setSearchParams((prev) => {
      prev.delete(PARAM_SEARCH)
      return prev
    })
  }

  return <div className='d-flex justify-content-center align-items-center mt-3'>
    <input
      placeholder="Поиск"
      value={searchValue}
      onChange={(event) => handleChange(event)}
    />
  </div>
}