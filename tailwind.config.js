const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    purge: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
                montserrat: ["Montserrat", "sans-serif"],
                cambaria: ["Cambaria Bold", "sans-serif"],
                poppins: ["Poppins", "sans-serif"],
                baskerville: ["Baskerville", "serif"],
            },
            colors: {
                "bluish-gray": "#537188",
                "steel-blue": "#30475E",
                "off-white-gray": "#EEEEEE",
                "dodger-blue": "#3C79F5",
                "deep-teal": "#0E918C",
                "charcoal-gray": "#383838",
                "light-camel": "#CBB279",
                "off-white-beige": "#E1D4BB",
                "cornflower-blue": "#6DA9E4",
                "cinnabar": "#DF7857",
                "indian-red": "#CE5959",
                "teal-green": "#1F8A70",
                "deep-brown": "#704214",
                "midnight-blue": "#3C486B",
            },
        },
    },
    variants: {
        extend: {
            fontFamily: ["responsive"], // Enable responsive variant for fontFamily utility
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("daisyui"),
        require("tailwind-scrollbar"),
    ],
};
