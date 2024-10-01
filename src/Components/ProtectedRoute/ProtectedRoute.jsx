import React, { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const ProtectedRoute = () => {
  useEffect(() => {
    if(!userLogged){
      toast.warn('Login to continue to page');
    }
  }, []);
  const userLogged = useSelector((state) => state.user.user?.userlogged);

  return userLogged ? <Outlet /> : <Navigate to="/my-account/login" />;
};

export default ProtectedRoute;
