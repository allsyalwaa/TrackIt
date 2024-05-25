export default function Button({ children, variant = "primary" }) {
  return (
    <button
      className={`
        border-secondary rounded-full border-[1.5px] px-5 py-2 text-sm font-medium
        ${variant === "primary" && "bg-secondary text-white"}
        ${variant === "white" && "text-secondary"}
    `}
    >
      {children}
    </button>
  );
}
