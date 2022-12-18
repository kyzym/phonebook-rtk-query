import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/contactsRtkSlice';
import { selectFilter } from 'redux/selectors';
import { Box } from '../utils/Box.styled';
import { ContactsListItem } from './ContactListItem/ContactsListItem';
import { Contact } from './ContactListItem/ContactsListItem.styled';

export const ContactsList = () => {
  const filter = useSelector(selectFilter);

  const { data: contacts, error, isLoading } = useGetContactsQuery();
  console.log(contacts);
  if (!contacts) return;

  const normalizedFilter = filter.toLowerCase().trim();
  const visibleContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <Box as="ul" width="430px">
      {isLoading && !error && <b>Request in progress...</b>}

      {visibleContacts.map(contact => (
        <Contact key={contact.id}>
          <ContactsListItem contact={contact} />
        </Contact>
      ))}
    </Box>
  );
};
