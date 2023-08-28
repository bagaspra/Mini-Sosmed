import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import RegisterInput from '../components/RegisterInput';
import { asyncRegisterUser } from '../states/users/action';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));
    navigate('/login');
  };
  return (
    <div className="flex h-screen justify-center items-center">
      <RegisterInput register={onRegister} />
    </div>
  );
}
