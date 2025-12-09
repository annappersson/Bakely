import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useAuth } from "../hooks/useAuth";
import {
  fetchCollectionsForUser,
  createCollection,
  addRecipeToCollection,
} from "../services/collections";
import "../assets/scss/CollectionModal.scss";
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

// Typeguard
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

  // Ladda samlingar när modalen öppnas
  useEffect(() => {
    if (show && user) loadCollections();
  }, [show, user]);

  const loadCollections = async () => {
    if (!user) {
      toast.info("Du måste vara inloggad för att spara recept 💗");
      return;
    }

    setLoading(true);
    const { data, error } = await fetchCollectionsForUser(user.id);

    if (error) {
      toast.error("Kunde inte hämta samlingar!");
    } else {
      setCollections(Array.isArray(data) ? data.filter(isCollection) : []);
    }

    setLoading(false);
  };

  // Skapa ny samling och lägg till recept
  const handleCreateAndAdd = async () => {
    if (!user) {
      toast.error("Du måste vara inloggad.");
      return;
    }

    if (!newName.trim()) {
      toast.error("Samlingen måste ha ett namn.");
      return;
    }

    setLoading(true);

    const { data: collection, error: createError } = await createCollection(
      user.id,
      newName.trim()
    );

    if (createError || !collection) {
      toast.error("Kunde inte skapa samlingen 😭");
      setLoading(false);
      return;
    }

    const { error: addError } = await addRecipeToCollection(
      collection.id,
      recipeId
    );

    if (addError) {
      toast.error("Kunde inte lägga till recept.");
    } else {
      toast.success(`Recept sparat i ${collection.name}! ✨`);
    }

    onAdded?.(collection.id);
    onClose();
    setLoading(false);
  };

  // Lägg till recept i befintlig samling
  const handleAdd = async (collectionId: string, name?: string) => {
    setLoading(true);

    const { error } = await addRecipeToCollection(collectionId, recipeId);

    if (error) {
      toast.warning("Receptet finns redan i den här samlingen 💞");
    } else {
      toast.success(`Sparat i ${name ?? "samling"}! ✨`);
      onAdded?.(collectionId);
      onClose();
    }

    setLoading(false);
  };

  return (
    <Modal show={show} onHide={onClose} centered className="collection-modal">
      <Modal.Header closeButton>
        <Modal.Title>Spara recept i samling</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <strong>Dina samlingar</strong>

        {collections.length === 0 && (
          <p className="text-muted">Inga samlingar ännu.</p>
        )}

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {collections.map((c) => (
            <div className="collection-box" key={c.id}>
              <div>
                <div className="name">{c.name}</div>
                <div className="desc">{c.description || ""}</div>
              </div>

              <Button
                size="sm"
                className="btn-pink"
                onClick={() => handleAdd(c.id, c.name)}
                disabled={loading}
              >
                Lägg till
              </Button>
            </div>
          ))}
        </div>

        <hr />

        <strong>Skapa ny samling</strong>

        <Form.Control
          placeholder="Namn på samling"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          className="mt-2"
        />

        <Button
          className="btn-pink mt-2"
          onClick={handleCreateAndAdd}
          disabled={loading}
        >
          Skapa & spara recept
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default CollectionModal;
