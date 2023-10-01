import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Card from './Card';
import Button from './Button';
import RaitingSelect from './RaitingSelect';
import { useFeedback } from '../context/FeedbackContext';

function FeedbackForm() {
  const { handleAdd, feedbackEdit, handleUpdate } = useFeedback();
  const [text, setText] = useState('');
  const [rating, setRating] = useState('');
  useEffect(() => {
    if (!feedbackEdit.edit) return;
    setText(feedbackEdit.item.text);
    setRating(feedbackEdit.item.rating);
  }, [feedbackEdit]);
  function handleTextChange(e) {
    setText(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();

    if (rating) {
      if (feedbackEdit.edit) {
        const newFeedback = { ...feedbackEdit.item, rating, text };
        handleUpdate(newFeedback);
      } else {
        const newFeedback = { id: uuidv4(), rating, text };
        handleAdd(newFeedback);
      }
      setText('');
      setRating('');
    } else {
      alert('Select a rating');
    }
  }
  const isMore = text.trim('').length > 10;
  return (
    <Card>
      <form onSubmit={submitHandler}>
        <h2>How would you rate your Service with us?</h2>
        <RaitingSelect rating={rating} setRating={setRating} />
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review..."
            onChange={(e) => handleTextChange(e)}
            value={text}
          />
          {feedbackEdit.edit ? (
            <Button type="submit" isDisabled={!isMore}>
              Update
            </Button>
          ) : (
            <Button type="submit" isDisabled={!isMore}>
              Send
            </Button>
          )}
        </div>
        {text && !isMore && (
          <div className="message">Text Must Be Atleast 10 characters</div>
        )}
      </form>
    </Card>
  );
}

export default FeedbackForm;
