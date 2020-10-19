import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import UsersPage from './components/UsersPage';
import { applicationStore } from './store';
function App() {
  return (
    <Provider store={applicationStore}>
      <div className="App">
        <UsersPage />
      </div>
    </Provider>
  );
}

export default App;
