import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Counter from './Counter.js'
import Info from './Info.js'

const App = ()=> {
  // return <Counter />;
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button onClick={()=>{
        setVisible(!visible);
      }}
      >{visible?'숨기기':'보이기'}</button>
      <hr />
      {visible && <Info /> }
    </div>
  );
};

export default App;
