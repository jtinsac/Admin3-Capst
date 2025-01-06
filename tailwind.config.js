/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false, // Disable Tailwind's global reset to avoid interfering with vanilla CSS
  },
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Adjust paths to include only the files where Tailwind is used
  ],
  theme: {
    extend: {
      // Add customizations here if needed
    },
  },
};

