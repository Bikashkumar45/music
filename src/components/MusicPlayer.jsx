import { useEffect, useRef, useState } from "react";
import "./MusicPlayer.css";

function MusicPlayer({ song, onPrevious, onNext }) {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  /* =================================
     NEW SONG
  ================================= */

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio || !song) {
      return;
    }

    audio.src = song.audio;
    audio.load();

    setCurrentTime(0);
    setDuration(0);
    setIsPlaying(false);
  }, [song]);

  /* =================================
     AUDIO EVENTS
  ================================= */

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration || 0);
    };

    const handleEnded = () => {
      setIsPlaying(false);

      if (onNext) {
        onNext();
      }
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);

    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);

      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);

      audio.removeEventListener("ended", handleEnded);
    };
  }, [onNext]);

  /* =================================
     PLAY / PAUSE
  ================================= */

  const togglePlay = async () => {
    const audio = audioRef.current;

    if (!audio || !song) {
      return;
    }

    try {
      if (audio.paused) {
        await audio.play();

        setIsPlaying(true);
      } else {
        audio.pause();

        setIsPlaying(false);
      }
    } catch (error) {
      console.error("Audio playback error:", error);

      setIsPlaying(false);
    }
  };

  /* =================================
     PROGRESS
  ================================= */

  const handleProgress = (e) => {
    const audio = audioRef.current;

    if (!audio || !duration) {
      return;
    }

    const newTime = Number(e.target.value);

    audio.currentTime = newTime;

    setCurrentTime(newTime);
  };

  /* =================================
     VOLUME
  ================================= */

  const handleVolume = (e) => {
    const audio = audioRef.current;

    const newVolume = Number(e.target.value);

    setVolume(newVolume);

    if (audio) {
      audio.volume = newVolume;
    }
  };

  /* =================================
     FORMAT TIME
  ================================= */

  const formatTime = (time) => {
    if (!Number.isFinite(time)) {
      return "0:00";
    }

    const minutes = Math.floor(time / 60);

    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  /* =================================
     NO SONG SELECTED
  ================================= */

  if (!song) {
    return (
      <div className="music-player empty-player">
        <p>Select a song to start playing 🎵</p>
      </div>
    );
  }

  return (
    <div className="music-player">
      {/* Hidden Audio */}
      <audio ref={audioRef} />

      {/* Song Information */}
      <div className="player-song">
        <img
          src={song.cover}
          alt={song.title}
          onError={(e) => {
            e.currentTarget.src = "/images/default-cover.jpg";
          }}
        />

        <div className="player-song-info">
          <h3 title={song.title}>{song.title}</h3>

          <p title={song.artist}>{song.artist}</p>
        </div>
      </div>

      {/* Controls */}
      <div className="player-controls">
        <button type="button" onClick={onPrevious} title="Previous">
          ⏮
        </button>

        <button
          type="button"
          className="play-pause-button"
          onClick={togglePlay}
          title={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? "⏸" : "▶"}
        </button>

        <button type="button" onClick={onNext} title="Next">
          ⏭
        </button>
      </div>

      {/* Progress */}
      <div className="player-progress">
        <span>{formatTime(currentTime)}</span>

        <input
          type="range"
          min="0"
          max={duration || 0}
          value={currentTime}
          onChange={handleProgress}
        />

        <span>{formatTime(duration)}</span>
      </div>

      {/* Volume */}
      <div className="player-volume">
        <span>🔊</span>

        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolume}
        />
      </div>
    </div>
  );
}

export default MusicPlayer;
