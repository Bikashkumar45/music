import { useMemo, useState, useCallback } from "react";
import SongCard from "../components/SongCard";
import MusicPlayer from "../components/MusicPlayer";
import songs from "../data/songs";

function Home({ searchTerm = "" }) {
  const [selectedSong, setSelectedSong] = useState(null);

  /* ================================
     SEARCH
  ================================= */

  const filteredSongs = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    if (!query) {
      return songs;
    }

    return songs.filter((song) => {
      const title = song.title?.toLowerCase() || "";
      const artist = song.artist?.toLowerCase() || "";

      return title.includes(query) || artist.includes(query);
    });
  }, [searchTerm]);

  /* ================================
     SELECT SONG
  ================================= */

  const handleSelectSong = useCallback((song) => {
    setSelectedSong(song);
  }, []);

  /* ================================
     PREVIOUS
  ================================= */

  const handlePrevious = useCallback(() => {
    if (!selectedSong || songs.length === 0) {
      return;
    }

    const currentIndex = songs.findIndex((song) => song.id === selectedSong.id);

    const previousIndex =
      currentIndex <= 0 ? songs.length - 1 : currentIndex - 1;

    setSelectedSong(songs[previousIndex]);
  }, [selectedSong]);

  /* ================================
     NEXT
  ================================= */

  const handleNext = useCallback(() => {
    if (!selectedSong || songs.length === 0) {
      return;
    }

    const currentIndex = songs.findIndex((song) => song.id === selectedSong.id);

    const nextIndex = currentIndex >= songs.length - 1 ? 0 : currentIndex + 1;

    setSelectedSong(songs[nextIndex]);
  }, [selectedSong]);

  return (
    <main className="home">
      {/* Heading */}

      <div className="home-heading">
        <div>
          <h1>{searchTerm.trim() ? "Search Results" : "Trending Songs"}</h1>

          {searchTerm.trim() && (
            <p className="search-result-count">
              {filteredSongs.length}{" "}
              {filteredSongs.length === 1 ? "song" : "songs"} found
            </p>
          )}
        </div>
      </div>

      {/* Songs */}

      {filteredSongs.length > 0 ? (
        <div className="song-grid">
          {filteredSongs.map((song) => (
            <SongCard key={song.id} song={song} onSelect={handleSelectSong} />
          ))}
        </div>
      ) : (
        <div className="no-results">
          <div className="no-results-icon">🔍</div>

          <h3>No songs found</h3>

          <p>Try another song name or artist.</p>
        </div>
      )}

      {/* Music Player */}

      <MusicPlayer
        song={selectedSong}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
    </main>
  );
}

export default Home;
