import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),
		alias: {
			$store: "./src/stores/store",
			$components: "./src/components/",
			$data: "./src/data",
			$appCSS: "./src/app.css"
		},
		paths: {
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
		}
	}
};

export default config;