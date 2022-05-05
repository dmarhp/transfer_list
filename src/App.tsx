import React from 'react';
import './App.scss';
import TransferList from './components/TransferList/TransferList';
import {
  allGrouped, allUngrouped, selectedGroup, selectedUngroup,
} from './components/data';

const groupedValues = [allGrouped, selectedGroup];
const ungroupedValues = [allUngrouped, selectedUngroup];

const App = () => {
  const values = groupedValues;

  return (
    <div style={{ display: 'flex' }}>
      <div style={{
        minWidth: 600, padding: 20, backgroundColor: '#fff', margin: '50px auto',
      }}
      >
        <TransferList
          allItems={values[0]}
          selectedItems={values[1]}
          selectedTitle="Selected items"
          availableTitle="Available items"
          selectionColor="#bdbdbd"
        />
      </div>
    </div>
  );
};

export default App;
