import { useState, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { Alert, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router";
import Loading from "../components/Loading";
import { toastError, toastSuccess } from "../utils/toastConfig";

export const SignUpForm: React.FC = () => {
  const { signUp } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [msg, setMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [passwordValid, setPasswordValid] = useState({
    length: false,
    uppercase: false,
    numberOrSpecial: false,
  });
  const [passwordMatch, setPasswordMatch] = useState(true);
  const navigate = useNavigate();

  // Funktion som validerar varje krav
  const validatePassword = (pwd: string) => {
    return {
      length: pwd.length >= 6,
      uppercase: /[A-Z]/.test(pwd),
      numberOrSpecial: /[0-9!@#$%^&*(),.?":{}|<>]/.test(pwd),
    };
  };

  // Real-time validering medan man skriver
  useEffect(() => {
    setPasswordValid(validatePassword(password));
    setPasswordMatch(password === confirmPassword);
  }, [password, confirmPassword]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMsg(null);

    const valid = validatePassword(password);
    if (!valid.length || !valid.uppercase || !valid.numberOrSpecial) {
      setMsg("Lösenordet uppfyller inte alla krav.");
      return;
    }

    if (password !== confirmPassword) {
      setMsg("Lösenorden matchar inte.");
      return;
    }

    setLoading(true);

    try {
      const { error } = await signUp(email, password, name);

      await new Promise((resolve) => setTimeout(resolve, 1500));

      if (error) {
        toastError(error.message || "Något gick fel vid registrering.");
        return;
      }

      toastSuccess("Konto skapat! Kolla din mail 📧");

      navigate("/logga-in");
    } catch (err: any) {
      toastError(err?.message || "Något gick fel.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Loading show={loading} />}
      <Form onSubmit={onSubmit}>
        {msg && <Alert variant="info">{msg}</Alert>}

        <Form.Group className="mb-2">
          <Form.Label>Namn</Form.Label>
          <Form.Control
            placeholder="Bakely Bakingsson"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Bakning@mail.com"
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
          {password && (
            <ul
              className="text-muted small mb-0"
              style={{ paddingLeft: "20px" }}
            >
              <li style={{ color: passwordValid.length ? "green" : "red" }}>
                Minst 6 tecken
              </li>
              <li style={{ color: passwordValid.uppercase ? "green" : "red" }}>
                Minst en stor bokstav
              </li>
              <li
                style={{
                  color: passwordValid.numberOrSpecial ? "green" : "red",
                }}
              >
                Minst en siffra eller specialtecken
              </li>
            </ul>
          )}
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label>Bekräfta Lösenord</Form.Label>
          <Form.Control
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {confirmPassword && !passwordMatch && (
            <small className="text-danger">Lösenorden matchar inte</small>
          )}
        </Form.Group>

        <Button type="submit" className="w-100">
          Registrera
        </Button>
      </Form>
    </>
  );
};
