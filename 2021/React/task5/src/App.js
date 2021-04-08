import React, {useState, useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
    useParams, useRouteMatch,
    useHistory,
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
            <Route path="/posts" >
              <Posts />
            </Route>
            <Route path="/">
              <Home />
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

  console.log(props);
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const json = await response.json();

    setPosts(json);
  };

  useEffect(()=>{
    fetchData()
  },[]);

  return(
    <div>
      <ul>
        {posts.map(el => <Link path="{`/posts/${el.id}`}"> <li key={el.id}>{el.id}-{el.title}</li></Link>)}
      </ul>
    </div>
  )

}

function PostsDetails(props) {
  const [post, setPost] = useState();
  const history = useHistory();

  const fetchData = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const json = await response.json();

    setPost(json);
  };

  useEffect(()=>{
    fetchData()
  },[id]);

  return(
      <div>
        <Switch>
          <Route path="/posts/:id">
            <PostsDetails/>
          </Route>
          <Route>
            <Redirect to="/posts"/>
          </Route>
        </Switch>

        {post && (<> <h3>{post.title}</h3><p>{post.body}</p></>)}
        <button onClick={()=> history.push(`/posts/${+id + 1}`)}>Next Post</button>
      </div>
  )

}
