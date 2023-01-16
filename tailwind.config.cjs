/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				'purple':'#6854FC',
				'yellow':'#FFE600'
			  },
			  fontFamily: {
				inter: ["Inter", ...defaultTheme.fontFamily.sans],
				roboto: ["Roboto", ...defaultTheme.fontFamily.sans]
			  },
		},
	},
	plugins: [],
}
