import { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { useTelegram } from './hooks/useTelegram';



function App() {

  let {onToggleButton, tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);

  return (

    <div className="App">
      <Header/>
      <button onClick={onToggleButton}>Toggle</button>
    </div>
  );
}

export default App;
