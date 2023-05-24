import { useState } from 'react';
import './App.css';
import {
  MenuCardCollection,
  FuncPanel,
  DishCreateForm
} from './ui-components';
import { Filter, FilterAdd, FilterDialog } from './components'

function App() {

  const [showAddDlg, setShowAddDlg] = useState(false);
  const [showFilterDlg, setShowFilterDlg] = useState(false);
  const [filters, setFilters] = useState([]);

  const addDialog = event => {
    // 👇️ toggle shown state
    setShowAddDlg(current => !current);
  };

  const filterDialog = event => {
    // 👇️ toggle shown state
    setShowFilterDlg(current => !current);
  };

  return (
    <div className="App">
      {
        <div className="filter-area">
          {
            filters.map((filter) => {
              return filter;
            })
          }
          <FilterAdd handleClick={filterDialog} />
        </div>
      }
      <div className="FuncArea">
        <FuncPanel handleClick={addDialog} />
      </div>
      <div className="ContentArea">
        <MenuCardCollection />
      </div>
      {showAddDlg &&
        <div id="overlay">
          <div id="content">
            <DishCreateForm handleClick={addDialog} />
          </div>
        </div>
      }
      {showFilterDlg &&
        <div id="overlay">
          <div id="content">
            <FilterDialog filters={filters} setFilters={setFilters} handleClose={filterDialog}/>
          </div>
        </div>
      }
    </div>
  );
}

export default App;
