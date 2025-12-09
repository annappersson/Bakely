import { Routes, Route } from "react-router";
import "./assets/scss/BottomNav.scss";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import CakeBuilderPage from "./pages/CakeBuilderPage";
import PlannerPage from "./pages/PlannerPage";
import SavedPage from "./pages/SavedPage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/Auth/LoginPage";
import SignupPage from "./pages/Auth/SignupPage";
import BottomNav from "./components/BottomNav";
import ProtectedRoutes from "./components/auth/ProtectedRoutes";
import AllRecipesPage from "./pages/AllRecipesPage";
import { ToastContainer } from "react-toastify";
import RecipeDetailPage from "./pages/RecipeDetailsPage";
import EditProfilePage from "./pages/EditProfilePage";

function App() {
  return (
    <div id="app">
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sok" element={<SearchPage />} />
        <Route path="/recept" element={<AllRecipesPage />} />
        <Route path="/recept/:id" element={<RecipeDetailPage />} />

        {/* Skyddade rutter */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/planera" element={<PlannerPage />} />
          <Route path="/bygg-tarta" element={<CakeBuilderPage />} />
          <Route path="/sparade" element={<SavedPage />} />
          <Route path="/profil" element={<ProfilePage />} />
          <Route path="/redigera-profil" element={<EditProfilePage />} />
        </Route>

        <Route path="/logga-in" element={<LoginPage />} />
        <Route path="/skapa-konto" element={<SignupPage />} />
      </Routes>

      {/* Bottom Navigation - alltid synlig när man är inloggad */}
      <BottomNav />
    </div>
  );
}

export default App;
