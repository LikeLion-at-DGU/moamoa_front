
import { Outlet, Route, Routes, useNavigate } from "react-router-dom"
import  { Container } from "./pages/MainPage"
import styled from 'styled-components';
import Nav from "./components/Nav";


function App() {

  const navigate = useNavigate();

  const Gotosignup = () => {
    navigate("/")
  }

  return (
    <>
      <Container>
        <Nav/>
        <Outlet/>
      </Container>

    </>
  )
}

export default App
