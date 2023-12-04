import forms from '@tailwindcss/forms'
import colors from 'tailwindcss/colors'

const withAlphaValue = (varName) => `hsl(var(--${varName}) / <alpha-value>)`

/** @type {import('tailwindcss').Config} */
const config = {
	content: ['./src/**/*.{html,js,ts,svelte}'],
	darkMode: ['class', '[data-theme="dark"]'],
	theme: {
		fontFamily: {
			sans: '"Inconsolata Variable", sans-serif',
		},
		extend: {
			colors: {
				primary: colors.emerald,
				secondary: colors.purple,
				foreground: {
					brand: withAlphaValue('foreground-brand-color'),
					accent: withAlphaValue('foreground-accent-color'),
				},
				surface: {
					brand: {
						1: withAlphaValue('surface-brand-1-color'),
						2: withAlphaValue('surface-brand-2-color'),
					},
					accent: {
						1: withAlphaValue('surface-accent-1-color'),
					},
				},
			},
			aspectRatio: {
				'game-box': '2 / 3',
			},
		},
	},
	plugins: [forms],
}

export default config
