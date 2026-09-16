// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
	site: 'https://spotlighton.github.io',
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'AsciiExportMono',
			cssVariable: '--font-ascii-export-mono',
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/ascii-export-mono.woff2'],
						weight: 400,
						style: 'normal',
					},
				],
			},
		},
	],
});