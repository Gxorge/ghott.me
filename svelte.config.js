import adapter from '@sveltejs/adapter-node'
import svpp from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		files: {
			lib: "src/lib",
			assets: "src/assets"
		}
	},

	preprocess: svpp()
};

export default config;
