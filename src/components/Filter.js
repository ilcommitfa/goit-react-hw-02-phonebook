import { Label } from "./Filter.styled";
import { BiSearchAlt } from "react-icons/bi";
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  return (
    <Label><BiSearchAlt/>
      Find contacts by name:
      <input type="text" value={value} onChange={onChange} />
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Filter;
