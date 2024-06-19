// actions.js

export const addDigit = (digit) => ({
    type: 'ADD_DIGIT',
    payload: digit
  });
  
  export const clearInput = () => ({
    type: 'CLEAR_INPUT'
  });
  
  export const calculateResult = () => ({
    type: 'CALCULATE_RESULT'
  });
  
  export const addToHistory = (expression, result) => ({
    type: 'ADD_TO_HISTORY',
    payload: { expression, result }
  });
  
  export const clearHistory = () => ({
    type: 'CLEAR_HISTORY'
  });