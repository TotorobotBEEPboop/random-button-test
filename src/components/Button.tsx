import { useState } from 'react';

const Button = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <div className="layer-two">
        <div className="layer-one">
          <button onClick={() => setCounter(counter + 1)} type="button" className="btn btn-primary">
            <span className="but-text">Hi!</span>
          </button>
          <p className="text">{counter}</p>
        </div>
      </div>
    </div>
  );
};

export default Button;
