import React from 'react';
import { useNavigate } from 'react-router-dom';

const UseNavigates = () => {
  const navigate = useNavigate();

  // Автоматично перенаправити на домашню сторінку
  React.useEffect(() => {
    navigate('/');
  }, [navigate]);

  return <div>Сторінку не знайдено. Перенаправлення на головну...</div>;
};

export default UseNavigates;
