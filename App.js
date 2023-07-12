import React  from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Create from './componets/Create';
import Read  from './componets/Read';
import Update from './componets/update';

function App() {
  return (
    <div className="App">
      <h1>Curd operation</h1>
       <BrowserRouter>
         <Routes>
           <Route exact path="/Create" element={<Create/>} />
           <Route exact path="/Read" element={<Read/>} />
           <Route exact path="/Update" element={<Update/>} />
         </Routes>
       </BrowserRouter>

    </div>
  );
}

export default App;
