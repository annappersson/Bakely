// src/pages/ProfilePage.tsx
import { useEffect, useMemo, useState } from "react";
import "../assets/scss/ProfilePage.scss";
import { Bookmark } from "lucide-react";
import { supabase } from "../supabaseClient";
import Header from "../components/Header";
import { Link } from "react-router";
import { useAuth } from "../hooks/useAuth";
import CollectionRecipesModal from "../components/CollectionRecipesModal";
import { recipes } from "../data/recipes";

interface Collection {
  id: string;
  user_id: string;
  name: string;
  description?: string | null;
  created_at: string;
  collection_items?: {
    recipe_id: string;
  }[];
}

export default function ProfilePage() {
  const { user, profile } = useAuth();
  const [activeTab, setActiveTab] = useState<"saved" | "liked" | "created">(
    "saved"
  );
  const [userId, setUserId] = useState<string | null>(null);
  const [collections, setCollections] = useState<Collection[]>([]);
  const [loading, setLoading] = useState(false);
  const [openCollectionId, setOpenCollectionId] = useState<string | null>(null);

  // Hämta inloggad användare
  useEffect(() => {
    async function fetchUser() {
      const { data } = await supabase.auth.getUser();
      setUserId(data?.user?.id || null);
    }
    fetchUser();
  }, []);

  // Hämta användarens samlingar
  useEffect(() => {
    if (!userId) return;

    async function fetchCollections() {
      setLoading(true);
      const { data, error } = await supabase
        .from("user_collections")
        .select("*, collection_items(*)")
        .eq("user_id", userId)
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Kunde inte hämta samlingar:", error);
      } else if (data) {
        setCollections(data as Collection[]);
      }
      setLoading(false);
    }

    fetchCollections();
  }, [userId]);

  // Beräkna gillade recept baserat på sparade samlingar
  const likedRecipes = useMemo(() => {
    const likedIds = new Set(
      collections.flatMap(
        (c) => c.collection_items?.map((i) => i.recipe_id) || []
      )
    );
    return recipes.filter((r) => likedIds.has(r.id));
  }, [collections]);

  return (
    <>
      <Header />
      <div className="profile-page">
        {/* PROFIL HEADER */}

        <div className="profile-card">
          <img
            className="profile-img"
            src="/placeholder-profile.jpg"
            alt="Profilbild"
          />
          <h3 className="profile-name">
            {profile?.name || user?.email || "Ditt Namn"}
          </h3>
          <p className="profile-bio">
            {profile?.bio || "Bakningsentusiast 🧁"}
          </p>

          <div className="stats">
            <div>
              <span>{likedRecipes.length}</span>
              <p>Gillade</p>
            </div>
            <div>
              <span>23</span>
              <p>Skapade</p>
            </div>
            <div>
              <span>{collections.length}</span>
              <p>Samlingar</p>
            </div>
          </div>

          <Link to="/redigera-profil" className="edit-profile-btn">
            Redigera Profil
          </Link>
        </div>

        {/* TABBAR */}
        <div className="profile-tabs">
          <button
            className={activeTab === "saved" ? "active" : ""}
            onClick={() => setActiveTab("saved")}
          >
            Sparade
          </button>
          <button
            className={activeTab === "created" ? "active" : ""}
            onClick={() => setActiveTab("created")}
          >
            Skapade
          </button>
          <button
            className={activeTab === "liked" ? "active" : ""}
            onClick={() => setActiveTab("liked")}
          >
            Gillade
          </button>
        </div>

        {/* INNEHÅLL FÖR AKTIV TAB */}
        <div className="tab-content">
          {activeTab === "saved" && (
            <div className="collections">
              {loading ? (
                <p>Laddar samlingar…</p>
              ) : collections.length === 0 ? (
                <p className="placeholder-text">Inga samlingar ännu.</p>
              ) : (
                collections.map((c) => (
                  <div
                    key={c.id}
                    className="collection-card pink"
                    onClick={() => setOpenCollectionId(c.id)}
                  >
                    <div className="icon">
                      <Bookmark />
                    </div>
                    <div>
                      <h4>{c.name}</h4>
                      <p>{c.collection_items?.length || 0} recept</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {activeTab === "created" && (
            <div className="recipe-grid">
              <p className="placeholder-text">
                Dina byggda tårtor kommer visas här 🎂
              </p>
            </div>
          )}

          {activeTab === "liked" && (
            <div className="recipe-grid">
              {likedRecipes.length === 0 ? (
                <p className="placeholder-text">
                  Du har inte gillat några recept ännu 💗
                </p>
              ) : (
                likedRecipes.map((r) => (
                  <Link
                    key={r.id}
                    to={`/recept/${r.id}`}
                    className="recipe-card"
                  >
                    <img src={r.image} alt={r.title} />
                    <h4>{r.title}</h4>
                    <p>{r.category}</p>
                  </Link>
                ))
              )}
            </div>
          )}
        </div>

        {/* MODAL FÖR COLLECTION */}
        <CollectionRecipesModal
          show={openCollectionId !== null}
          collectionId={openCollectionId}
          onClose={() => setOpenCollectionId(null)}
        />
      </div>
    </>
  );
}
