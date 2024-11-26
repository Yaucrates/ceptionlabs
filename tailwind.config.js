/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {
            colors: {
                ception: {
                    background: "#141414",
                    glassyWhite: "rgba(255, 255, 255, 0.1)",
                    cyan: "#06CED4"
                }
            },
            height: {
                firstpage: "calc(100vh - 89px)",
            }
        },
    },
    plugins: [],
};
