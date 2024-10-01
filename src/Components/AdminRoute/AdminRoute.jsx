import React, { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const AdminRoute = () => {
  useEffect(() => {
    if(!userLogged){
      toast.warn('Admin Login to continue to page');
    }
  }, []);
  const userLogged = useSelector((state) => state.user.user?.userlogged);

  return userLogged?.role =="admin" ? <Outlet /> : <Navigate to="/my-account/login" />;
};

export default AdminRoute;
