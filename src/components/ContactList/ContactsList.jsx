// import { useSelector } from 'react-redux';
// import { useGetContactsQuery } from 'redux/contactsRtkSlice';
// import { selectVisibleContacts } from 'redux/selectors';
import { useGetContactsQuery } from 'redux/contactsRtkSlice';
import { Box } from '../utils/Box.styled';
import { ContactsListItem } from './ContactListItem/ContactsListItem';

export const ContactsList = () => {
  const { error, isLoading } = useGetContactsQuery();

  return (
    <Box as="ul" width="430px">
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactsListItem />
    </Box>
  );
};
