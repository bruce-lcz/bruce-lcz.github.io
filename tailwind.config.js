/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Google/Meta style: Clear hierarchy with Slate grays
                gray: {
                    50: '#f8f9fa', // Google's background gray
                    100: '#f1f3f4',
                    200: '#e8eaed',
                    300: '#dadce0',
                    400: '#bdc1c6',
                    500: '#9aa0a6',
                    600: '#70757a', // Secondary text
                    700: '#5f6368',
                    800: '#3c4043',
                    900: '#202124', // Primary text
                },
                // "Tech Blue" - Trustworthy, clear, vibrant
                primary: {
                    DEFAULT: '#1a73e8', // Google Blue-ish
                    hover: '#1765cc',
                    50: '#e8f0fe', // Light blue background for active states
                },
                // Subtle accent for semantic highlighting
                accent: {
                    DEFAULT: '#ea4335', // Notification/Alert red
                    secondary: '#34a853', // Success green
                }
            },
            fontFamily: {
                sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
                display: ['Outfit', 'Google Sans', 'Inter', 'sans-serif'],
            },
            boxShadow: {
                'sm': '0 1px 2px 0 rgba(60,64,67,0.3), 0 1px 3px 1px rgba(60,64,67,0.15)', // Material Elevation 1
                'md': '0 1px 3px 0 rgba(60,64,67,0.3), 0 4px 8px 3px rgba(60,64,67,0.15)', // Material Elevation 2
                'lg': '0 2px 6px 0 rgba(60,64,67,0.15), 0 8px 24px 8px rgba(60,64,67,0.1)', // Soft float
                'glow': '0 0 20px rgba(26, 115, 232, 0.15)',
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out forwards',
                'slide-up': 'slideUp 0.6s ease-out forwards',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        },
    },
    plugins: [],
}
