function RaitingSelect({ rating, setRating }) {
  function handleChange(e) {
    setRating(Number(e.target.value));
  }
  return (
    <ul className="rating">
      <li>
        <input
          type="radio"
          name="rating"
          id="num1"
          value={1}
          checked={rating === 1}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="num1">1</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          id="num2"
          value={2}
          checked={rating === 2}
          onChange={handleChange}
        />
        <label htmlFor="num2">2</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          id="num3"
          value={3}
          checked={rating === 3}
          onChange={handleChange}
        />
        <label htmlFor="num3">3</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          id="num4"
          value={4}
          checked={rating === 4}
          onChange={handleChange}
        />
        <label htmlFor="num4">4</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          id="num5"
          value={5}
          checked={rating === 5}
          onChange={handleChange}
        />
        <label htmlFor="num5">5</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          id="num6"
          value={6}
          checked={rating === 6}
          onChange={handleChange}
        />
        <label htmlFor="num6">6</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          id="num7"
          value={7}
          checked={rating === 7}
          onChange={handleChange}
        />
        <label htmlFor="num7">7</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          id="num8"
          value={8}
          checked={rating === 8}
          onChange={handleChange}
        />
        <label htmlFor="num8">8</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          id="num9"
          value={9}
          checked={rating === 9}
          onChange={handleChange}
        />
        <label htmlFor="num9">9</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          id="num10"
          value={10}
          checked={rating === 10}
          onChange={handleChange}
        />
        <label htmlFor="num10">10</label>
      </li>
    </ul>
  );
}

export default RaitingSelect;
