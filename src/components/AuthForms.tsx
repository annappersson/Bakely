import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../hooks/useAuth";

export const SignUpForm: React.FC = () => {
  const { signUp } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMsg(null);
    const { error, user } = await signUp(email, password);
    if (error) setMsg(error.message);
    else setMsg("Kolla din mail för verifiering (om aktiverat).");
  };

  return (
    <Form onSubmit={onSubmit}>
      {msg && <Alert variant="info">{msg}</Alert>}
      <Form.Group className="mb-2">
        <Form.Label>Email</Form.Label>
        <Form.Control
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label>Lösenord</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Button type="submit">Registrera</Button>
    </Form>
  );
};

export const SignInForm: React.FC = () => {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null);
    const { error } = await signIn(email, password);
    if (error) setErr(error.message);
  };

  return (
    <Form onSubmit={onSubmit}>
      {err && <Alert variant="danger">{err}</Alert>}
      <Form.Group className="mb-2">
        <Form.Label>Email</Form.Label>
        <Form.Control
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label>Lösenord</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Button type="submit">Logga in</Button>
    </Form>
  );
};
