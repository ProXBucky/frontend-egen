import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChatGPTLayout from './component/Chatbot/ChatGPTLayout';
import Navbar from './component/Navbar';
import SearchLayout from './component/Search/SearchLayout';
import ReportLayout from './component/Report/ReportLayout';
import UploadLayout from './component/UploadFile/UploadLayout';
import ModalViewInformation from './component/ModalViewInformation';

const App = () => {
  const [modalViewInformation, setModalViewInformation] = useState(false)

  const handleOpenModal = () => {
    setModalViewInformation(true)
  }

  const handleCloseModal = () => {
    setModalViewInformation(false)
  }

  return (
    <Router>
      <div className='h-screen w-screen'>
        <Navbar handleOpenModal={handleOpenModal} />
        <Routes>
          <Route path="/chatbot" element={<ChatGPTLayout />} />
          <Route path="/search" element={<SearchLayout />} />
          <Route path="/report" element={<ReportLayout />} />
          <Route path="/upload" element={<UploadLayout />} />
        </Routes>
        <ModalViewInformation modalViewInformation={modalViewInformation} handleCloseModal={handleCloseModal} />
      </div>
    </Router>
  );
};

export default App;
