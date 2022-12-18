import { BsPhone } from 'react-icons/bs';
import { MdClose } from 'react-icons/md';
import { DelButton, Name, Number } from './ContactsListItem.styled';

import { useDeleteContactMutation } from 'redux/contactsSlice';

export const ContactsListItem = ({ contact: { name, phone, id } }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <>
      <BsPhone size={20} />
      <Name>{name}</Name>
      <Number>{phone}</Number>

      <DelButton onClick={() => deleteContact(id)} disabled={isLoading}>
        <MdClose size={24} />
      </DelButton>
    </>
  );
};
