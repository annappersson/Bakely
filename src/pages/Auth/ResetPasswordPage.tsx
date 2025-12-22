import { useState } from "react";
import { useNavigate } from "react-router";
import "../../assets/scss/LoginPage.scss";
import { supabase } from "../../supabaseClient";
import Header from "../../components/Header";
import { toastError, toastSuccess } from "../../utils/toastConfig";

export default function ResetPasswordPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // 🔍 Live-validering
  const passwordTooShort = password.length > 0 && password.length < 6;
  const passwordsDoNotMatch =
    confirmPassword.length > 0 && password !== confirmPassword;

  const isFormValid = password.length >= 6 && password === confirmPassword;

  async function handleUpdatePassword() {
    if (!isFormValid) return;

    setLoading(true);

    const { error } = await supabase.auth.updateUser({
      password,
    });

    if (error) {
      toastError(error.message);
    } else {
      toastSuccess("Lösenordet är uppdaterat 🎉");
      navigate("/logga-in");
    }

    setLoading(false);
  }

  return (
    <>
      <Header />
      <div className="login-wrapper">
        <div className="login-card reset-card">
          <button className="back-btn" onClick={() => navigate("/logga-in")}>
            ← Tillbaka
          </button>
          <div className="logo-circle">
            <span className="cake-icon">🔐</span>
          </div>

          <h2 className="title">Nytt lösenord</h2>
          <p className="subtitle">
            Välj ett nytt lösenord för ditt Bakely-konto
          </p>

          {/* NYTT LÖSENORD */}
          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Minst 6 tecken"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="button"
              className="toggle-visibility"
              onClick={() => setShowPassword(!showPassword)}
              aria-label="Visa/dölj lösenord"
            >
              {showPassword ? "🙈" : "👁"}
            </button>
          </div>

          {passwordTooShort && (
            <p className="input-error">Lösenordet måste vara minst 6 tecken</p>
          )}

          {/* BEKRÄFTA LÖSENORD */}
          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Bekräfta lösenord"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <button
              type="button"
              className="toggle-visibility"
              onClick={() => setShowPassword(!showPassword)}
              aria-label="Visa/dölj lösenord"
            >
              {showPassword ? "🙈" : "👁"}
            </button>
          </div>

          {passwordsDoNotMatch && (
            <p className="input-error">Lösenorden matchar inte</p>
          )}

          <button
            onClick={handleUpdatePassword}
            disabled={!isFormValid || loading}
          >
            {loading ? "Uppdaterar..." : "Uppdatera lösenord"}
          </button>
        </div>
      </div>
    </>
  );
}
