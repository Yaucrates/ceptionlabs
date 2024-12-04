import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
        colors: {
            ception: {
                background: "#141414",
                glassyWhite: "rgba(255, 255, 255, 0.1)",
                cyan: "#06CED4"
            },
            neutral: {
                850: "#1f1f1f"
            }
        },
        height: {
            firstpage: 'calc(100vh - 76px)',
        },
        screens: {
            xs: '400px',
        }
    }
  },

  plugins: []
} satisfies Config;
