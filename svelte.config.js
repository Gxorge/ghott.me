import adapter from '@sveltejs/adapter-static'
import svpp from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
		}),
		files: {
			lib: "src/lib",
			assets: "src/assets"
		}
	},

	preprocess: svpp()
};

export default config;
