import React from 'react';
import Contact from './Contact';
import ContactContextProvider from './ContactContext';


function App() {
  return (
    <ContactContextProvider>
      <Contact />
    </ContactContextProvider>
  );
}

export default App;
