import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useAuth } from "../hooks/useAuth";
import {
  fetchCollectionsForUser,
  createCollection,
  addRecipeToCollection,
} from "../services/collections";
import { toast } from "react-toastify";

// Typdefinitioner
interface Collection {
  id: string;
  user_id: string;
  name: string;
  description?: string | null;
  created_at?: string;
}

interface Props {
  show: boolean;
  recipeId: string;
  onClose: () => void;
  onAdded?: (collectionId: string) => void;
}

// Typeguard för Collection
function isCollection(obj: any): obj is Collection {
  return obj && typeof obj.id === "string" && typeof obj.name === "string";
}

const CollectionModal: React.FC<Props> = ({
  show,
  recipeId,
  onClose,
  onAdded,
}) => {
  const { user } = useAuth();
  const [collections, setCollections] = useState<Collection[]>([]);
  const [loading, setLoading] = useState(false);
  const [newName, setNewName] = useState("");

  useEffect(() => {
    if (show && user) loadCollections();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show, user]);

  const loadCollections = async () => {
    if (!user) return;
    setLoading(true);

    const { data, error } = await fetchCollectionsForUser(user.id);

    if (error) {
      toast.error("Kunde inte hämta samlingar");
    } else if (Array.isArray(data)) {
      setCollections(data.filter(isCollection));
    } else {
      setCollections([]);
    }

    setLoading(false);
  };

  const handleCreateAndAdd = async () => {
    if (!user) return toast.error("Du måste vara inloggad.");
    if (!newName.trim()) return toast.error("Ge samlingen ett namn.");

    setLoading(true);

    const { data, error } = await createCollection(user.id, newName.trim());

    if (error || !isCollection(data)) {
      toast.error("Kunde inte skapa samlingen");
      setLoading(false);
      return;
    }

    // Lägg till recept i nya samlingen
    const res = await addRecipeToCollection(data.id, recipeId);
    if (res.error) {
      toast.error("Kunde inte lägga till recept.");
    } else {
      toast.success("Recept sparat i " + data.name);
      onAdded?.(data.id);
      onClose();
    }

    setLoading(false);
  };

  const handleAdd = async (collectionId: string, name?: string) => {
    setLoading(true);

    const res = await addRecipeToCollection(collectionId, recipeId);
    if (res.error) {
      toast.error(
        "Kunde inte lägga till recept (möjligt att det redan finns)."
      );
    } else {
      toast.success("Sparat i " + (name ?? "samling"));
      onAdded?.(collectionId);
      onClose();
    }

    setLoading(false);
  };

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Spara recept i samling</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{ marginBottom: 8 }}>
          <strong>Dina samlingar</strong>
        </div>

        {collections.length === 0 && (
          <p className="text-muted">Inga samlingar ännu.</p>
        )}

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {collections.map((c) => (
            <div
              key={c.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "8px 10px",
                borderRadius: 8,
                background: "#fff",
                boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
              }}
            >
              <div>
                <div style={{ fontWeight: 600 }}>{c.name}</div>
                <div style={{ fontSize: 12, opacity: 0.7 }}>
                  {c.description || ""}
                </div>
              </div>

              <Button
                size="sm"
                onClick={() => handleAdd(c.id, c.name)}
                disabled={loading}
              >
                Lägg till
              </Button>
            </div>
          ))}
        </div>

        <hr />

        <div>
          <strong>Skapa ny samling</strong>
          <Form.Control
            placeholder="Namn på samling"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="mt-2"
          />
          <Button
            className="mt-2"
            onClick={handleCreateAndAdd}
            disabled={loading}
          >
            Skapa & spara recept
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CollectionModal;
