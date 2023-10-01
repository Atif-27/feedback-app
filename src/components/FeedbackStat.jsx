import { useFeedback } from '../context/FeedbackContext';

function FeedbackStat() {
  const { feedback } = useFeedback();
  let avg = feedback.reduce((i, item) => i + item.rating, 0);
  let length = feedback.length;
  avg = avg / length;
  avg = avg.toFixed(1).replace(/[.,]0$/, '');
  return (
    <div className="feedback-stats">
      <h4>{length} Reviews</h4>
      <h4>Average Rating: {isNaN(avg) ? 0 : avg}</h4>
    </div>
  );
}

export default FeedbackStat;
