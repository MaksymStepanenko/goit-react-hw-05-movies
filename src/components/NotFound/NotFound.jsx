import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/');
    }, 2000);
    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div>
      <h1>404 - Page not found</h1>
      <p>You will be redirected to the home page.</p>
    </div>
  );
};
    
export default NotFound;
