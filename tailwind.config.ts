import type { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"
import twHamburgers from "tailwind-hamburgers"
import forms from "@tailwindcss/forms"
import headlessui from "@headlessui/tailwindcss"
import typography from "@tailwindcss/typography"

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Bitter", ...fontFamily.serif],
      },
      colors: {
        accent: "#DB973C",
        light: "#FFF",
        dark: "#29231B",
      },
      backgroundImage: {
        "hero-img": "url('/hero.png')",
      },
      spacing: {
        "col-inner": "calc(50% - 60vw / 2)",
        "col-outer": "calc(50% - 90vw / 2)",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
        "4xl": "2560px",
      },
      aspectRatio: {
        logo: "205 / 72",
      },
      boxShadow: {
        "btn-accent":
          "0px -1px 2px 0px rgba(219, 151, 60, 0.1), 0px 2px 1px -2px rgba(219, 151, 60, 0.04), 0px 5px 5px -2px rgba(219, 151, 60, 0.04), 0px 10px 10px -2px rgba(219, 151, 60, 0.05), 0px 20px 20px -2px rgba(219, 151, 60, 0.06), 0px 40px 40px -2px rgba(219, 151, 60, 0.08)",
        "btn-light":
          "0px -1px 2px 0px rgba(255, 255, 255, 0.1), 0px 2px 1px -2px rgba(255, 255, 255, 0.04), 0px 5px 5px -2px rgba(255, 255, 255, 0.04), 0px 10px 10px -2px rgba(255, 255, 255, 0.05), 0px 20px 20px -2px rgba(255, 255, 255, 0.06), 0px 40px 40px -2px rgba(255, 255, 255, 0.08)",
        "btn-dark":
          "0px -1px 2px 0px rgba(43, 37, 29, 0.1), 0px 2px 1px -2px rgba(43, 37, 29, 0.04), 0px 5px 5px -2px rgba(43, 37, 29, 0.04), 0px 10px 10px -2px rgba(43, 37, 29, 0.05), 0px 20px 20px -2px rgba(43, 37, 29, 0.06), 0px 40px 40px -2px rgba(43, 37, 29, 0.08)",
        "solid-accent": "-8px 8px rgb(219, 151, 60) ",
      },
    },
  },
  plugins: [twHamburgers, forms, headlessui, typography],
} satisfies Config

export default config
