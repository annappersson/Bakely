import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Header from "../components/Header";
import { Bookmark, Plus } from "lucide-react";
import { supabase } from "../supabaseClient";
import { useAuth } from "../hooks/useAuth";
import CollectionRecipesModal from "../components/CollectionRecipesModal";
import { toastInfo } from "../utils/toastConfig";
import "../assets/scss/SavedPage.scss";

interface Collection {
  id: string;
  name: string;
  description?: string | null;
  created_at: string;
  collection_items?: any[];
}

type SortOption = "newest" | "oldest" | "name";

const SavedPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [collections, setCollections] = useState<Collection[]>([]);
  const [loading, setLoading] = useState(false);
  const [openCollectionId, setOpenCollectionId] = useState<string | null>(null);
  const [sort, setSort] = useState<SortOption>("newest");

  // 🔐 Redirect om ej inloggad
  useEffect(() => {
    if (user === null) {
      toastInfo("Du måste vara inloggad för att se dina sparade recept 💗");
      navigate("/logga-in");
    }
  }, [user, navigate]);

  // 📦 Ladda samlingar
  useEffect(() => {
    if (!user?.id) return;

    const userId = user.id;

    async function loadCollections() {
      setLoading(true);

      const { data, error } = await supabase
        .from("user_collections")
        .select("*, collection_items(*)")
        .eq("user_id", userId);

      if (!error && data) {
        setCollections(data as Collection[]);
      }

      setLoading(false);
    }

    loadCollections();
  }, [user?.id]);

  // 🔄 Sortering (client-side, snabb UX)
  const sortedCollections = [...collections].sort((a, b) => {
    if (sort === "name") {
      return a.name.localeCompare(b.name, "sv");
    }

    if (sort === "oldest") {
      return (
        new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
      );
    }

    // newest (default)
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
  });

  return (
    <>
      <Header />

      <div className="saved-page">
        <div className="page-header">
          <div>
            <h2>Sparade Recept</h2>
            <p>Dina personliga samlingar 💗</p>
          </div>

          {/* 🔄 SORTERING */}
          <select
            className="sort-select"
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
          >
            <option value="newest">Senast skapade</option>
            <option value="oldest">Äldst först</option>
            <option value="name">A–Ö</option>
          </select>
        </div>

        {loading && <p>Laddar samlingar…</p>}

        {!loading && sortedCollections.length === 0 && (
          <div className="empty-state">
            <Bookmark size={36} />
            <p>Du har inga samlingar ännu</p>
            <span>Spara recept för att samla dem här ✨</span>
          </div>
        )}

        <div className="collections-grid">
          {sortedCollections.map((c) => (
            <button
              key={c.id}
              className="collection-card pink"
              onClick={() => setOpenCollectionId(c.id)}
            >
              <div className="icon">
                <Bookmark />
              </div>
              <div className="info">
                <h4>{c.name}</h4>
                <p>{c.collection_items?.length || 0} recept</p>
              </div>
            </button>
          ))}

          {/* ➕ NY SAMLING (future hook) */}
          <button className="collection-card create">
            <Plus />
            <span>Ny samling</span>
          </button>
        </div>
      </div>

      {/* 📦 MODAL MED RECEPT */}
      <CollectionRecipesModal
        show={openCollectionId !== null}
        collectionId={openCollectionId}
        onClose={() => setOpenCollectionId(null)}
      />
    </>
  );
};

export default SavedPage;
