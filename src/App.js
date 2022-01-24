import React, { useState, useEffect } from 'react'

import './App.css'

// Components
import TableEmployess from './components/TableEmployess'
import MainHeader from './components/MainHeader'

//Templates
import DefaultTemplate from './templates/DefaultTemplate'


function App() {
  const apiURL = 'http://localhost:3001/employess'
  const [employess, setEmployees] = useState([])

  useEffect(() => {
    fetch(apiURL)
    .then(res => {
      return res.json()
    })
    .then(data => {
      setEmployees(data)
    })
  }, [])

  return (
    <DefaultTemplate>
      <MainHeader title="Funcionários" isSearchBox />
      <TableEmployess employess={employess} />
    </DefaultTemplate>
  );
}

export default App;
