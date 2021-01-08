import FetchedPost from "./components/FetchedPost";
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="container pt-3 mb-5">
      <div className='row'>
        <div className="col">
          <PostForm />
          <hr />
        </div>
      </div>
      <div className='row'>
        <div className="col">
          <h2 className="mb-5">Синхронные посты</h2>
          <Posts posts={[]} />
        </div>
        <div className="col">
          <h2 className="mb-5">Асинхронные посты</h2>
          <FetchedPost />
        </div>
      </div>
    </div>
  );
}

export default App;
