import React, { useState } from "react";
import { Heart } from "lucide-react";
import CollectionModal from "./CollectionModal";
import { useAuth } from "../hooks/useAuth";

interface Props {
  recipeId: string;
}

const SaveButton: React.FC<Props> = ({ recipeId }) => {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);

  const onClick = () => {
    if (!user) {
      // du kan redirecta till login eller visa toast
      window.location.href = "/logga-in";
      return;
    }
    setOpen(true);
  };

  return (
    <>
      <button className="btn-like" onClick={onClick} aria-label="Spara recept">
        <Heart />
      </button>

      <CollectionModal
        show={open}
        recipeId={recipeId}
        onClose={() => setOpen(false)}
        onAdded={() => {
          // du kan trigga uppdatering av UI här, t.ex. toast eller refetch
        }}
      />
    </>
  );
};

export default SaveButton;
