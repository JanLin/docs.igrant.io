module.exports = {
    title: 'iGrant.io User Guide',
    tagline: 'Your data, your choice.',
    url: 'https://docs.igrant.io',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    favicon: 'img/favicon.ico',
    organizationName: 'iGrant.io', // Usually your GitHub org/user name.
    projectName: 'docs.igrant.io', // Usually your repo name.
    themeConfig: {
        navbar: {
            title: '',
            logo: {
                alt: 'iGrant.io Logo',
                src: 'img/logo.png',
            },
            items: [
                {
                    to: 'docs/',
                    activeBasePath: 'docs',
                    label: 'Intro',
                    position: 'left',
                },
                {
                    to: 'mydata-operator/',
                    activeBasePath: 'mydata-operator',
                    label: 'MyData Operator Services',
                    position: 'left',
                },
                {
                    to: 'ssi/',
                    activeBasePath: 'ssi',
                    label: 'Self-Sovereign Identity Services',
                    position: 'left',
                },
                {
                    href: 'https://github.com/L3-iGrant',
                    label: 'iGrant.io GitHub',
                    position: 'right',
                },
                {
                    href: 'https://github.com/decentralised-dataexchange',
                    label: 'DDX GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Style Guide',
                            to: 'docs/',
                        },
                        {
                            label: 'Second Doc',
                            to: 'docs/doc2/',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/igrantio',
                        },
                        {
                            label: 'Youtube',
                            href: 'https://www.youtube.com/channel/UCnP7dTezBirfSABcCZga4mA',
                        },
                        {
                            label: 'Facebook',
                            href: 'https://www.facebook.com/igrantio/',
                        },
                        {
                            label: 'Linkedin',
                            href: 'https://twitter.com/igrantio',
                        },
                    ],
                },
                {
                    title: 'Opensource',
                    items: [
                        {
                            href: 'https://github.com/L3-iGrant',
                            label: 'iGrant.io GitHub',
                        },
                        {
                            href: 'https://github.com/decentralised-dataexchange',
                            label: 'DDX GitHub',
                        }
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} LCubed AB, Sweden`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl:
                        'https://github.com/L3-iGrant/docs.igrant.io/edit/master/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
    plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'community',
                path: 'community',
                editUrl: 'https://github.com/L3-iGrant/docs.igrant.io/edit/master/',
                routeBasePath: 'community',
                sidebarPath: require.resolve('./sidebars/sidebarsCommunity.js'),
                showLastUpdateAuthor: true,
                showLastUpdateTime: true,
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'mdoDocs',
                path: 'mdoDocs',
                editUrl: 'https://github.com/L3-iGrant/docs.igrant.io/edit/master/',
                routeBasePath: 'mydata-operator',
                sidebarPath: require.resolve('./sidebars/sidebarsMDO.js'),
                showLastUpdateAuthor: true,
                showLastUpdateTime: true,
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'ssiDocs',
                path: 'ssiDocs',
                editUrl: 'https://github.com/L3-iGrant/docs.igrant.io/edit/master/',
                routeBasePath: 'ssi',
                sidebarPath: require.resolve('./sidebars/sidebarsSSI.js'),
                showLastUpdateAuthor: true,
                showLastUpdateTime: true,
            },
        ]
    ]
};
