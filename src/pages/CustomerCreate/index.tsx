import React from 'react'
import UserForm from '../../components/CreateUserForm'
import Navbar from '../../components/navbar'

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
