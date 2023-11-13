import { defineConfig } from 'orval';

export default defineConfig({
	applicationApi: {
		input: './openapi.json',
		output: {
			mode: 'split',
			clean: true,
			tslint: true,
			target: './assets/openapi/index.ts',
			schemas: './assets/openapi/model/',
			client: 'axios' // This is the default.
		}
	}
});
