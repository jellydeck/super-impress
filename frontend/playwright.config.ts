import { defineConfig } from '@playwright/test';

export default defineConfig({
	webServer: {
		command: 'npm run build && npm run preview',
		cwd: './frontend',
		port: 4173
	},
	testDir: './frontend/e2e'
});
