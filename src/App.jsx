import React from 'react';

// stylesheet
import './functionbased/App.css';
import { Route, Routes } from 'react-router-dom';
import TodoContainerPage from './functionbased/pages/ToDoContainerPage';
import AboutPage from './functionbased/pages/AboutPage';
import ErrorPage from './functionbased/pages/Error404';
import Navbar from './functionbased/components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<TodoContainerPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>

    </>
  );
}

export default App;
