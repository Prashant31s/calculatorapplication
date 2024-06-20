// Display.js

import React from 'react';

const Display = ({ input, result }) => {
  return (
    <div className="display">
      <div className="text-white">{input}</div>

      {/* <div className='w-full '> */}
      {/* <div className="result ">{result}</div> */}
      {/* </div> */}
      
    </div>
  );
};

export default Display;
