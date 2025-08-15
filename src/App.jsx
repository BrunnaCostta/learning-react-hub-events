import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import {FormCourse} from './components/LabelForm/index'

import './App.css';

function App() {
  return (
    <>
      <header className='bg-primary w-full text-center p-2'>
        <p className='text-white text-xl font-serif'>TechTeco</p>
      </header>

      <section className="bg-gradient-to-b from-[#17E4B9] to-[#091D24] flex justify-center w-screen ">
        <img src="banner.png" alt="Banner" />
      </section>

      <div className='body pt-12'>
      
          <FormCourse />
    
      </div>
    </>
  );
}

export default App;
