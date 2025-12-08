import { useState } from "react";
import "../assets/scss/ProfilePage.scss";
import { Heart, CakeSlice, Bookmark } from "lucide-react";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<"saved" | "created" | "liked">(
    "saved"
  );

  return (
    <div className="profile-page">
      {/* HEADER */}
      <div className="profile-header">
        <button className="back-btn">←</button>
        <h2>Min Profil</h2>
        <button className="menu-btn">⋮</button>
      </div>

      {/* USER INFO */}
      <div className="profile-card">
        <img
          className="profile-img"
          src="/placeholder-profile.jpg"
          alt="profile"
        />

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

      {/* TABS */}
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

      {/* KATEGORIKNAPPSRAD */}
      <div className="category-buttons">
        <button className="active">Alla</button>
        <button>Tårtor</button>
        <button>Cupcakes</button>
        <button>Cookies</button>
        <button>Bröd</button>
      </div>

      {/* RECEPTGRID — fylls senare */}
      <div className="recipe-grid">
        <p className="placeholder-text">Recept kommer här… 🍰</p>
      </div>

      {/* 🔥 MINA SAMLINGAR */}
      <div className="collections">
        <div className="collections-header">
          <h3>Mina Samlingar</h3>
          <button className="view-all">Visa alla</button>
        </div>

        <div className="collection-list">
          <div className="collection-card pink">
            <div className="icon">
              <Heart />
            </div>
            <div>
              <h4>Favoriter</h4>
              <p>24 recept</p>
            </div>
          </div>

          <div className="collection-card mint">
            <div className="icon">
              <CakeSlice />
            </div>
            <div>
              <h4>Födelsedagstårtor</h4>
              <p>12 recept</p>
            </div>
          </div>

          <div className="collection-card yellow">
            <div className="icon">
              <Bookmark />
            </div>
            <div>
              <h4>Snabba Bakverk</h4>
              <p>18 recept</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
