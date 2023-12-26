import React from 'react';
import './styles/App.scss'
import Header from './components/Header/Header'
import Notes from './components/Notes'
import Main from './components/Main'

function App() {

  return (
    <div className='App flex flex-col min-h-screen'>
      <Header />
      <Notes />
      <Main />
    </div>
  )
}

export default App;
