import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import Login from "./login"
import Register from "./reg"
import "./App.css"
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
