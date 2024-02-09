/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/components/**/*.{js,jsx,ts,tsx,scss}',
		'./pages/**/*.{js,jsx,ts,tsx}'
	],
	theme: {
		extend: {
			backgroundImage: {
				'header-bg': "url('/img/actionBg.png')",
				'action-bg': "url('/img/actionBg2.jpg')",
				'register-bg': "url('/img/register/bg.jpg')"
			}
		}
	},
	plugins: []
}
