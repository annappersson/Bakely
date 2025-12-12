import { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { supabase } from "../supabaseClient";
import "../assets/scss/CollectionRecipesModal.scss";
import { toastSuccess, toastError } from "../utils/toastConfig";

interface Props {
  show: boolean;
  collectionId: string | null;
  onClose: () => void;
}

interface Recipe {
  id: string;
  title: string;
  image_url?: string | null;
  itemId?: string;
}

export default function CollectionRecipesModal({
  show,
  collectionId,
  onClose,
}: Props) {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(false);
  const [collectionName, setCollectionName] = useState("");
  const [confirmId, setConfirmId] = useState<string | null>(null);

  useEffect(() => {
    if (!show || !collectionId) return;
    loadRecipes();
  }, [show, collectionId]);

  async function loadRecipes() {
    setLoading(true);
    try {
      const { data: items, error: itemsError } = await supabase
        .from("collection_items")
        .select("id, recipe_id, recipes(*)")
        .eq("collection_id", collectionId);

      if (itemsError) throw itemsError;

      const { data: info, error: infoError } = await supabase
        .from("user_collections")
        .select("name")
        .eq("id", collectionId)
        .single();

      if (infoError) throw infoError;
      if (info) setCollectionName(info.name);

      if (items) {
        setRecipes(items.map((i: any) => ({ ...i.recipes, itemId: i.id })));
      }
    } catch (error) {
      console.error("Fel vid hämtning av recept:", error);
      toastError("Kunde inte ladda recepten.");
    } finally {
      setLoading(false);
    }
  }

  async function handleRemove(item: Recipe) {
    if (!item.itemId) return;

    try {
      const { error } = await supabase
        .from("collection_items")
        .delete()
        .eq("id", item.itemId);

      if (error) throw error;

      // Lägg till removing class
      setRecipes((prev) =>
        prev.map((r) =>
          r.itemId === item.itemId ? { ...r, removing: true } : r
        )
      );

      // Vänta animation innan vi tar bort från state
      setTimeout(() => {
        setRecipes((prev) => prev.filter((r) => r.itemId !== item.itemId));
        toastSuccess(`${item.title} har tagits bort från ${collectionName}`);
      }, 400); // matcha duration i CSS
    } catch (error) {
      console.error("Fel vid borttagning:", error);
      toastError("Kunde inte ta bort receptet.");
    } finally {
      setConfirmId(null);
    }
  }

  return (
    <Modal show={show} onHide={onClose} centered className="collection-modal">
      <Modal.Header closeButton>
        <Modal.Title>{collectionName}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {loading && <p>Laddar recept...</p>}

        {!loading && recipes.length === 0 && (
          <p className="text-muted">Inga recept i denna samling.</p>
        )}

        <div className="grid">
          {recipes.map((r: any) => (
            <div
              key={r.id}
              className={`recipe-tile ${r.removing ? "removing" : ""}`}
            >
              <a href={`/recept/${r.id}`}>
                <h4>{r.title}</h4>
              </a>
              <Button
                variant="danger"
                size="sm"
                onClick={() => setConfirmId(r.itemId!)}
                className="remove-btn"
              >
                Ta bort
              </Button>
            </div>
          ))}
        </div>

        {/* Konfirmationsdialogen ligger ovanpå hela modal-body */}
        {confirmId && (
          <div className="confirm-overlay">
            <div className="confirm-dialog">
              <p>
                Vill du ta bort{" "}
                <strong>
                  {recipes.find((r) => r.itemId === confirmId)?.title}
                </strong>{" "}
                från <strong>{collectionName}</strong>?
              </p>
              <div className="confirm-actions">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => setConfirmId(null)}
                >
                  Avbryt
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() =>
                    handleRemove(recipes.find((r) => r.itemId === confirmId)!)
                  }
                >
                  Ta bort
                </Button>
              </div>
            </div>
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
}
