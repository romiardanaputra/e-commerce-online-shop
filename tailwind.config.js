import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
    "./storage/framework/views/*.php",
    "./resources/views/**/*.blade.php",
    "./resources/js/**/*.jsx",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Figtree", ...defaultTheme.fontFamily.sans],
      },
    },
  },

  plugins: [require("daisyui"), forms],

  daisyui: {
    themes: false,
    darkTheme: "dark",
    base: true,
    styled: true,
    utlis: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
  },
};
