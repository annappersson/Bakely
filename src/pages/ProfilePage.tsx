// src/pages/ProfilePage.tsx
import { useEffect, useState } from "react";
import "../assets/scss/ProfilePage.scss";
import { Bookmark } from "lucide-react";
import { supabase } from "../supabaseClient";
import Header from "../components/Header";

interface Collection {
  id: string;
  user_id: string;
  name: string;
  description?: string | null;
  created_at: string;
  collection_items?: any[]; // används för att räkna antal recept
}

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<"saved" | "liked" | "created">(
    "saved"
  );

  const [userId, setUserId] = useState<string | null>(null);
  const [collections, setCollections] = useState<Collection[]>([]);
  const [loading, setLoading] = useState(false);

  // ⭐ 1. Hämta inloggad användare
  useEffect(() => {
    async function fetchUser() {
      const { data } = await supabase.auth.getUser();
      setUserId(data?.user?.id || null);
      console.log("UserId:", data?.user?.id);
    }
    fetchUser();
  }, []);

  // ⭐ 2. Hämta användarens samlingar med antal recept
  useEffect(() => {
    if (!userId) return;

    async function fetchCollections() {
      setLoading(true);

      const { data, error } = await supabase
        .from("user_collections")
        .select("*, collection_items(*)") // inkludera recept
        .eq("user_id", userId)
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Kunde inte hämta samlingar:", error);
      } else if (data) {
        console.log("Collections data:", data);
        setCollections(data as Collection[]);
      }

      setLoading(false);
    }

    fetchCollections();
  }, [userId]);

  return (
    <>
      <Header />
      <div className="profile-page">
        <div className="profile-header">
          <h2>Min Profil</h2>
          <button className="menu-btn">⋮</button>
        </div>

        <div className="profile-card">
          <img className="profile-img" src="/placeholder-profile.jpg" alt="" />
          <h3 className="profile-name">Ditt Namn</h3>
          <p className="profile-bio">Bakningsentusiast 🧁</p>

          <div className="stats">
            <div>
              <span>47</span>
              <p>Recept</p>
            </div>
            <div>
              <span>23</span>
              <p>Skapade</p>
            </div>
            <div>
              <span>1.2k</span>
              <p>Likes</p>
            </div>
          </div>

          <button className="edit-profile-btn">Redigera Profil</button>
        </div>

        <div className="profile-tabs">
          <button
            onClick={() => setActiveTab("saved")}
            className={activeTab === "saved" ? "active" : ""}
          >
            Sparade
          </button>

          <button
            onClick={() => setActiveTab("created")}
            className={activeTab === "created" ? "active" : ""}
          >
            Skapade
          </button>

          <button
            onClick={() => setActiveTab("liked")}
            className={activeTab === "liked" ? "active" : ""}
          >
            Gillade
          </button>
        </div>

        {/* Receptlistor byts senare */}
        <div className="recipe-grid">
          <p className="placeholder-text">Recept kommer här… 🍰</p>
        </div>

        {/* ⭐ DYNAMISKA SAMLINGAR ⭐ */}
        <div className="collections">
          <div className="collections-header">
            <h3>Mina Samlingar</h3>
            <button className="view-all">Visa alla</button>
          </div>

          <div className="collection-list">
            {loading && <p>Laddar samlingar…</p>}

            {!loading && collections.length === 0 && (
              <p className="text-muted">Inga samlingar ännu.</p>
            )}

            {!loading &&
              collections.map((c) => (
                <div key={c.id} className={`collection-card pink`}>
                  <div className="icon">
                    <Bookmark />
                  </div>
                  <div>
                    <h4>{c.name}</h4>
                    <p>{c.collection_items?.length || 0} recept</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
