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

      <div>
        <button onClick={handleClick}>Click</button>

        {/* 👇️ show component on click */}
        {isShown && <DishCreateForm />}
      </div>
      <div className="FuncArea">
        <FuncPanel />
      </div>
      <div className="ContentArea">
        <MenuCardCollection />
      </div>
    </div>
  );
}

export default App;
