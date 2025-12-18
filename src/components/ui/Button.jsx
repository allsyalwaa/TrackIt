export default function Button({
  children,
  variant = "primary",
  className,
  onClick,
  type,
}) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`
        flex items-center justify-center gap-4 rounded-full  border-[1.5px] px-4 py-1 font-medium sm:px-5 sm:py-2
        ${variant === "secondary" && "border-secondary bg-secondary text-sm text-white"}
        ${variant === "primary" && "border-primary bg-primary text-xs text-white sm:text-lg"}
        ${variant === "white" && "border-secondary text-sm text-secondary"}
        ${variant === "white-primary" && "border-primary/50 text-xs text-primary sm:text-lg"}
        ${variant === "red" && "border-[#EE0C00] bg-[#EE0C00] text-xs text-white"}
        ${className}
    `}
    >
      {children}
    </button>
  );
}
