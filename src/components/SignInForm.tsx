import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { Alert, Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { useNavigate } from "react-router"; // viktigt!
import Loading from "./Loading";

export const SignInForm: React.FC = () => {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState<string | null>(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMsg(null);
    setLoading(true);

    try {
      const { error } = await signIn(email, password);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      if (error) {
        toast.error("Fel email eller lösenord.");
        return;
      }

      toast.success("Välkommen tillbaka! ", {
        icon: <span>💕</span>,
        style: {
          background: "#ffeaf1",
          color: "#8a5a6a",
          borderRadius: "12px",
          padding: "14px 16px",
          fontSize: "15px",
          boxShadow: "0px 4px 14px rgba(0,0,0,0.08)",
        },
      });

      navigate("/"); // redirect efter toasten
    } catch (err: any) {
      toast.error(err?.message || "Något gick fel.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Loading show={loading} />}
      <Form onSubmit={onSubmit}>
        {msg && <Alert variant="danger">{msg}</Alert>}

        <Form.Group className="mb-2">
          <Form.Label>Email</Form.Label>
          <Form.Control
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Lösenord</Form.Label>
          <Form.Control
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </Form.Group>

        <Button type="submit" className="w-100">
          Logga in
        </Button>
      </Form>
    </>
  );
};
