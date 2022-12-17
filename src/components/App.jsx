import { Toaster } from 'react-hot-toast';
import { FcContacts, FcList } from 'react-icons/fc';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';
import {
  ContactsList,
  ContactsNotification,
  Filter,
  Form,
  SubTitle,
  Title,
} from '.';
import { useFetchContacts } from './utils/hooks';
import { Box } from './utils/Box.styled';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useFetchContacts(dispatch);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      mt={10}
      px={10}
    >
      <Title>
        Phonebook
        <FcContacts />
      </Title>
      <Form />
      <SubTitle>
        Contacts
        <FcList />
      </SubTitle>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactsList />
      <ContactsNotification />
      <Toaster position="top-center" reverseOrder={false} />
    </Box>
  );
};
