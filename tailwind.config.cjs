const { withTV } = require("tailwind-variants/transformer");

/** @type {import('tailwindcss').Config} */
module.exports = withTV({
    content: [
        "./src/**/**/*.{html,js,ts,jsx,tsx}",
        "./src/**/*.{html,js,ts,jsx,tsx}",
        "./src/*.{html,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#6ACBB7",
            },
        },
    },
    plugins: [],
});
