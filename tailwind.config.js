import daisyui from 'daisyui'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {}
  },
  variants: {
    extend: {
      // 背景画像用を追加
      backgroundImage: {
        'hero': "url('/images/cafe.jpg')",
      }
    }
  },
  plugins: [daisyui]
}
