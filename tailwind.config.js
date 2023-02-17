/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
    },
  },
  plugins:
    [require("@tailwindcss/line-clamp"),
    ('tailwindcss/plugin'),
      (function({ addVariant, e }) {
        addVariant('third-child', ({ modifySelectors, separator }) => {
          modifySelectors(({ className }) => {
            return `.${e(`third-child${separator}${className}`)}:nth-child(3)`
          })
        })
      })
    ]
}