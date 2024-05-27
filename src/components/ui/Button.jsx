/* eslint-disable react/prop-types */
export default function Button({ children, variant = "primary", className }) {
  return (
    <button
      className={`
        flex items-center justify-center gap-4 rounded-full  border-[1.5px] px-5 py-2 font-medium
        ${variant === "secondary" && "border-secondary bg-secondary text-sm text-white"}
        ${variant === "primary" && "border-primary bg-primary text-sm text-white"}
        ${variant === "white" && "border-secondary text-sm text-secondary"}
        ${variant === "white-primary" && "border-primary/50 text-lg text-primary"}
        ${className}
    `}
    >
      {children}
    </button>
  );
}
