import React, { useState } from 'react';

// Basic calculator component supporting addition, subtraction, multiplication and division
export default function Calculadora() {
  const [display, setDisplay] = useState('');
  const [result, setResult] = useState(null);

  const handleClick = (value) => {
    setDisplay((prev) => prev + value);
  };

  const clear = () => {
    setDisplay('');
    setResult(null);
  };

  const calculate = () => {
    try {
      // eval is used for simplicity in this demo; in production use a proper parser
      // eslint-disable-next-line no-eval
      const evalResult = eval(display);
      setResult(evalResult);
    } catch (e) {
      setResult('Error');
    }
  };

  return (
    <div style={{ maxWidth: '200px', margin: '20px' }}>
      <input
        type="text"
        value={display}
        readOnly
        style={{ width: '100%', marginBottom: '5px', textAlign: 'right' }}
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '5px' }}>
        {[ '7','8','9','/',
           '4','5','6','*',
           '1','2','3','-',
           '0','.','=', '+' ].map((char) => (
          <button
            key={char}
            onClick={() => {
              if (char === '=') calculate();
              else handleClick(char);
            }}
            style={{ padding: '10px' }}
          >
            {char}
          </button>
        ))}
        <button onClick={clear} style={{ gridColumn: 'span 4', padding: '10px' }}>C</button>
      </div>
      {result !== null && (
        <div style={{ marginTop: '10px' }}>Result: {result}</div>
      )}
    </div>
  );
}
