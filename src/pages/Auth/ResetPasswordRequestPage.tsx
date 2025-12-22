import { useState } from "react";
import "../../assets/scss/LoginPage.scss";
import Header from "../../components/Header";
import { supabase } from "../../supabaseClient";
import { toastError, toastSuccess } from "../../utils/toastConfig";

export default function ResetPasswordRequestPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleReset() {
    if (!email) {
      toastError("Ange din e-postadress");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/aterstall-losenord/nytt`,
    });

    if (error) {
      toastError(error.message);
    } else {
      toastSuccess(
        "Ett mail har skickats till dig med instruktioner för att återställa lösenordet 💌"
      );
    }

    setLoading(false);
  }

  return (
    <>
      <Header />
      <div className="login-wrapper">
        <div className="login-card reset-card">
          <div className="logo-circle">
            <span className="cake-icon">💌</span>
          </div>

          <h2 className="title">Återställ lösenord</h2>
          <p className="subtitle">
            Ange din e-postadress så skickar vi en återställningslänk
          </p>

          <input
            type="email"
            placeholder="E-postadress"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="email-input"
          />

          <button onClick={handleReset} disabled={loading}>
            {loading ? "Skickar..." : "Skicka återställningslänk"}
          </button>
        </div>
      </div>
    </>
  );
}
