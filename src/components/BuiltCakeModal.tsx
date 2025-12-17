// src/components/BuiltCakeModal.tsx
import React from "react";
import { Modal, Button } from "react-bootstrap";
import { fillings as fillingsData } from "../data/fillings";
import "../assets/scss/BuiltCakeModal.scss";

interface BuiltCake {
  name: string;
  base: string | null;
  fillings: string[]; // Array av filling IDs
  layers: number;
  frosting: string | null;
}

interface BuiltCakeModalProps {
  show: boolean;
  onHide: () => void;
  cake: BuiltCake;
}

const BuiltCakeModal: React.FC<BuiltCakeModalProps> = ({
  show,
  onHide,
  cake,
}) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      size="lg"
      className="built-cake-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title>{cake.name}</Modal.Title>
      </Modal.Header>

      <Modal.Body className="text-start">
        <p>
          <strong>Botten:</strong> {cake.base || "-"}
        </p>
        <p>
          <strong>Fyllningar:</strong>{" "}
          {cake.fillings.length
            ? cake.fillings
                .map(
                  (fId) => fillingsData.find((f) => f.id === fId)?.name || fId
                )
                .join(", ")
            : "-"}
        </p>
        <p>
          <strong>Antal lager:</strong> {cake.layers}
        </p>
        <p>
          <strong>Frosting:</strong> {cake.frosting || "-"}
        </p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Stäng
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default BuiltCakeModal;
