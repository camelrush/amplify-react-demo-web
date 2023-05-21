import { useState } from 'react';
import './App.css';
import {
  MenuCardCollection,
  FuncPanel,
  DishCreateForm
} from './ui-components';

function App() {

  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    // 👇️ toggle shown state
    setIsShown(current => !current);
  };

  return (
    <div className="App">
      <div className="FuncArea">
        <FuncPanel handleClick={handleClick} />
      </div>
      <div className="ContentArea">
        <MenuCardCollection />
      </div>
      {isShown &&
        <div id="overlay">
          <div id="content">
            <DishCreateForm handleClick={handleClick} />
          </div>
        </div>
      }
    </div>
  );
}

export default App;
