import { useEffect, useRef, useState } from "react";
import "./MusicPlayer.css";

function MusicPlayer({
  song,
  onPrevious,
  onNext,
}) {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  /*
  =====================================================
  NEW SONG SELECTED
  AUTOMATICALLY PLAY SONG
  =====================================================
  */

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio || !song) {
      return;
    }

    // Set new song
    audio.src = song.audio;

    // Set volume
    audio.volume = volume;

    // Reset progress
    setCurrentTime(0);
    setDuration(0);

    // Load new audio
    audio.load();

    /*
    IMPORTANT:
    Automatically play selected song
    */

    const autoPlay = async () => {
      try {
        await audio.play();

        setIsPlaying(true);
      } catch (error) {
        console.error("Auto play failed:", error);

        setIsPlaying(false);
      }
    };

    autoPlay();
  }, [song]);

  /*
  =====================================================
  AUDIO EVENTS
  =====================================================
  */

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    const handleLoadedMetadata = () => {
      setDuration(audio.duration || 0);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handlePlay = () => {
      setIsPlaying(true);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    const handleEnded = () => {
      setIsPlaying(false);

      // Automatically play next song
      if (onNext) {
        onNext();
      }
    };

    audio.addEventListener(
      "loadedmetadata",
      handleLoadedMetadata
    );

    audio.addEventListener(
      "timeupdate",
      handleTimeUpdate
    );

    audio.addEventListener(
      "play",
      handlePlay
    );

    audio.addEventListener(
      "pause",
      handlePause
    );

    audio.addEventListener(
      "ended",
      handleEnded
    );

    return () => {
      audio.removeEventListener(
        "loadedmetadata",
        handleLoadedMetadata
      );

      audio.removeEventListener(
        "timeupdate",
        handleTimeUpdate
      );

      audio.removeEventListener(
        "play",
        handlePlay
      );

      audio.removeEventListener(
        "pause",
        handlePause
      );

      audio.removeEventListener(
        "ended",
        handleEnded
      );
    };
  }, [onNext]);

  /*
  =====================================================
  PLAY / PAUSE
  =====================================================
  */

  const togglePlay = async () => {
    const audio = audioRef.current;

    if (!audio || !song) {
      return;
    }

    try {
      if (audio.paused) {
        await audio.play();
      } else {
        audio.pause();
      }
    } catch (error) {
      console.error(
        "Play/Pause error:",
        error
      );
    }
  };

  /*
  =====================================================
  PREVIOUS SONG
  =====================================================
  */

  const handlePrevious = () => {
    if (onPrevious) {
      onPrevious();
    }
  };

  /*
  =====================================================
  NEXT SONG
  =====================================================
  */

  const handleNext = () => {
    if (onNext) {
      onNext();
    }
  };

  /*
  =====================================================
  PROGRESS BAR
  =====================================================
  */

  const handleProgressChange = (e) => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    const newTime = Number(e.target.value);

    audio.currentTime = newTime;

    setCurrentTime(newTime);
  };

  /*
  =====================================================
  VOLUME
  =====================================================
  */

  const handleVolumeChange = (e) => {
    const audio = audioRef.current;

    const newVolume = Number(e.target.value);

    setVolume(newVolume);

    if (audio) {
      audio.volume = newVolume;
    }
  };

  /*
  =====================================================
  FORMAT TIME
  =====================================================
  */

  const formatTime = (time) => {
    if (!Number.isFinite(time)) {
      return "0:00";
    }

    const minutes = Math.floor(time / 60);

    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  /*
  =====================================================
  NO SONG SELECTED
  =====================================================
  */

  if (!song) {
    return (
      <div className="music-player empty-player">
        <p>
          Select a song to start playing 🎵
        </p>
      </div>
    );
  }

  /*
  =====================================================
  PLAYER UI
  =====================================================
  */

  return (
    <div className="music-player">

      {/* Audio Element */}

      <audio
        ref={audioRef}
        preload="auto"
      />

      {/* =========================
          SONG INFORMATION
      ========================== */}

      <div className="player-song">

        <img
          src={song.cover}
          alt={song.title}
          onError={(e) => {
            e.currentTarget.src =
              "/images/default-cover.jpg";
          }}
        />

        <div className="player-song-info">

          <h3>
            {song.title}
          </h3>

          <p>
            {song.artist}
          </p>

        </div>

      </div>

      {/* =========================
          PLAYER CONTROLS
      ========================== */}

      <div className="player-controls">

        {/* Previous */}

        <button
          type="button"
          onClick={handlePrevious}
          title="Previous Song"
        >
          ⏮
        </button>

        {/* Play / Pause */}

        <button
          type="button"
          className="play-pause-button"
          onClick={togglePlay}
          title={
            isPlaying
              ? "Pause"
              : "Play"
          }
        >
          {isPlaying ? "⏸" : "▶"}
        </button>

        {/* Next */}

        <button
          type="button"
          onClick={handleNext}
          title="Next Song"
        >
          ⏭
        </button>

      </div>

      {/* =========================
          PROGRESS
      ========================== */}

      <div className="player-progress">

        <span>
          {formatTime(currentTime)}
        </span>

        <input
          type="range"
          min="0"
          max={duration || 0}
          value={currentTime}
          onChange={handleProgressChange}
        />

        <span>
          {formatTime(duration)}
        </span>

      </div>

      {/* =========================
          VOLUME
      ========================== */}

      <div className="player-volume">

        <span>
          🔊
        </span>

        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />

      </div>

    </div>
  );
}

export default MusicPlayer;
