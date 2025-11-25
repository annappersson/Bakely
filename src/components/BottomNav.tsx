import { Link, useLocation } from "react-router";
import { Home, Search, Layers, Heart, User } from "lucide-react";

const BottomNav = () => {
  const location = useLocation();

  const navItems = [
    { to: "/", label: "Home", icon: <Home size={22} /> },
    { to: "/search", label: "Search", icon: <Search size={22} /> },
    { to: "/build", label: "Build", icon: <Layers size={22} /> },
    { to: "/saved", label: "Saved", icon: <Heart size={22} /> },
    { to: "/profile", label: "Profile", icon: <User size={22} /> },
  ];

  return (
    <nav className="bottom-nav">
      {navItems.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className={
            "nav-item " + (location.pathname === item.to ? "active" : "")
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
