const colors = require("tailwindcss/colors")
const plugin = require("tailwindcss/plugin")

/** @type {import("tailwindcss").Config} */
const colorsThemePreset = {
  darkMode: "selector",
  theme: {
    colors: {
      background: {
        DEFAULT: "oklch(97% 0 235 / <alpha-value>)",
        dark: "oklch(30% 0.020 235 / <alpha-value>)",
      },
      error: {
        DEFAULT: "oklch(70.00%  0.30 13 / <alpha-value>)",
        dark: "oklch(69.00% 0.16 13 / <alpha-value>)",
      },
    },
  },
}

/** @type {import("tailwindcss").Config} */
const customPreset = {
  theme: {
    extend: {
      // borderColor: {
      //   DEFAULT: "oklch(86.00% 0.004 235 / <alpha-value>)",
      // },
      // ringWidth: {
      //   DEFAULT: "2px",
      // },
      // ringOffsetColor: {
      //   DEFAULT: colors.transparent,
      // },
      padding: {
        "page-default": "min(2rem, min(4vw, 4vh))",
        "navbar-default": "min(1rem, min(2vw, 2vh))",
      },
      margin: {
        "page-default": "min(2rem, min(4vw, 4vh))",
      },
      // height: {
      //   40: "2.66rem",
      //   96: "6rem",
      //   128: "8rem",
      //   256: "16rem",
      // },
      // maxHeight: {
      //   96: "6rem",
      //   128: "8rem",
      //   256: "16rem",
      // },
      animation: {
        fadeIn: "fadeIn 200ms ease",
        fadeOut: "fadeOut 200ms ease",
        scaleIn: "scaleIn 200ms ease",
        scaleOut: "scaleOut 200ms ease",
        enterFromLeft: "enterFromLeft 250ms ease",
        enterFromRight: "enterFromRight 250ms ease",
        exitToLeft: "exitToLeft 250ms ease",
        exitToRight: "exitToRight 250ms ease",
        "rolling": "rolling 2s infinite ease-in-out",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      keyframes: {
        enterFromRight: {
          from: { opacity: 0, transform: "translateX(200px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        enterFromLeft: {
          from: { opacity: 0, transform: "translateX(-200px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        exitToRight: {
          from: { opacity: 1, transform: "translateX(0)" },
          to: { opacity: 0, transform: "translateX(200px)" },
        },
        exitToLeft: {
          from: { opacity: 1, transform: "translateX(0)" },
          to: { opacity: 0, transform: "translateX(-200px)" },
        },
        scaleIn: {
          from: { opacity: 0, transform: "rotateX(-10deg) scale(0.9)" },
          to: { opacity: 1, transform: "rotateX(0deg) scale(1)" },
        },
        scaleOut: {
          from: { opacity: 1, transform: "rotateX(0deg) scale(1)" },
          to: { opacity: 0, transform: "rotateX(-10deg) scale(0.95)" },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeOut: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        rolling: {
          from: { transform: "translateX(-100%) scaleX(0.5)" },
          to: { transform: "translateX(100%) scaleX(1)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
    },
  },
}

/** @type {import("tailwindcss").Config} */
module.exports = {
    darkMode: ["class"],
    presets: [
    customPreset,
    colorsThemePreset,
  ],
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    require("@tailwindcss/container-queries"),
    require("tailwindcss-animate"),
    plugin(function({ addVariant }) {
      addVariant("child-header", "& > :is(h1,h2,h3,h4,h5)")
    }),
    plugin(function({ addUtilities }) {
      const utils = {
        ".writing-vertical": { writingMode: "vertical-lr" },
        ".writing-horizontal": { writingMode: "horizontal-lr" },
      }
      addUtilities(utils)
    }),
    plugin(function({ matchUtilities }) {
      matchUtilities({
        "h-dynamic-screen": value => ({
          height: `${value}dvh`,
        }),
      }, {
        values: {
          0: "0",
          25: "25",
          50: "50",
          75: "75",
          100: "100",
        },
      })
    }),
    plugin(function({ matchUtilities }) {
      matchUtilities({
        "typography": value => ({
          color: `oklch(20% 0.039 235 / ${value})`,
        }),
      }, {
        values: {
          body: "0.70",
          header: "0.85",
          caption: "0.6",
        },
      })
      matchUtilities({
        "typography-dark": value => ({
          color: `oklch(95% 0.01 235 / ${value})`,
        }),
      }, {
        values: {
          body: "0.85",
          header: "0.95",
          caption: "0.7",
        },
      })
    }),
    plugin(function({ matchUtilities }) {
      matchUtilities({
        "grid-fit": value => ({
          gridTemplateColumns: `repeat(auto-fit, minmax(${value}, 1fr))`,
        }),
        "grid-fill": value => ({
          gridTemplateColumns: `repeat(auto-fill, minmax(${value}, 1fr))`,
        }),
      }, {
        values: {
          15: "15rem",
          20: "20rem",
          25: "25rem",
          30: "30rem",
          35: "35rem",
          40: "40rem",
        },
      })
    }),
    plugin(function({ matchVariant }) {
      matchVariant("not", (value) => `&:not(${value})`)
    }),
  ],
    theme: {
    	extend: {
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		colors: {
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		}
    	}
    }
}
