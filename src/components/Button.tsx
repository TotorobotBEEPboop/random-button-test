import { useState } from 'react';
import { getRandomBackground } from '../utils';

const NUMBER_OF_COLOURS = 1000;

const Button = () => {
  const [counter, setCounter] = useState(0);
  const randomBackground = getRandomBackground(NUMBER_OF_COLOURS);

  return (
    <div style={{ background: randomBackground }} className={'layer-three'}>
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
