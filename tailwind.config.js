/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {
            colors: {
                ception: {
                    glassyWhite: "rgba(255, 255, 255, 0.1)",
                    cyan: "#06CED4"
                }
            }
        },
    },
    plugins: [],
};
