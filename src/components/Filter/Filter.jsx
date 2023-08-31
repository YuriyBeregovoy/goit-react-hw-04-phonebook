import { LabelFilter } from "./Filter.styled"

export const Filter = ({filterInputValue, onChangeInputFilter}) => {
  return <LabelFilter>
          <span>Find contacts by name</span>
          <input
        type="text"
        value={filterInputValue} 
        onChange={onChangeInputFilter}
          />
        </LabelFilter>

}