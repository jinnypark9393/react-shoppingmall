import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authenticateAction } from '../redux/actions/authenticateAction'

const Login = ({ setAuthenticate }) => {
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // 페이지 새로고침 시 UI가 다시 그려짐 => 매번 refresh하는 것을 막아줘야함
  const loginUser = (event) => {
    // form 자체의 이벤트를 받아 새로고침 방지(form에서 거의 항상 사용)
    event.preventDefault();
    // console.log("LoginUser function");
    // setAuthenticate(true) 
    dispatch(authenticateAction.login(id,password))
    navigate("/")
  };

  return (
    // bootstrap 이용해 디자인
    <Container>
      {/* Form 유저의 정보를 받아 백엔드로 보내는 역할 */}
      {/* login 누르면 새로고침됨 */}
      {/* type = submit인 경우 onSubmit 이벤트 사용해야함 */}
      <Form onSubmit={(event) => loginUser(event)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={(event) => setId(event.target.value)} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={(event) => setPassword(event.target.value)} type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="dark" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
