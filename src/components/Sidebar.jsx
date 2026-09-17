import "./Sidebar.css";

function Sidebar({ isOpen, onClose }) {
  const handleItemClick = (item) => {
    if (item === "Home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    // Mobile पर menu click करने के बाद sidebar बंद होगा
    if (onClose) {
      onClose();
    }
  };

  return (
    <aside className={`sidebar ${isOpen ? "sidebar-open" : ""}`}>
      {/* Sidebar Header */}
      <div className="sidebar-header">
        <h2 className="sidebar-logo">🎵 MusicVerse</h2>

        {/* Mobile Close Button */}
        <button
          className="sidebar-close"
          onClick={onClose}
          aria-label="Close sidebar"
        >
          ✕
        </button>
      </div>

      {/* Sidebar Menu */}
      <nav className="sidebar-menu">
        <ul>
          <li onClick={() => handleItemClick("Home")}>
            <span className="menu-icon">🏠</span>
            <span>Home</span>
          </li>

          <li onClick={() => handleItemClick("Trending")}>
            <span className="menu-icon">🔥</span>
            <span>Trending</span>
          </li>

          <li onClick={() => handleItemClick("Favorites")}>
            <span className="menu-icon">💗</span>
            <span>Favorites</span>
          </li>

          <li onClick={() => handleItemClick("Playlist")}>
            <span className="menu-icon">🎶</span>
            <span>Playlist</span>
          </li>

          <li onClick={() => handleItemClick("Settings")}>
            <span className="menu-icon">⚙️</span>
            <span>Settings</span>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
