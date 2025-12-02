import { Routes, Route } from "react-router";
import "./assets/scss/BottomNav.scss";

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

function App() {
  return (
    <div id="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />

        {/* Skyddade rutter */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/planner" element={<PlannerPage />} />
          <Route path="/cake-builder" element={<CakeBuilderPage />} />
          <Route path="/saved" element={<SavedPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>

        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>

      {/* Bottom Navigation - alltid synlig när man är inloggad */}
      <BottomNav />
    </div>
  );
}

export default App;
