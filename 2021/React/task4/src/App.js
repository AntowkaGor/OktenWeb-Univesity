import './App.css';
import React, {useState} from 'react';

function App() {

  const BASE_URL = 'https://jsonplaceholder.typicode.com'

  const AVAILABLE_RESOURCES = [
      'posts',
      'comments',
      'albums',
      'photos',
      'todos',
      'user',
  ]

  const [endpoint, setEndpoint] = useState('');
  const [id, setId] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const [items, setItems] = useState([])
  const [singleItems, setSingleItems] = useState(null)

  const onSubmit = () => {
    if (!endpoint){
      return  setErrorMessage('first input is required')
    }
    if(!AVAILABLE_RESOURCES.includes(endpoint.trim().toLowerCase())) {
       return setErrorMessage('value is not valid, try: posts,comments,albums,photos,todos,user')
    }


    const idToNum = Number(id);
    if(!idToNum && id !== '' && idToNum !== 0) {
        return setErrorMessage('value is not valid, pls use numeric value')
    }
    if((idToNum<1 || idToNum>100) && id !== '') {
        return setErrorMessage('value is out of range, pls use 1-100')
    }
      setErrorMessage('')
      fetchData()
  }

  const fetchData = async() => {
    const response = await fetch(`${BASE_URL}/${endpoint.trim().toLowerCase()}/${id.trim()}`);
    const json = await response.json();

    if (id){
      setSingleItems(json)
      setItems([])
      return
    }
    setSingleItems(null)
    setItems(json)
  }




  return (
    <div className="App">
      <br />
      <br />
      <input value={endpoint} onChange={({target:{value}})=> setEndpoint(value) } type="text" placeholder="Type: posts, comments, albums, photos..."/>
      <br />
      <br />
      <input value={id} onChange={({target:{value}})=> setId(value) } type="text" placeholder="Type: id from first example"/>
      <br />
      <br />
      <button onClick={onSubmit}>fetch data</button>
      <hr/>
      <h1 style={{color: 'red'}}>{errorMessage}</h1>

      <div style={{width: '400px', textAlign: 'left', padding: '20px'}}>
        <pre style={{whiteSpace: 'pre-wrap'}}>
          {singleItems &&
            JSON.stringify(singleItems,null,2)}
        </pre>
      </div>
      <hr/>
      <div>
        {items.map(el=> (<div>{el.id}-{el.title}</div>))}
      </div>

    </div>
  );
}

export default App;

// створити 2 инпута и кнопку
// первый инпут отвечает за эндпойнт jsonplaceholder
// воторой за айдишник выбраного ендпойнта, если айдишник не выбран , тянем весь список

// сделать валидацию
// на первый инпут , или существует ендпоинт
// или это число , оно в рамках от 1 до 100
// сделать версию на функционвльной компоненте контролированную и не контролированную
