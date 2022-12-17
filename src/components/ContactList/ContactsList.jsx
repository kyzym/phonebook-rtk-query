import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import { Box } from '../utils/Box.styled';
import { ContactsListItem } from './ContactListItem/ContactsListItem';

export const ContactsList = () => {
  const filteredContacts = useSelector(selectVisibleContacts);

  return (
    <Box as="ul" width="430px">
      <ContactsListItem filteredContacts={filteredContacts} />
    </Box>
  );
};
