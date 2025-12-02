import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { Alert, Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import Loading from "../components/Loading"; // loading komponenten

export const SignUpForm: React.FC = () => {
  const { signUp } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [msg, setMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false); // loading state
  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMsg(null);
    setLoading(true); // starta loading

    try {
      const { error } = await signUp(email, password, name);

      // fejkad fördröjning så GIF syns
      await new Promise((resolve) => setTimeout(resolve, 1500));

      if (error) {
        toast.error(error.message, {
          style: {
            background: "#ffeaf1",
            color: "#8a5a6a",
          },
        });
        return;
      }

      toast.success("Konto skapat! Kolla din mail 📧", {
        icon: <span>✨</span>,
        style: {
          background: "#ffeaf1",
          color: "#8a5a6a",
          borderRadius: "12px",
          padding: "14px 16px",
          fontSize: "15px",
          boxShadow: "0px 4px 14px rgba(0,0,0,0.08)",
        },
      });

      navigate("/logga-in"); // redirect efter toast
    } catch (err: any) {
      toast.error(err?.message || "Något gick fel.");
    } finally {
      setLoading(false); // stoppa loading
    }
  };

  return (
    <>
      {loading && <Loading show={loading} />} {/* visar loading GIF */}
      <Form onSubmit={onSubmit}>
        {msg && <Alert variant="info">{msg}</Alert>}

        <Form.Group className="mb-2">
          <Form.Label>Namn</Form.Label>
          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label>Email</Form.Label>
          <Form.Control
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
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

        <Button type="submit" className="w-100">
          Registrera
        </Button>
      </Form>
    </>
  );
};
