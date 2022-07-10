import monacoEditorPlugin from 'vite-plugin-monaco-editor';
import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
        sveltekit(),
        monacoEditorPlugin.default({}),
    ]
};

export default config;
