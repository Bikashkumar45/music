import "./Navbar.css";

function Navbar({ searchTerm, onSearchChange, onMenuClick }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClear = () => {
    onSearchChange("");
  };

  return (
    <header className="navbar">
      {/* Mobile Menu Button */}
      <button
        type="button"
        className="menu-button"
        onClick={onMenuClick}
        aria-label="Open Sidebar"
      >
        ☰
      </button>

      {/* Search Area */}
      <form className="search-box" onSubmit={handleSubmit}>
        <div className="search-input-wrapper">
          <input
            type="search"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search Songs..."
            aria-label="Search Songs"
          />

          {/* Clear Search */}
          {searchTerm && (
            <button
              type="button"
              className="clear-search"
              onClick={handleClear}
              aria-label="Clear Search"
            >
              ✕
            </button>
          )}
        </div>

        {/* Search Button */}
        <button type="submit" className="search-button">
          🔍 Search
        </button>
      </form>
    </header>
  );
}

export default Navbar;
