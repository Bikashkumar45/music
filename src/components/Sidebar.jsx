import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar({ isOpen, onClose }) {
  /*
  =================================
  MENU ITEMS
  =================================
  */

  const menuItems = [
    {
      name: "Home",
      icon: "🏠",
      path: "/",
    },
    {
      name: "Trending",
      icon: "🔥",
      path: "/trending",
    },
    {
      name: "Favorites",
      icon: "💗",
      path: "/favorites",
    },
    {
      name: "Playlist",
      icon: "🎶",
      path: "/playlist",
    },
    {
      name: "Settings",
      icon: "⚙️",
      path: "/settings",
    },
  ];

  /*
  =================================
  CLOSE MOBILE SIDEBAR
  =================================
  */

  const handleLinkClick = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <aside className={`sidebar ${isOpen ? "sidebar-open" : ""}`}>
      {/* =========================
          SIDEBAR HEADER
      ========================== */}

      <div className="sidebar-header">
        <NavLink to="/" className="sidebar-logo-link" onClick={handleLinkClick}>
          <h2 className="sidebar-logo">🎵 MusicVerse</h2>
        </NavLink>

        {/* Mobile Close Button */}

        <button
          type="button"
          className="sidebar-close"
          onClick={onClose}
          aria-label="Close sidebar"
        >
          ✕
        </button>
      </div>

      {/* =========================
          MENU
      ========================== */}

      <nav className="sidebar-menu">
        <ul>
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  `sidebar-link ${isActive ? "active" : ""}`
                }
              >
                <span className="menu-icon">{item.icon}</span>

                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
