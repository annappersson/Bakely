import { Link, useLocation } from "react-router";
import { Home, Search, Layers, Heart, User } from "lucide-react";

const BottomNav = () => {
  const location = useLocation();

  const navItems = [
    { to: "/", label: "Hem", icon: <Home size={22} /> },
    { to: "/sok", label: "Sök", icon: <Search size={22} /> },
    { to: "/bygg-tarta", label: "Bygg", icon: <Layers size={22} /> },
    { to: "/sparade", label: "Sparade", icon: <Heart size={22} /> },
    { to: "/profil", label: "Profil", icon: <User size={22} /> },
  ];

  return (
    <nav className="bottom-nav">
      {navItems.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className={
            "nav-item " +
            (location.pathname === item.to ? "active" : "") +
            (item.label === "Bygg" ? " highlight" : "")
          }
        >
          {item.icon}
          <span>{item.label}</span>
        </Link>
      ))}
    </nav>
  );
};

export default BottomNav;
