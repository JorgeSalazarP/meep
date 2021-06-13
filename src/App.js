import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import DataContextProvider from './context/DataContext';

import './reset.css';
import './App.css';
import MeepApp from './components/layout/MeepApp';


function App() {
  return (
      <DataContextProvider>
        <Switch>
          <Route exact path="/"component={MeepApp}/>
          <Route exact path='/meep'> 
              <Redirect to='/'/>
          </Route>
          <Route path="/404">
            <div
              style={{
                textAlign: 'center',
                fontSize: 48,
                fontWeight: 'bold',
              }}
            >
              404 | Not found page
            </div>
          </Route>
          <Route>
            <Redirect to="/404" />
          </Route>

        </Switch>
      </DataContextProvider>
    
  );
}

export default App;
