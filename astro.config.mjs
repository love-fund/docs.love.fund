// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { sidebar } from './src/sidebar.mjs';

const GA = 'G-F5QVEN6V3V'; // same property as love.fund
// regions where analytics cookies need consent (EEA + UK + CH)
const EU = ['AT','BE','BG','HR','CY','CZ','DK','EE','FI','FR','DE','GR','HU','IE','IT','LV','LT','LU','MT','NL','PL','PT','RO','SK','SI','ES','SE','IS','LI','NO','GB','CH'];

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.love.fund',
	// no `redirects` here: they emit bare pages that don't unfurl. '/' is src/pages/index.astro and the
	// old /start-here/... urls (the ontology pages now live under /ontology/) are src/pages/start-here/, all with social cards.
	integrations: [
		starlight({
			title: 'love.fund docs',
			description: 'The working docs for love.fund.',
			favicon: '/favicon.svg',
			social: [
				{ icon: 'telegram', label: 'Telegram', href: 'https://t.me/+m3faFlCfyvcyMDdh' },
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/love-fund/docs.love.fund' },
				{ icon: 'x.com', label: 'X', href: 'https://x.com/lovedotfund' },
			],
			customCss: ['./src/styles/theme.css'],
			components: {
				SiteTitle: './src/components/SiteTitle.astro',
				Head: './src/components/Head.astro',
				Footer: './src/components/Footer.astro',
				Header: './src/components/Header.astro',
				PageSidebar: './src/components/PageSidebar.astro',
			},
			head: [
				{ tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
				{ tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true } },
				{
					tag: 'link',
					attrs: {
						rel: 'stylesheet',
						href: 'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500..700&family=Newsreader:ital,opsz,wght@0,6..72,400..600;1,6..72,400..500&family=DynaPuff:wght@600&family=Chakra+Petch:wght@500;600&display=swap',
					},
				},
				{ tag: 'script', attrs: { async: true, src: `https://www.googletagmanager.com/gtag/js?id=${GA}` } },
				{
					tag: 'script',
					// no ad signals anywhere; in the EEA, UK and Switzerland analytics storage is denied, so GA sends cookieless pings only
					content: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'granted'});gtag('consent','default',{analytics_storage:'denied',region:${JSON.stringify(EU)}});gtag('js',new Date());gtag('config','${GA}',{allow_google_signals:false,allow_ad_personalization_signals:false});`,
				},
			],
			sidebar,
		}),
	],
});
