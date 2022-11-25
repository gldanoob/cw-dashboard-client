import { useEffect, useState } from 'react';
import data from '../assets/data.json';
import '../style/App.css';
import Section from './Section';

function App() {

  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const i = setInterval(t => {
      setProgress(progress => (progress + 1) % 100)
    }, 16)

    return () => { clearInterval(i) }

  }, [])

  data.tasks[0].score = progress;
  data.tasks[2].score = (20 - progress / 5) | 0;

  return (

    <div className="App">
      <div className="App-body">
        <Section name={data.name} desc={data.desc} tasks={data.tasks} />
      </div>
    </div>
  );
}

export default App;
