import React, {useState} from 'react';
import './styles/App.scss'
import useFetch from './hooks/useFetch';
import { fetchSteps } from './store/stepsSlice';
import Header from './components/Header/Header';
import Notes from './components/Notes';
import Main from './components/Main';
import Modal from './components/UI/Modal/Modal';
import DescribeTest from './components/DescribeTest';

function App() {
  const [showModal, setShowModal] = useState(false);
  useFetch(fetchSteps);

  return (
    <div className='App flex flex-col min-h-screen'>
      <Header />
      <Notes setShowModal={setShowModal} />
      <Main />
      {showModal && <Modal showModal={showModal} setShowModal={() => setShowModal(false)} renderContent={DescribeTest} />}
    </div>
  )
}

export default App;