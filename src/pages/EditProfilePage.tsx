import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import "../assets/scss/EditProfilePage.scss";
import { toast } from "react-toastify";
import Header from "../components/Header";
import { useAuth } from "../hooks/useAuth";
import Loading from "../components/Loading";

export default function EditProfilePage() {
  const { profile, setProfile } = useAuth(); // <-- använd auth context
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState<number | null>(null);

  // Load profile
  useEffect(() => {
    async function loadProfile() {
      const { data: userData } = await supabase.auth.getUser();
      const user = userData?.user;
      if (!user) return;

      setEmail(user.email || "");

      if (!profile) {
        const { data: profileData } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", user.id)
          .single();

        if (profileData) setProfile(profileData);
      }
    }
    loadProfile();
  }, [profile, setProfile]);

  // Upload avatar
  async function uploadAvatar(file: File) {
    if (!file) return null;

    try {
      setUploading(true);
      setProgress(0);

      const fileExt = file.name.split(".").pop();
      const fileName = `${crypto.randomUUID()}.${fileExt}`;
      const filePath = fileName;

      const { error: uploadError } = await supabase.storage
        .from("avatars")
        .upload(filePath, file, { cacheControl: "3600", upsert: true });

      if (uploadError) {
        toast.error("Misslyckades med uppladdning: " + uploadError.message);
        return null;
      }

      const { data: urlData } = supabase.storage
        .from("avatars")
        .getPublicUrl(filePath);

      const publicUrl = urlData.publicUrl;

      setProfile({ ...profile!, avatar_url: publicUrl }); // <-- uppdatera global state

      setUploading(false);
      setProgress(null);

      return publicUrl;
    } catch (err: any) {
      setUploading(false);
      setProgress(null);
      toast.error("Fel vid uppladdning: " + err.message);
      return null;
    }
  }

  // Delete avatar
  async function deleteAvatar() {
    if (!profile?.avatar_url) return;

    try {
      const fileName = profile.avatar_url.split("/").pop();
      if (!fileName) return;

      const { error } = await supabase.storage
        .from("avatars")
        .remove([fileName]);

      if (error) throw error;

      setProfile({ ...profile, avatar_url: "" });
      toast.success("Profilbild borttagen!");
    } catch (err: any) {
      toast.error("Kunde inte ta bort bilden: " + err.message);
    }
  }

  // Update profile
  async function updateProfile() {
    if (!profile) return;
    setLoading(true);

    const { data: userData } = await supabase.auth.getUser();
    const user = userData?.user;
    if (!user) {
      setLoading(false);
      return;
    }

    const { error } = await supabase
      .from("profiles")
      .update({
        name: profile.name || null,
        bio: profile.bio || null,
        avatar_url: profile.avatar_url || null,
        updated_at: new Date().toISOString(),
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

  if (!profile) return <Loading show={true} />;

  return (
    <>
      <Header />
      <div className="edit-profile-page">
        <h2>Redigera Profil</h2>

        <div className="section">
          <div className="profile-photo-wrapper">
            <img
              src={profile.avatar_url || "/default-avatar.png"}
              alt="Avatar"
              className="avatar-img"
            />

            <input
              type="file"
              accept="image/*"
              onChange={async (e) => {
                const file = e.target.files?.[0];
                if (!file) return;

                await uploadAvatar(file);
              }}
            />

            {uploading && (
              <p>Laddar upp... {progress !== null ? progress + "%" : ""}</p>
            )}

            {profile.avatar_url && !uploading && (
              <button
                className="delete-avatar-btn"
                type="button"
                onClick={deleteAvatar}
              >
                Ta bort bild
              </button>
            )}
          </div>

          <input
            type="text"
            placeholder="Namn"
            value={profile.name || ""}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
          />

          <textarea
            placeholder="Bio"
            value={profile.bio || ""}
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
    </>
  );
}
