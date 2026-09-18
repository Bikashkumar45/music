import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import "./App.css";

/* =========================================
   TRENDING PAGE
========================================= */

function Trending() {
  return (
    <main className="home">
      <div className="page-header">
        <h1>🔥 Trending Songs</h1>
        <p>Discover the most popular songs.</p>
      </div>

      <div className="no-results">
        <div className="no-results-icon">🔥</div>

        <h3>Trending Songs</h3>

        <p>
          Your trending songs will appear here.
        </p>
      </div>
    </main>
  );
}


/* =========================================
   FAVORITES PAGE
========================================= */

function Favorites() {
  return (
    <main className="home">
      <div className="page-header">
        <h1>💗 Favorites</h1>
        <p>Your favorite music collection.</p>
      </div>

      <div className="no-results">
        <div className="no-results-icon">💗</div>

        <h3>Your Favorites</h3>

        <p>
          Your favorite songs will appear here.
        </p>
      </div>
    </main>
  );
}


/* =========================================
   PLAYLIST PAGE
========================================= */

function Playlist() {
  return (
    <main className="home">
      <div className="page-header">
        <h1>🎶 Playlist</h1>
        <p>Manage your music playlists.</p>
      </div>

      <div className="no-results">
        <div className="no-results-icon">🎶</div>

        <h3>Your Playlist</h3>

        <p>
          Your playlists will appear here.
        </p>
      </div>
    </main>
  );
}


/* =========================================
   SETTINGS PAGE
========================================= */

function Settings() {
  return (
    <main className="home">
      <div className="page-header">
        <h1>⚙️ Settings</h1>
        <p>Customize your music player.</p>
      </div>

      <div className="no-results">
        <div className="no-results-icon">⚙️</div>

        <h3>Settings</h3>

        <p>
          Music player settings will appear here.
        </p>
      </div>
    </main>
  );
}


/* =========================================
   APP
========================================= */

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const [sidebarOpen, setSidebarOpen] = useState(false);


  /* =========================================
     SEARCH
  ========================================= */

  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };


  /* =========================================
     OPEN MOBILE SIDEBAR
  ========================================= */

  const handleMenuClick = () => {
    setSidebarOpen(true);
  };


  /* =========================================
     CLOSE MOBILE SIDEBAR
  ========================================= */

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };


  return (
    <BrowserRouter>

      <div className="app">

        {/* =====================================
            SIDEBAR
        ===================================== */}

        <Sidebar
          isOpen={sidebarOpen}
          onClose={handleSidebarClose}
        />


        {/* =====================================
            MOBILE OVERLAY
        ===================================== */}

        {sidebarOpen && (
          <div
            className="sidebar-overlay"
            onClick={handleSidebarClose}
          />
        )}


        {/* =====================================
            MAIN CONTENT
        ===================================== */}

        <div className="main">

          {/* ===================================
              NAVBAR
          =================================== */}

          <Navbar
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
            onMenuClick={handleMenuClick}
          />


          {/* ===================================
              ROUTES
          =================================== */}

          <Routes>

            {/* ================================
                HOME
            ================================= */}

            <Route
              path="/"
              element={
                <Home
                  searchTerm={searchTerm}
                />
              }
            />


            {/* ================================
                TRENDING
            ================================= */}

            <Route
              path="/trending"
              element={<Trending />}
            />


            {/* ================================
                FAVORITES
            ================================= */}

            <Route
              path="/favorites"
              element={<Favorites />}
            />


            {/* ================================
                PLAYLIST
            ================================= */}

            <Route
              path="/playlist"
              element={<Playlist />}
            />


            {/* ================================
                SETTINGS
            ================================= */}

            <Route
              path="/settings"
              element={<Settings />}
            />


            {/* ================================
                FALLBACK
            ================================= */}

            <Route
              path="*"
              element={
                <Home
                  searchTerm={searchTerm}
                />
              }
            />

          </Routes>

        </div>

      </div>

    </BrowserRouter>
  );
}

export default App;
