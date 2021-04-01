// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect} from 'react';



const Tabs = ({tabs, selectedTab}) => {
  return(
      <div style={{display: 'flex',}}>
        {tabs.map(tab=> (<button key={tab.title} style={{flex: 1, height: '50px', background: selectedTab === tab.title ? 'green' : 'white'}} onClick={tab.clickHandler}>{tab.title}</button>))}
      </div>
  )
};

const PostList =({list})=>{
  return(
    <div>
      {list.map(post=>(
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>))
      }
    </div>
  )
};

const  CommentsList =({list})=>{
  return(
      <div>
          {list.map(comment=>(
              <div key={comment.id}>
                  <h3>{comment.name}</h3>
                  <p>{comment.body}</p>
              </div>))
          }
      </div>
  )
};

const  AlbumsList =({list})=>{
  return(
      <div>
          {list.map(album=>(
              <div key={album.id}>
                  <h3>{album.title}</h3>
              </div>))
          }
      </div>
  )
};

const  PhotosList =({list})=>{
  return(
      <div>
          {list.map(photo=>(
              <div key={photo.id}>
                  <h3>{photo.title}</h3>
                  <p>{photo.thumbnailUrl}</p>
              </div>))
          }
      </div>
  )
};

const  TodosList =({list})=>{
  return(
      <div>
          {list.map(todo=>(
              <div key={todo.id}>
                  <h3>{todo.title}</h3>
                  <p>{todo.completed.toString()}</p>
              </div>))
          }
      </div>
  )
};

const  UsersList =({list})=>{
  return(
      <div>
          {list.map(user=>(
              <div key={user.id}>
                  <h3>{user.name}-{user.username}-{user.email}</h3>
              </div>))
          }
      </div>
  )
};

const urlBuilder = (resource) => `https://jsonplaceholder.typicode.com/${resource}`;

const POSTS = 'posts'
const COMMENTS = 'comments'
const ALBUMS = 'albums'
const PHOTOS = 'photos'
const TODOS = 'todos'
const USERS = 'users'

const Components ={
    [POSTS]: PostList,
    [COMMENTS]: CommentsList,
    [ALBUMS]: AlbumsList,
    [PHOTOS]: PhotosList,
    [TODOS]: TodosList,
    [USERS]: UsersList,
}

function App() {

    const onTabChangeHandler = (tab) => {
        if (tab !== selectedTab){
            setSelectedTab(tab);
            setList([])
        }
    }

      const tabs = [
            {title: POSTS, clickHandler: ()=> onTabChangeHandler(POSTS)},
            {title: COMMENTS, clickHandler: ()=> onTabChangeHandler(COMMENTS)},
            {title: ALBUMS, clickHandler: ()=> onTabChangeHandler(ALBUMS)},
            {title: PHOTOS, clickHandler: ()=> onTabChangeHandler(PHOTOS)},
            {title: TODOS, clickHandler: ()=> onTabChangeHandler(TODOS)},
            {title: USERS, clickHandler: ()=> onTabChangeHandler(USERS)},
      ]

    const [selectedTab, setSelectedTab] = useState(tabs[0].title)
    const [list, setList] = useState ([]);
    const [isLoading, setIsLoading] = useState(false)


    const fetchData = async ()=>{
      setIsLoading(true)
      const response = await fetch(urlBuilder(selectedTab) );
      const data = await response.json();
      setList(data)
      setIsLoading(false)
    }


     useEffect(()=>{
      fetchData();
     },[selectedTab])

    const ComponentToRender = Components[selectedTab];

  return(
    <div className="App">
      <Tabs tabs={tabs} selectedTab={selectedTab} />
        {isLoading ? <h1>LOADING...</h1> : (
            <ComponentToRender list={list}/>
        )}

    </div>
  );
}

export default App;


// потрібно створити логіку, яка задовільнить наступні вимоги
// в нас має бути 6 кнопок, які дозволяють нам переключатись між 'табами' (posts, comments, albums, photos, todos, users) https://jsonplaceholder.typicode.com/
// дефолтно обрана таба- пости
// по кліку на кнопку ми повинні підтягнути відповідний список і зрендерити його через .map
// лише 1 список видимий одночасно
// потрібно створити 6 компонент, які займатимуться рендерінгом списків (отримуватимуть пропсами список)- PostList, CommentsList...
