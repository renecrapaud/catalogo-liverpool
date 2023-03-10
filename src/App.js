import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { UserAuthContextProvider } from "./context/userAuthContext";
import "./App.css";
import Home from "./components/principal/Home";
import Login from "./components/sesion/Login";
import Signup from "./components/sesion/Signup";
import Detalle from "./components/principal/Detalle";
import GlobalState from './context/productContext';
import { useState } from 'react'
import ProtectedRoute from "./components/sesion/ProtectedRoute";

function App() {
  const [state, setState] = useState({});
  return (
  
    <Container>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <GlobalState.Provider value={[state, setState]}>
              <Routes>
                <Route path="/home" element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                } />
                <Route path="/detalle" element={<ProtectedRoute>
                  <Detalle />
                  </ProtectedRoute>} />
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
              </Routes>
            </GlobalState.Provider>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
