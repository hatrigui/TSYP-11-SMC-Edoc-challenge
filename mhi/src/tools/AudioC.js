import { useState, useRef } from "react";
import { MdOutlinePlayCircleOutline } from "react-icons/md";
import { CgPlayPauseO } from "react-icons/cg";

function AudioC({ audioSrc, picurl, title, desc }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="bg-black shadow-lg rounded p-3">
      <audio ref={audioRef} src={audioSrc} />
      <div className="flex justify-center group relative">
        <img
          className="pt-2 pb-2 w-full md:w-72 block rounded"
          src={picurl}
          alt=""
        />
        <div className="absolute rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
          <button
            onClick={handlePlayPause}
            className="text-5xl hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition"
          >
            {isPlaying ? <CgPlayPauseO /> : <MdOutlinePlayCircleOutline />}
          </button>
        </div>
      </div>
      <div className="p-5 flex flex-col items-center">
        <h3 className="text-white text-lg">{title}</h3>
        <p className="text-gray-400">{desc}</p>
      </div>
    </div>
  );
}

export default AudioC;
