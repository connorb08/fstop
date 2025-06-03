import { defineCloudflareConfig, OpenNextConfig } from '@opennextjs/cloudflare';

export default {
	// functions: {
	// 	edge: {
	// 		runtime: 'edge',
	// 		routes: [
	// 			'app/(index)/admin/upload/route',
	// 			'app/(index)/specials/route',
	// 		],
	// 		patterns: ['admin/upload', 'specials'],
	// 	},
	// },
	...defineCloudflareConfig({
		// Uncomment to enable R2 cache,
		// It should be imported as:
		// `import r2IncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/r2-incremental-cache";`
		// See https://opennext.js.org/cloudflare/caching for more details
		// incrementalCache: r2IncrementalCache,
	}),
} satisfies OpenNextConfig;
