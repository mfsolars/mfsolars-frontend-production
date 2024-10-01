import React, { useState } from 'react';
import styles from './ResetPassword.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { token } = useParams();  // useParams ka use kara ga
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(token);
      
      let { data } = await axios.put(`http://localhost:4000/api/mfsolars/v1/auth/resetpassword/${token}`, {
        password, confirmPassword
      });
  
      if (data.success) {
        setPassword('');
        setConfirmPassword('');
        navigate('/my-account/login');
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        if (error.response.data.message === 'Token expired') {
          toast.error('Token expired. Please try again.');
        } else {
          toast.error(error.response.data.message);
        }
      } else {
        toast.error('An error occurred. Please try again.');
      }
    }
  };



  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.label}>New Password:</label>
          <input
            type="password"
            placeholder='Enter new password'
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Confirm Password:</label>
          <input
            type="password"
            placeholder='Confirm new password'
            className={styles.input}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.button}>Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;