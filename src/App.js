import './App.css';
import {
  HashRouter,
  NavLink,
  Route,
  useNavigate,
  Routes,
  useParams,
  Outlet
} from 'react-router-dom';

const Todo = () => {
  return <p>這是 Todo 頁面 
    <LogOut/>
  </p>;
};
const Login = () => {
  return <p>這是登入頁面</p>;
};
const Register = () => {
  return <p>這是註冊頁面</p>;
};

const LogOut = () =>{
  const navigate = useNavigate();
  return(
    <button onClick={()=>{ navigate('/login')}}>登出</button>
  )
}
const ProfilePage = () =>{
  let params =useParams();
  return<p>UserID: {params.userId}</p>
}

const Post = () =>{
  return <div>
    <h3>使用者詳細資料</h3>
    <Outlet/>
  </div>
}


function App() {
  return (
    <div className="container">
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
          <NavLink to="/post/123">
            <p>Post頁面</p>
          </NavLink>
        </div>
        <Routes>
          <Route path="/"/>
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/todo" element={<Todo/>} />
          <Route path="/post" element={<Post/>}>
            <Route path=":userId" element={<ProfilePage/>} />
          </Route>
          <Route
          path="*"
          element={
          <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
          </main>
          }
          />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
