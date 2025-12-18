// components/ConfirmModal.tsx
import "../assets/scss/ConfrimModal.scss";

interface Props {
  show: boolean;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmModal({
  show,
  message,
  onConfirm,
  onCancel,
}: Props) {
  if (!show) return null;

  return (
    <div className="confirm-modal-backdrop">
      <div className="confirm-modal">
        <p>{message}</p>
        <div className="buttons">
          <button className="cancel" onClick={onCancel}>
            Avbryt
          </button>
          <button className="confirm" onClick={onConfirm}>
            Ta bort
          </button>
        </div>
      </div>
    </div>
  );
}
