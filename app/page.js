// App.js
"use client"
import React from 'react';
import { Provider } from 'react-redux';


import store from './store';
import Calculator from './Calculator';
import Link from 'next/link';




function App() {
  return (
    <Provider store={store}>
      <div className="flex justify-center m-2 p-3 ">
        {/* <h4 className='text-red-500 content-around font-serif text-2xl m-3 p-5'>Redux Calculator</h4> */}
        <Calculator/>
        {/* <Link href="/History" >
        <button className='rounded-lg  w-1/4 bg-yellow-500 hover:bg-yellow-700 text-white font-semibold m-2 p-3 shadow-m'> check history</button>
        </Link> */}
        
      </div>
    </Provider>
  );
}

export default App;
