import React from 'react'

import { addToHistory,clearHistory } from '../actions'
import { connect } from 'react-redux';
import Link from 'next/link';


const History =({history,addToHistory,clearHistory})=>{
  // const handleAddToHistory = () => {
  //   addToHistory(input, result);
  // };
  console.log(history)
  const stringg= history.toString()

  const handleClearHistory = () => {
    clearHistory();
  };
  return(
    <div className="content-center w-80">
        <h2 className='flex justify-center text-red-500 content-around font-serif text-2xl m-3 p-5'>History</h2>
        
        
          {history.map((item, index) => (
            <li key={index}>{item.expression}</li>
          ))}

        {/* <input type="text" value={stringg}></input> */}
        {/* <button onClick={handleAddToHistory}>Add to History</button> */}
        <br/>

        <div>

        <Link href="/" >
        {/* <button className='rounded-lg  w-1/2 bg-yellow-500 hover:bg-yellow-700 text-white font-semibold m-2 p-3 shadow-m'>Go to calculator</button> */}
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500
         group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
        >
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
       Go to calculator
        </span>
        </button>
        </Link>
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
        onClick={handleClearHistory}
        >
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        Clear History
        </span>
        </button>

        </div>
        

        {/* <Link href="/" >
        <button className='rounded-lg  w-1/2 bg-yellow-500 hover:bg-yellow-700 text-white font-semibold m-2 p-3 shadow-m'>Go to calculator</button>
        </Link> */}
        {/* <button className= "rounded-lg  w-44 bg-gray-800 hover:bg-gray-500 text-white font-semibold m-2 p-3 shadow-md"onClick={handleClearHistory}>Clear History</button> */}
    </div>
  );
}


const mapStateToProps = (state) => ({
  
  
  history: state.history
});

const mapDispatchToProps = {
  addToHistory,
  clearHistory
};

export default connect(mapStateToProps, mapDispatchToProps)(History);
