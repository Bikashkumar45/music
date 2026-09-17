import "./SongCard.css";

function SongCard({ song, onSelect }) {
  const handlePlay = () => {
    if (onSelect) {
      onSelect(song);
    }
  };

  return (
    <div className="song-card">
      {/* Cover Image */}
      <img
        src={song.cover}
        alt={song.title}
        onError={(e) => {
          e.currentTarget.src = "/images/default-cover.jpg";
        }}
      />

      {/* Song Information */}
      <div className="song-info">
        <h3 title={song.title}>{song.title}</h3>

        <p title={song.artist}>{song.artist}</p>
      </div>

      {/* Play Button */}
      <button type="button" onClick={handlePlay} className="play-button">
        ▶ Play
      </button>
    </div>
  );
}

export default SongCard;
