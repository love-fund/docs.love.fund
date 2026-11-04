// the docs sidebar. shared by astro.config.mjs (navigation) and src/pages/reference/single-pager.astro,
// which walks it to render every page in the same order, so the two can never drift apart.
export const sidebar = [
	{
		label: 'Start here',
		collapsed: true,
		items: [
			'start-here/what-is-love-fund',
			'start-here/track-record',
		],
	},
	{
		label: 'Ontology',
		collapsed: true,
		items: [
			{ label: 'Intro', slug: 'ontology' },
			{ label: 'Mission: Fund What Matters', slug: 'ontology/fund-what-matters' },
			{ label: 'Beliefs', slug: 'ontology/beliefs' },
			{ label: 'Beyond Dualism', slug: 'ontology/beyond-dualism' },
			{ label: 'Dialectic: Love x Funding', slug: 'ontology/dialectic' },
			{
				label: 'More dialectics',
				collapsed: true,
				items: [
					{ label: 'Dialectic: Sovereignty x Interdependence', slug: 'ontology/dialectics/sovereignty-interdependence' },
					{ label: 'Dialectic: Profit x Purpose', slug: 'ontology/dialectics/profit-purpose' },
					{ label: 'Dialectic: Networks x Hierarchies', slug: 'ontology/dialectics/networks-hierarchies' },
					{ label: 'Dialectic: Gift x Exchange', slug: 'ontology/dialectics/gift-exchange' },
					{ label: 'Dialectic: Scarcity x Abundance', slug: 'ontology/dialectics/scarcity-abundance' },
					{ label: 'Dialectic: Measurement x Meaning', slug: 'ontology/dialectics/measurement-meaning' },
					{ label: 'Dialectic: Local x Global', slug: 'ontology/dialectics/local-global' },
					{ label: 'Dialectic: Short-term x Long-term', slug: 'ontology/dialectics/short-long-term' },
					{ label: 'Dialectic: Trust x Verification', slug: 'ontology/dialectics/trust-verification' },
					{ label: 'Dialectic: Openness x Boundaries', slug: 'ontology/dialectics/openness-boundaries' },
					{ label: 'Dialectic: Competition x Cooperation', slug: 'ontology/dialectics/competition-cooperation' },
					{ label: 'Dialectic: Being x Doing', slug: 'ontology/dialectics/being-doing' },
					{ label: 'Dialectic: Sacred x Global Economy', slug: 'ontology/dialectics/sacred-global-economy' },
				],
			},
			{ label: 'The Upward Spiral', slug: 'ontology/upward-spiral' },
		],
	},
	{ label: 'Roadmap', collapsed: true, items: [{ autogenerate: { directory: 'roadmap' } }] },
	{
		label: 'Reference',
		collapsed: true,
		items: [{ autogenerate: { directory: 'reference' } }, { label: 'Single Pager', link: '/reference/single-pager/' }],
	},
];
