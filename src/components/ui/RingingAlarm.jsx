import { useState, useRef, useEffect } from "react";
import Button from "./Button";
import Alarm from "../../assets/alarm.svg";
import ClockAlarm from "../../assets/clock-alarm.mp3";

export default function RingingAlarm({ onClose, alarm }) {
  const [isOpen, setIsOpen] = useState(true);
  const audioRef = useRef(null);

  const closePopup = () => {
    setIsOpen(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    onClose(alarm.id);
  };

  useEffect(() => {
    if (isOpen) {
      // Memutar audio saat popup terbuka
      if (audioRef.current) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.error("Autoplay audio gagal:", error);
          });
        }
      }
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-xs rounded-lg bg-white p-6 shadow-lg">
            <div className="flex flex-col items-center justify-center">
              <audio ref={audioRef} src={ClockAlarm} loop />
              <img src={Alarm} alt="Alarm" className="w-28 animate-ringing" />
              <h1 className="mt-4 text-xl font-extrabold text-secondary md:text-4xl">
                {alarm.time}
              </h1>
              <h1 className="text-sm font-semibold text-primary md:text-lg">
                {alarm.name}
              </h1>
              <button onClick={closePopup} className="mt-4">
                <Button className={"rounded-lg"} variant="secondary">
                  Close
                </Button>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
