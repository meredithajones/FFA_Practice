import React from "react";
import Row from "../Row";
import Col from "../Col";
import Container from "../Container";
import Form from "../Form";


const Login = () => (
   <Container>
        <Row>
            <Col size="md-12">
                <div className="login" style={{ background: "lightblue" }}>
                <h1>Welcome to Fridge for All </h1>
                <h4>Please enter your login information, or sign up for a new account below</h4>
                <Form />
                <a href = "/Register"> Register </a>
                </div>
            </Col>
        </Row>
     </Container>
);

export default Login;