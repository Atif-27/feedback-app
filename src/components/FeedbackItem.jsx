import { FaEdit, FaTimes } from 'react-icons/fa';
import Card from './Card';
import { useFeedback } from '../context/FeedbackContext';
function FeedbackItem({ item }) {
  const { handleDelete, handleEdit } = useFeedback();
  return (
    <Card reverse={true}>
      <div className="num-display">{item.rating}</div>
      <button className="edit" onClick={() => handleEdit(item)}>
        <FaEdit color="purple" />
      </button>
      <button onClick={() => handleDelete(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;
