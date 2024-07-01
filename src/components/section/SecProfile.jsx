import { useState } from "react";
import Profile1 from "../../assets/illustration-profile.svg";
import ChangePassword from "../ui/ChangePassword";

export default function SecProfile() {
  const [isPasswordPopupOpen, setIsPasswordPopupOpen] = useState(false);

  const handleOpenPasswordPopup = () => {
    setIsPasswordPopupOpen(true);
  };

  const handleClosePasswordPopup = () => {
    setIsPasswordPopupOpen(false);
  };

  return (
    <section>
      <div className="text-center text-3xl font-bold text-secondary">
        My Profile
      </div>
      <hr className="mt-4 border-t border-primary/50" />
      <div className="mt-6 flex flex-col items-center justify-center">
        <img className="flex h-20 items-center" src={Profile1} alt="" />
        <button className="mt-2 flex items-center gap-2 text-primary/50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M11 16V7.85l-2.6 2.6L7 9l5-5l5 5l-1.4 1.45l-2.6-2.6V16zm-5 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z"
            />
          </svg>
          <p className="text-xs text-primary/50">upload</p>
        </button>

        <form
          className="mt-4 flex w-full flex-col justify-start md:w-2/5"
          action=""
        >
          <label className="text-sm text-primary md:text-lg" htmlFor="">
            Email
          </label>
          <input
            className="mt-2  rounded-lg border-[1.5px] border-primary/50 px-4 py-0.5 placeholder-primary/50 md:py-2"
            type="email"
          />

          <div className="mt-2 flex justify-end">
            <button
              type="button"
              onClick={handleOpenPasswordPopup}
              className="text-xs text-primary underline"
            >
              Change password
            </button>
          </div>
        </form>
      </div>
      {isPasswordPopupOpen && (
        <ChangePassword onClose={handleClosePasswordPopup} />
      )}
    </section>
  );
}
