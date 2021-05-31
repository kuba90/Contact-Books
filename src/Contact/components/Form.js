import React, { useContext, useState } from 'react';
import { contactContext } from '../../ContactContext';
import classes from '../contacts.module.css';
import { Button } from 'reactstrap';



export default function Forms() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const { createContact } = useContext(contactContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name,
      phone,
      email,

    };
    createContact(data);
    setName('');
    setPhone('');
    setEmail('');
  };

  return (
    <div className={classes.formWrapper}>
      <h3>Contact Book</h3>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          name="name"
          type="text"
          required
          value={name} // new
        />
        <input
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
          name="phone"
          type="number"
          required
          value={phone}
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          name="email"
          type="email"
          required
          value={email}
        />
        <Button color="primary" size="sm">Save</Button>

      </form>
      {/* <pre>{JSON.stringify(todoList, 0, 2)}</pre> */}
    </div >
  );
}