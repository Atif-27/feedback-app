import { createContext, useContext, useState } from 'react';
import FeedbackData from '../data/FeedbackData';

const FeedbackContext = createContext();
function FeedbackContextProvider({ children }) {
  const [feedback, setFeedback] = useState(FeedbackData);
  const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });
  function handleDelete(id) {
    setFeedback((feedback) => feedback.filter((item) => item.id !== id));
  }
  function handleAdd(newFeedback) {
    setFeedback((feedback) => [newFeedback, ...feedback]);
  }
  function handleEdit(item) {
    setFeedbackEdit({
      item,
      edit: true,
    });
  }
  function handleUpdate(newItem) {
    setFeedback((feedback) =>
      feedback.map((item) => (item.id === newItem.id ? newItem : item))
    );
    setFeedbackEdit({ item: {}, edit: false });
  }
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        handleDelete,
        handleAdd,
        handleEdit,
        feedbackEdit,
        handleUpdate,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
}
function useFeedback() {
  const x = useContext(FeedbackContext);
  return x;
}
export { FeedbackContextProvider, useFeedback };
