import "./SongCard.css";

function SongCard({ song, onSelect }) {
  const handleSongClick = () => {
    if (onSelect) {
      onSelect(song);
    }
  };

  return (
    <div
      className="song-card"
      onClick={handleSongClick}
      style={{ cursor: "pointer" }}
    >
      {/* Song Cover */}
      <div className="song-cover">
        <img
          src={song.cover}
          alt={song.title}
          onError={(e) => {
            e.currentTarget.src = "/images/default-cover.jpg";
          }}
        />
      </div>

      {/* Song Details */}
      <div className="song-info">
        <h3>{song.title}</h3>
        <p>{song.artist}</p>
      </div>

      {/* Play Button */}
      <button
        type="button"
        className="play-button"
        onClick={(e) => {
          e.stopPropagation();
          handleSongClick();
        }}
      >
        ▶
      </button>
    </div>
  );
}

export default SongCard;
