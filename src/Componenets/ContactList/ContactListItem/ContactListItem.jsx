import { ContactItem } from "./ContactListItemStyled";
import PropTypes from 'prop-types';

const ContactListItem = ({ id, name, number, onDeleteContact }) => {
    return (
        <ContactItem>
            <p>{name}: {number}</p>
            <button className="buttonDelete" onClick={() => onDeleteContact(id)}>Delete</button>
        </ContactItem>
    );
}

export default ContactListItem;

ContactListItem.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
    onDeleteContact: PropTypes.func,
}