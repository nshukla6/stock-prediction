import "./assets/css/style.css"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import AuthProvider from "./AuthProvider";
function App() {
  

  return (
    <>
      <BrowserRouter >
      <AuthProvider>
        <Header />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
        <Footer />
      </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App
