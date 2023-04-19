import React from 'react';
import {Route, Routes, Link} from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';

function App() {
  return (
    <div>
      <header>
        <p><Link to='/page-1'>Página 1</Link></p>
        <p><Link to='/page-2'>Página 2</Link></p>
      </header>
      <main>
          <Routes>
            <Route path='/page-1' element= {<Page1/>}/>
            <Route path='/page-2' element= {<Page2/>}/>
          </Routes>
        </main>
    </div>
  );
}

export default App;
