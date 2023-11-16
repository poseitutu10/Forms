import './App.css';
import { Brand } from './components/Brand';
import { Category, Main } from './components/Category';
import { Code } from './components/Code';
import { Department } from './components/Department';
import { Header } from './components/Header';
import { Rank } from './components/Rank';
import { Region } from './components/Region';
import { Serial } from './components/Serial';
import { Submit } from './components/Submit';
import { Year } from './components/Year';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='js-detail'>
        <Category />
        <Region />
        <Department />
        <Rank />
        <Brand />
        <Serial />
        <Year />
        <Code />
        <Submit />
      </div>
    </div>
  );
}

export default App;
