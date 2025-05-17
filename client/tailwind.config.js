/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#8B572A',
        secondary: '#800020',
        accent: '#D4AF37',
        'light-cream': '#FDFBF7',
        cream: '#F5F5DC',
        dark: '#262626',
        'dark-brown': '#3E2723',
        'light-brown': '#D7CCC8',
        'gold': '#D4AF37',
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'leather-texture': "url('https://images.pexels.com/photos/2342435/pexels-photo-2342435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        'hero-pattern': "url('https://images.pexels.com/photos/5214139/pexels-photo-5214139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      },
      boxShadow: {
        'custom': '0 4px 20px rgba(0, 0, 0, 0.08)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};