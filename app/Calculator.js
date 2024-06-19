// Calculator.js

import React from 'react';
import { connect } from 'react-redux';
import { addDigit, clearInput, calculateResult, } from './actions';
import Display from './Display';
import Link from 'next/link';


const Calculator = ({ input, result, addDigit,clearInput, calculateResult}) => {
  const handleClick = (digit) => {
    addDigit(digit);
  };

  const handleClear = () => {
    clearInput();
  };

  const handleCalculate = () => {
    calculateResult();
  };
  


  return (
    <div className="calculator">
      <Display   input={input}  result={result}  />
      {/* //console.log(input); */}
      <div className="buttons">
        
        
        <button className='rounded-lg  w-20 bg-gray-500 hover:bg-gray-700 text-white font-semibold m-2 p-3 shadow-md' onClick={()=>handleClick('(')}>(</button>
        <button className='rounded-lg  w-20 bg-gray-500 hover:bg-gray-700 text-white font-semibold m-2 p-3 shadow-md' onClick={() => handleClick(')')}>)</button>
        <button className='rounded-lg  w-20 bg-gray-500 hover:bg-gray-700 text-white font-semibold m-2 p-3 shadow-md' onClick={()=>handleClick('%')}>%</button>
        <button className='rounded-lg  w-20 bg-green-500 hover:bg-green-700 text-white font-semibold m-2 p-3 shadow-md' onClick={()=>handleClick('/')}>/</button>
        
        
        <br/>
        <button className='rounded-lg  w-20 bg-red-500 hover:bg-red-700 text-white font-semibold m-2 p-3 shadow-md' onClick={() => handleClick('9')}>9</button>
        <button className='rounded-lg  w-20 bg-red-500 hover:bg-red-700 text-white font-semibold m-2 p-3 shadow-md'onClick={() => handleClick('8')}>8</button>
        <button className='rounded-lg  w-20 bg-red-500 hover:bg-red-700 text-white font-semibold m-2 p-3 shadow-md'onClick={() => handleClick('7')}>7</button>
        <button className='rounded-lg  w-20 bg-green-500 hover:bg-green-700 text-white font-semibold m-2 p-3 shadow-md' onClick={() => handleClick('*')}>X</button>
        <br/>
        <button className='rounded-lg  w-20 bg-red-500 hover:bg-red-700 text-white font-semibold m-2 p-3 shadow-md'onClick={() => handleClick('6')}>6</button>
        <button className='rounded-lg  w-20 bg-red-500 hover:bg-red-700 text-white font-semibold m-2 p-3 shadow-md'onClick={() => handleClick('5')}>5</button>
        <button className='rounded-lg  w-20 bg-red-500 hover:bg-red-700 text-white font-semibold m-2 p-3 shadow-md'onClick={() => handleClick('4')}>4</button>
        <button className='rounded-lg  w-20 bg-green-500 hover:bg-green-700 text-white font-semibold m-2 p-3 shadow-md' onClick={() => handleClick('-')}>-</button>
        <br/>
        <button className='rounded-lg  w-20 bg-red-500 hover:bg-red-700 text-white font-semibold m-2 p-3 shadow-md'onClick={() => handleClick('3')}>3</button>
        <button className='rounded-lg  w-20 bg-red-500 hover:bg-red-700 text-white font-semibold m-2 p-3 shadow-md'onClick={() => handleClick('2')}>2</button>
        <button className='rounded-lg  w-20 bg-red-500 hover:bg-red-700 text-white font-semibold m-2 p-3 shadow-md'onClick={() => handleClick('1')}>1</button>
        <button className='rounded-lg  w-20 bg-green-500 hover:bg-green-700 text-white font-semibold m-2 p-3 shadow-md' onClick={() => handleClick('+')}>+</button>
        <br/>
        
        <button className='rounded-lg  w-20 bg-red-500 hover:bg-red-700 text-white font-semibold m-2 p-3 shadow-md'onClick={() => handleClick('0')}>0</button>
        <button className='rounded-lg  w-20 bg-gray-500 hover:bg-gray-700 text-white font-semibold m-2 p-3 shadow-md' onClick={handleClear}>C</button>
        
        <button className='rounded-lg  w-20 bg-red-500 hover:bg-red-700 text-white font-semibold m-2 p-3 shadow-md' onClick={() => handleClick('.')}>.</button>
        <button className='rounded-lg  w-20 bg-green-500 hover:bg-green-700 text-white font-semibold m-2 p-3 shadow-md' onClick={handleCalculate}>=</button>
        <br/>

        <Link href="/History" >
        <button className='rounded-lg  w-1/2 bg-yellow-500 hover:bg-yellow-700 text-white font-semibold m-2 p-3 shadow-m'> check history</button>
        </Link>
        
      </div>
      
    </div>
  );
};

const mapStateToProps = (state) => ({
  input: state.input,
  result: state.result,
  //history: state.history
});

const mapDispatchToProps = {
  addDigit,
  clearInput,
  calculateResult,
  //addToHistory,
  //clearHistory
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
