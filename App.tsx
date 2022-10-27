import { Application } from './components/application';
import { NativeRouter, Route, Routes } from 'react-router-native';
import React from 'react';
import { NotFound } from './components/not_found';
import { OrganizationDetails } from './components/organization';

export default function App() {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<Application />} /> 
        <Route path="/org/:name/:id" element={<OrganizationDetails />} /> 
        <Route path="*" element={<NotFound />} /> 
      </Routes>              
    </NativeRouter>
  );
}
