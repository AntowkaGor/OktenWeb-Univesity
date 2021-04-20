import logo from './logo.svg';
import './App.css';
import  {useSelector,useDispatch} from "react-redux";
import {
  inCustomAction,
  incAction,
  decAction,
  resetAction,
} from './redux/action-creators';

function App() {
  const counter = useSelector(({counter})=> counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={() => dispatch(inCustomAction(102))}>inc custom</button>
      <button onClick={() => dispatch(incAction())}>inc</button>
      <button onClick={() => dispatch(decAction())}>dec</button>
      <button onClick={() => dispatch(resetAction())}>reset</button>
    </div>
  );
}

export default App;
