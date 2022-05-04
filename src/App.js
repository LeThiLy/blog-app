import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {Routes, Route, Link } from "react-router-dom";

function App() {
  const user = false;
  return (
    <>
      <Topbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={ user ? <Home/> : <Register/>}/>
        <Route path="/login" element={ user ? <Home/> : <Login/>}/>
        <Route path="/write" element={user ? <Write/> : <Register/>}/>
        <Route path="/setting" element={user ? <Settings/> : <Register/>}/>
        <Route path="/post/:postID" element={<Single/>}/>
      </Routes>
        {/* <Home/> */}
        {/* <Single/> */}
        {/* <Write/> */}
        {/* <Settings/> */}
        {/* <Login/> */}
        {/* <Register/> */}
    </>
  );
}

export default App;
