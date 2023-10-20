import React from 'react';
import Login from './login/page';
import axios from 'axios';

axios.defaults.baseURL = 'https://ep-calm-paper-96017664.us-east-2.aws.neon.tech'; 

export default function App() {
  return (
    <>
      <Login/>
      
    </>
  ) 
}
