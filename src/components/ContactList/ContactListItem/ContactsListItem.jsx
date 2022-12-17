import { BsPhone } from 'react-icons/bs';
import { MdClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { Contact, DelButton, Name, Number } from './ContactsListItem.styled';
import { PropTypes } from 'prop-types';

export const ContactsListItem = ({ filteredContacts }) => {
  const dispatch = useDispatch();

  return filteredContacts.map(({ name, phone, id }) => (
    <Contact key={id}>
      <BsPhone size={20} />
      <Name>{name}</Name>
      <Number>{phone}</Number>

      <DelButton onClick={() => dispatch(deleteContact(id))}>
        <MdClose size={24} />
      </DelButton>
    </Contact>
  ));
};

ContactsListItem.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
