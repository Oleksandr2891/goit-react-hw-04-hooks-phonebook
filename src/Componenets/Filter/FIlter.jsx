import { FilterWrapper } from "./FilterStyled";
import PropTypes from 'prop-types';

const FIlter = ({ filter, onChange }) => {
    return (
        <FilterWrapper>
            Find contact by name
            <input className="input" type="text" value={filter} onChange={onChange} />
        </FilterWrapper>
    );
}

export default FIlter;

FIlter.propTypes = {
    filter: PropTypes.string,
    onChange: PropTypes.func,
}