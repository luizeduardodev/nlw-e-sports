/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.tsx", "./index.html"],
    theme: {
        fontFamily: {
            sans: ["Inter", "sans-serif"]
        },
        extend: {
            backgroundImage: {
                galaxy: "url('./dist/assets/index.3e3f93eb.css')",

                "nlw-gradient":
                    "linear-gradient(89.86deg, #9572FC 10.10%, #43E7AD 50.94%, #E1D55D 98.57%)",

                "game-gradient":
                    "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)"
            }
        },
        screens: {
            "375px": "375px",
            "425px": "425px",
            "640px": "640px",
            "768px": "768px",
            "1024px": "1024px",
            "1280px": "1280px"
        }
    },
    plugins: []
};
