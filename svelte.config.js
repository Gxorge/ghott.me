import adapter from '@sveltejs/adapter-auto'
import svpp from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		files: {
			lib: "src/lib",
			assets: "src/assets"
		}
	},

	preprocess: svpp()
};

export default config;
