import PropTypes from 'prop-types';
import { ContactWrapper } from "./ContactListStyled";
import ContactListItem from "./ContactListItem/ContactListItem";

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <ContactWrapper>
            {contacts?.map(({ id, name, number }) => <ContactListItem key={id} name={name} number={number} id={id} onDeleteContact={onDeleteContact} />)}
        </ContactWrapper>
    )
}

export default ContactList;


ContactList.propTypes = {
    contacts: PropTypes.array,
    onDeleteContact: PropTypes.func,
}