import React, {useState} from 'react';
import './styles/App.scss'
import useFetchRedux from './hooks/useFetchRedux';
import { fetchSteps } from './store/stepsSlice';
import { fetchContent } from './store/contentSlice';
import Header from './components/Header/Header';
import Notes from './components/Notes';
import Main from './components/Main';
import Modal from './components/UI/Modal/Modal';
import DescribeTest from './components/DescribeTest';

function App() {
  const [showModal, setShowModal] = useState(false);
  useFetchRedux(fetchSteps);
  useFetchRedux(fetchContent);

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