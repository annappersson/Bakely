import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import "../assets/scss/EditProfilePage.scss";
import { toast } from "react-toastify";

export default function EditProfilePage() {
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState({
    name: "",
    bio: "",
    avatar_url: "",
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Load profile
  useEffect(() => {
    async function loadProfile() {
      const { data: userData } = await supabase.auth.getUser();
      const user = userData?.user;
      if (!user) return;

      setEmail(user.email || "");

      const { data: profileData } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      if (profileData) {
        setProfile({
          name: profileData.name || "",
          bio: profileData.bio || "",
          avatar_url: profileData.avatar_url || "",
        });
      }
    }

    loadProfile();
  }, []);

  // Update profile
  async function updateProfile() {
    setLoading(true);

    const { data: userData } = await supabase.auth.getUser();
    const user = userData?.user;
    if (!user) {
      setLoading(false);
      return;
    }

    const updateData: any = {
      avatar_url: profile.avatar_url || null,
      bio: profile.bio || null,
    };

    // bara skicka namn om det finns
    if (profile.name && profile.name.trim() !== "") {
      updateData.name = profile.name;
      updateData.full_name = profile.name; // uppdatera full_name också
    }

    const { error } = await supabase
      .from("profiles")
      .update({
        name: profile.name || null,
        full_name: profile.name || null,
        bio: profile.bio || null,
        avatar_url: profile.avatar_url || null,
        updated_at: new Date().toISOString(), // <--- lägg till detta
      })
      .eq("id", user.id);

    if (error) toast.error("Kunde inte uppdatera profil: " + error.message);
    else toast.success("Profil uppdaterad!");

    setLoading(false);
  }

  // Update email
  async function updateEmail() {
    if (!email.trim()) return toast.error("E-post måste fyllas i.");
    setLoading(true);

    const { error } = await supabase.auth.updateUser({ email });

    if (error) toast.error("Kunde inte uppdatera e-post.");
    else toast.success("E-post uppdaterad!");

    setLoading(false);
  }

  // Update password
  async function updatePassword() {
    if (password.length < 6)
      return toast.error("Lösenord måste vara minst 6 tecken.");

    setLoading(true);

    const { error } = await supabase.auth.updateUser({ password });

    if (error) toast.error("Kunde inte ändra lösenord.");
    else toast.success("Lösenord uppdaterat!");

    setLoading(false);
  }

  return (
    <div className="edit-profile-page">
      <h2>Redigera Profil</h2>

      <div className="section">
        <h3>Profil</h3>

        <input
          type="text"
          placeholder="Namn"
          value={profile.name}
          onChange={(e) => setProfile({ ...profile, name: e.target.value })}
        />

        <textarea
          placeholder="Bio"
          value={profile.bio}
          onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
        />

        <button onClick={updateProfile} disabled={loading}>
          Spara profil
        </button>
      </div>

      <div className="section">
        <h3>Login</h3>

        <input
          type="email"
          placeholder="E-post"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button onClick={updateEmail} disabled={loading}>
          Uppdatera e-post
        </button>

        <input
          type="password"
          placeholder="Nytt lösenord"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={updatePassword} disabled={loading}>
          Byt lösenord
        </button>
      </div>
    </div>
  );
}
