export default function ButtonPlus({ onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`
      flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white 
      ${className}
      `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5em"
        height="1.5em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2"
        />
      </svg>
    </button>
  );
}
