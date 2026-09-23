import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

// Farben kommen aus den CSS-Variablen in src/index.css.
// Dort stehen auch die Hex-Werte der Markenfarben.
const color = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        // Markenfarben
        anthracite: color("anthracite"),
        petrol: {
          DEFAULT: color("petrol"),
          dark: color("petrol-dark"),
          light: color("petrol-light"),
        },
        offwhite: color("offwhite"),

        // shadcn/ui-Farbrollen
        background: color("background"),
        foreground: color("foreground"),
        border: color("border"),
        input: color("border"),
        ring: color("ring"),
        primary: {
          DEFAULT: color("primary"),
          foreground: color("primary-foreground"),
        },
        secondary: {
          DEFAULT: color("secondary"),
          foreground: color("secondary-foreground"),
        },
        muted: {
          DEFAULT: color("muted"),
          foreground: color("muted-foreground"),
        },
        accent: {
          DEFAULT: color("accent"),
          foreground: color("accent-foreground"),
        },
        card: {
          DEFAULT: color("card"),
          foreground: color("card-foreground"),
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [animate],
} satisfies Config;
