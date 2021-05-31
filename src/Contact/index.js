import React from 'react';
import Form from './components/Form';
import ContactList from './components/ContactList';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Contact() {
  return (
    <div>
      <Form />
      <ContactList />
    </div>
  );
}
