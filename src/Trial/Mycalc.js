import React, { useState } from 'react';



function Calc() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleNum1Change = (e) => setNum1(e.target.value);
  const handleNum2Change = (e) => setNum2(e.target.value);

  const calculate = (operation) => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
 
    if (isNaN(number1) || isNaN(number2)) {
      setResult('Please enter valid numbers');
      return;
    }

    let res;
    switch (operation) {
      case 'add':
        res = number1 + number2;
        break;
      case 'subtract':
        res = number1 - number2;
        break;
      case 'multiply':
        res = number1 * number2;
        break;
      case 'divide':
        res = number2!== 0? number1 / number2 :'Cannot divide by zero';
        break;
      default:
        res = 'Invalid operation';
    }
    setResult(`Result: ${res}`);
  };

  return (
    <div className="App">
      <div className="calculator">
        <h2>Its'me Midhun's Calculator</h2>
        <input type="text"  value={num1} onChange={handleNum1Change}
          placeholder="Enter first number"
        />
        
        <input type="text"  value={num2} onChange={handleNum2Change}  placeholder="Enter second number" />
        <div className="buttons">
          <button onClick={() => calculate('add')}>+</button>
          <button onClick={() => calculate('subtract')}>-</button>
          <button onClick={() => calculate('multiply')}>*</button>
          <button onClick={() => calculate('divide')}>/</button>
          
        </div>
          <h3>{result}</h3>
        
      </div>
    </div>
  );
}


export default Calc
