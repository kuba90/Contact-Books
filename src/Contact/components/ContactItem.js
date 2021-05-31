import React, { useContext } from 'react';
import cancelImg from '../../assets/icons/cancel.svg';
import editImg from '../../assets/icons/pencil.svg';
import { contactContext } from '../../ContactContext';
import classes from '../contacts.module.css';

export default function ContactItem(props) {
  const { name, id } = props.data;
  const { phone } = props.data;
  const { email } = props.data;

  const { deleteContact, changeEditId } =
    useContext(contactContext);

  const handleDelete = () => {

    deleteContact(id);
  };



  return (
    <li>
      <p className={''}>{name}</p>
      <p className={''}>{phone}</p>
      <p className={''}>{email}</p>
      <img
        onClick={handleDelete}
        className={classes.cancelIcon}
        src={cancelImg}
        alt="cancel-img"
      />
      <img
        onClick={() => changeEditId(id)}
        className={classes.editIcon}
        src={editImg}
        alt="edit-img"
      />
    </li>
  );
}
