import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { supabase } from "../supabaseClient";
import "../assets/scss/SaveCakeModal.scss";
import { toastInfo } from "../utils/toastConfig"; // samma som du använder i SavedPage

interface SaveCakeModalProps {
  show: boolean;
  onHide: () => void;
  cakeData: {
    base: string | null;
    fillings: string[];
    layers: number;
    frosting: string | null;
  };
}

const SaveCakeModal: React.FC<SaveCakeModalProps> = ({
  show,
  onHide,
  cakeData,
}) => {
  const [name, setName] = useState("");
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    if (!name) {
      toastInfo("Ge din tårta ett namn! 🍰");
      return;
    }
    setSaving(true);

    // Hämta användaren korrekt i Supabase v2+
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();
    if (userError || !user) {
      toastInfo("Du måste vara inloggad för att spara tårtan 💗");
      setSaving(false);
      return;
    }

    const { error } = await supabase.from("saved_cakes").insert([
      {
        user_id: user.id,
        name,
        base: cakeData.base,
        fillings: cakeData.fillings,
        layers: cakeData.layers,
        frosting: cakeData.frosting,
      },
    ]);

    if (error) {
      toastInfo("Något gick fel: " + error.message);
    } else {
      toastInfo("Tårtan sparad! 🎉");
      setName("");
      onHide();
    }
    setSaving(false);
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Spara din tårta</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Namn på tårtan</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ex: Chokladdröm"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide} disabled={saving}>
          Avbryt
        </Button>
        <Button variant="primary" onClick={handleSave} disabled={saving}>
          Spara
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SaveCakeModal;
