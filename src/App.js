import React from 'react';
import { Route, Routes  } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Landing from './views/Landing';

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route path="/*" element={<Landing />} />
          </Routes>
        </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
