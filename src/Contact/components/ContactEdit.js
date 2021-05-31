import classes from '../contacts.module.css';
import React, { useContext, useState } from 'react';
import { contactContext } from '../../ContactContext';

export default function ContactEdit(props) {
  const { name: contactName, id } = props.data;
  const { phone: contactPhone } = props.data;
  const { email: contactEmail } = props.data;


  const [name, setName] = useState(contactName);
  const [phone, setPhone] = useState(contactPhone);
  const [email, setEmail] = useState(contactEmail);

  const { changeContact } = useContext(contactContext);

  const handleEdit = (e) => {
    e.preventDefault();

    changeContact(id, name, phone, email);

  };

  return (
    <li className={classes.editingContact}>
      <form onSubmit={handleEdit}>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          required
          value={name}
        />
        <input
          onChange={(e) => setPhone(e.target.value)}
          type="text"
          name="phone"
          required
          value={phone}
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          required
          value={email}
        />
        <button>Edit</button>
      </form>
    </li>
  );
}
