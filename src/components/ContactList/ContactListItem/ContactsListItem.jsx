import { BsPhone } from 'react-icons/bs';
import { MdClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { Contact, DelButton, Name, Number } from './ContactsListItem.styled';

import { useGetContactsQuery } from 'redux/contactsRtkSlice';

export const ContactsListItem = () => {
  const dispatch = useDispatch();

  const { data: contacts } = useGetContactsQuery();
  if (!contacts) return;

  return contacts.map(({ name, phone, id }) => (
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
