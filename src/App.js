import './App.css';

import { useState } from 'react';

let nextId = 0;


function App() {

  const [name, setName] = useState('');
  const [answers, setAnswers] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hey, how are you doing?
        </p>

        <button className='button' onClick={e => {
            setAnswers([
              ...answers,
              { id: nextId++, name: "I'm doing good!" }
            ]);
          }}>I'm doing good!</button>
          
        <button className='button' onClick={e => {
            setAnswers([
              ...answers,
              { id: nextId++, name: "Good thanks! And you?" }
            ]);
          }}>Good thanks! And you?</button>

        <button className='button' onClick={e => {
            setAnswers([
              ...answers,
              { id: nextId++, name: "Could be better..." }
            ]);
          }}>Could be better...</button>

        {answers.map((answer) => <p key={answer.id}>{answer.name}</p>)}

        <input
          type='text'
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <button className='button'
          onClick={e => {
            setAnswers([
              ...answers,
              { id: nextId++, name: name }
            ]);
          }}>send</button>

      </header>
    </div>
  );
}

export default App;
