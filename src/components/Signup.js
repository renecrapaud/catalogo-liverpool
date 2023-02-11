import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/userAuthContext";
import Hero from "./HeroTitle"

const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <Hero value={"Registro con dirección de correo"}></Hero>
      <Col md={{ span: 6, offset: 3 }}>
        <div className="p-4 box mt-5">
          <h2 className="mb-3">nuevo usuario</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Dirección de Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Contraseña"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <div className="d-grid gap-2">
              <Button variant="primary" type="Submit">
                Registro
              </Button>
            </div>
          </Form>
        </div>
        <div className="p-4 box mt-3 text-center">
          ¿Ya tiene una cuenta? <Link to="/">Inicio de sesión</Link>
        </div>
      </Col>
    </>
  );
};

export default Signup;
