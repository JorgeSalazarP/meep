import React from 'react';
import DataContextProvider from './context/DataContext';
import Layout from './components/layout/Layout';
import Sidebar from './components/layout/Sidebar';


import './reset.css';
import './App.css';


function App() {
  return (
    <DataContextProvider>
      <Sidebar/>
      <Layout/>
    </DataContextProvider>
      



  );
}

export default App;
