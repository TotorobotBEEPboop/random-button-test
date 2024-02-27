import Button from './components/Button';
import { VideoComponent } from './components/Video';
import { getRandomBackground } from './utils';

const NUMBER_OF_COLOURS = 1000;

function App() {
  const randomBackground = getRandomBackground(NUMBER_OF_COLOURS);

  return (
    <div style={{ background: randomBackground }} className={'layer-three'}>
      <div style={{ position: 'relative' }}>
        <VideoComponent />
        <Button />
      </div>
    </div>
  );
}

export default App;
