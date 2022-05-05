import React from 'react';
import './App.scss';
import TransferList from './components/TransferList/TransferList';
import { allTest, selectedTest } from './components/data';

const App = () => (
  <div style={{ display: 'flex' }}>
    <div style={{
      minWidth: 600, padding: 20, backgroundColor: '#fff', margin: '50px auto',
    }}
    >
      <TransferList
        allItems={allTest}
        selectedItems={selectedTest}
        selectedTitle="Selected items"
        availableTitle="Available items"
      />
    </div>
  </div>
);

export default App;
