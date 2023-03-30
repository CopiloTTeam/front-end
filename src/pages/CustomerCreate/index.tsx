import React from 'react'
import UserForm from '../../components/CreateUserForm'
import Navbar from '../../components/Navbar'

const CustomerForm = () => {
  return (
    <>
      <Navbar />
      <main>
        <UserForm />
      </main>
    </>
  );
};

export default CustomerForm;
