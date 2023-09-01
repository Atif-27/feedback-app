import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FeedbackData from './data/FeedbackData';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStat from './components/FeedbackStat';
import FeedbackForm from './components/FeedbackForm';
import About from './pages/About';
import AboutIconLink from './components/AboutIconLink';
function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  function handleDelete(id) {
    setFeedback((feedback) => feedback.filter((item) => item.id !== id));
  }
  function handleAdd(newFeedback) {
    setFeedback((feedback) => [newFeedback, ...feedback]);
  }
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm handleAdd={handleAdd} />
                <FeedbackStat feedback={feedback} />
                <FeedbackList feedback={feedback} handleDelete={handleDelete} />
              </>
            }
          />

          <Route path="/about" element={<About />} />
        </Routes>
        <AboutIconLink />
      </div>
    </Router>
  );
}

export default App;
