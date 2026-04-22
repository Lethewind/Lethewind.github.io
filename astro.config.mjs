// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide';

// https://astro.build/config
export default defineConfig({
	site: 'https://Lethewind.github.io',
	integrations: [
		starlight({
			title: 'Lethewind的博客',
			plugins: [starlightThemeRapide()],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Lethewind' }],
			sidebar: [
				{
					label: '博客',
					autogenerate: { directory: 'blog' },
				},
				{
					label: '笔记',
					autogenerate: { directory: 'notes' },
				},
				{
					label: '关于我',
					items: [{ label: '个人介绍', slug: 'about' }],
				},
			],
		}),
	],
});
