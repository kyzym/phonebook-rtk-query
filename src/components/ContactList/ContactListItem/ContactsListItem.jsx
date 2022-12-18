import { BsPhone } from 'react-icons/bs';
import { MdClose } from 'react-icons/md';
import { DelButton, Name, Number } from './ContactsListItem.styled';

import { useDeleteContactMutation } from 'redux/contactsSlice';
// import { toast } from 'react-hot-toast';

export const ContactsListItem = ({ contact: { name, phone, id } }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  // isLoading && toast.success(`OK, we've removed your contact`);

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
