import React from 'react';
import { Header } from '../header';
import { useNavigate } from 'react-router-native';

export const NotFound = () => {
    const navigate = useNavigate();
  return (
   <Header title="Return to app" onPress={() => navigate("/") } />
  )
}
