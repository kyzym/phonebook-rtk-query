// import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/contactsRtkSlice';
// import { selectContacts, selectVisibleContacts } from 'redux/selectors';

export const ContactsNotification = () => {
  const { data } = useGetContactsQuery();
  const savedContactsNumber = data.length;
  console.log(savedContactsNumber);
  const filteredContactsNumber = savedContactsNumber;

  return (
    <div>
      {savedContactsNumber !== filteredContactsNumber ? (
        <span>
          Found contacts: <b>{filteredContactsNumber}</b>
        </span>
      ) : (
        <span>
          Total number of contacts: <b>{savedContactsNumber}</b>
        </span>
      )}
    </div>
  );
};
