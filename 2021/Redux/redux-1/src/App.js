import logo from './logo.svg';
import React from 'react'
import './App.css';
import  {useSelector,useDispatch} from "react-redux";
import {
  inCustomAction,
  incAction,
  decAction,
  resetAction,
    inCustomAction2,
    incAction2,
    decAction2,
    resetAction2,
    onUsersLoaded,
    onAddtoDelate,
    onRemoveFromDelate,
} from './redux/action-creators';

const PhotosList = () =>{
    const dispatch = useDispatch();
    const users = useSelector(({userReducer:{users}}) => users);
    const badEmployees = useSelector(({userReducer:{badEmployees}}) => badEmployees);
    const fetchPhotos = async () =>{
        const resp= await fetch('https://dummyapi.io/data/api/user?limit=10',{
            headers: {
                'app-id': 'lTE5abbDxdjGplutvTuc'
            }
        });
        const json = await resp.json()
        console.log(json);

        dispatch(onUsersLoaded(json.data));
    }

    React.useEffect(()=>{
        if(!users.length){
            fetchPhotos()
        }
    },[])

    return <div>
        {users.map(el => (
            <img
                style={
                    {filter:badEmployees.includes(el.id) ? 'blur(4px)' : ''}
                }
                onClick={()=>{
                    const alreadyList = badEmployees.includes(el.id)
                        dispatch(alreadyList ? onRemoveFromDelate(el.id) : onAddtoDelate(el.id))
                }}
                key={el.id}
                src={el.picture}
                alt={el.firstName}
            />
        ))}
    </div>
}

function App() {
  const {counter1,counter2} = useSelector(({counter1,counter2})=> ({
      counter1: counter1.counter,
      counter2: counter2.counter,
  }));

  const dispatch = useDispatch();

  return (
    <div className="App">
        {!(counter1 % 2) && <PhotosList/>}
      <h1>{counter1}-1</h1>
      <h1>{counter2}-2</h1>
      <button onClick={() => dispatch(inCustomAction(102))}>inc custom</button>
      <button onClick={() => dispatch(incAction())}>inc</button>
      <button onClick={() => dispatch(decAction())}>dec</button>
      <button onClick={() => dispatch(resetAction())}>reset</button><br/>
        <button onClick={() => dispatch(inCustomAction2(100))}>inc custom2</button>
        <button onClick={() => dispatch(incAction2())}>inc2</button>
        <button onClick={() => dispatch(decAction2())}>dec2</button>
        <button onClick={() => dispatch(resetAction2())}>reset2</button>
    </div>
  );
}

export default App;
