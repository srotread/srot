import type { FC, ReactNode } from "react"

interface ButtonProps {
  text: string
  icon?: ReactNode
  type: ButtonType
  theme: "Light" | "Dark"
  disabled?: boolean
}

export type ButtonType = "Primary" | "Secondary"

const Button: FC<ButtonProps> = ({ text, icon, type, theme, ...props }) => {
  if (type === "Primary") {
    return (
      <button
        className={`rounded bg-accent py-2 px-3 text-dark shadow-btn-accent transition-all focus:ring ${
          theme === "Light"
            ? "hover:bg-dark hover:text-light hover:shadow-btn-dark focus:ring-dark"
            : "hover:bg-light hover:text-dark hover:shadow-btn-light focus:ring-light"
        } ${icon && "flex items-center gap-2"}`}
        {...props}
      >
        <span>{text}</span>
        <div className="w-6 md:w-8 2xl:w-10">{icon}</div>
      </button>
    )
  }

  if (type === "Secondary") {
    return (
      <button
        className={`focus:border-3 rounded border-2 py-2 px-3 transition-all ${
          theme === "Light"
            ? "border-dark text-dark hover:bg-dark hover:text-light hover:shadow-btn-dark"
            : "border-light text-light hover:bg-light hover:text-dark hover:shadow-btn-light"
        } ${icon && "flex items-center gap-2"}`}
        {...props}
      >
        <span>{text}</span>
        <div className="w-6 md:w-8 2xl:w-10">{icon}</div>
      </button>
    )
  }

  return <button>Error - Button</button>
}

export default Button
