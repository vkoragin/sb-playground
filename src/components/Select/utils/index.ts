import { SelectOption } from '../select-option.model';

const isOptionSelected = (selected: SelectOption[], newOption: SelectOption) =>
  selected.some((i) => i.value === newOption.value);

export default isOptionSelected;
