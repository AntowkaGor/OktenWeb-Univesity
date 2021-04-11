import React, {useState, useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useLocation,
  useHistory,
  useRouteMatch,
  Redirect
} from "react-router-dom";

export default function App() {
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/posts">Posts</Link>
              </li>
            </ul>
          </nav>


          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/posts" exact >
              <Posts />
            </Route>
            <Route path="/posts/:id"  >
              <PostsDetails />
            </Route>
           <Route>
             <h1> PAGE NOT FOUND</h1>
           </Route>
          </Switch>
        </div>
      </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Posts(props) {
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const json = await response.json();

    setPosts(json);
  }

  useEffect(()=>{
    fetchData()
  },[])

  return(
    <div>
       <ul>
        {posts.map(el => <Link to={`/posts/${el.id}`}> <li key={el.id}>{el.id} - {el.title}</li></Link>)}
      </ul>
    </div>
  )
}

function PostsDetails(props) {
  const [post, setPost] = useState();

  const match = useRouteMatch();
  const{id} = useParams();
  const location = useLocation();
  const history = useHistory();

  const fetchData = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const json = await response.json();

    setPost(json);
  };

  useEffect(()=>{
    fetchData()
  },[id])

  return(
      <div>
         <h1>Post Details</h1>
        {post && (<> <h3>{post.title}</h3><p>{post.body}</p></>)}
        <button onClick={()=> history.push(`/posts/${+id + 1}`)}>Next Post</button>
      </div>
  )

}
