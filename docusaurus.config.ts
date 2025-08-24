import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type * as Redocusaurus from 'redocusaurus';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: 'Let\'s Book Documentation',
    tagline: 'Your comprehensive guide to Let\'s Book',
    favicon: 'img/favicon.ico',

    // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
    future: {
        v4: true, // Improve compatibility with the upcoming Docusaurus v4
    },

    // Set the production url of your site here
    url: 'https://letsbook.github.io',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'letsbook', // Usually your GitHub org/user name.
    projectName: 'docs', // Usually your repo name.

    onBrokenLinks: 'log',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    stylesheets: [
        'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap',
    ],

    headTags: [
        {
            tagName: 'script',
            attributes: {
                type: 'text/javascript',
            },
            innerHTML: `!function(e,t,n){function a(){var e=t.getElementsByTagName("script")[0],n=t.createElement("script");n.type="text/javascript",n.async=!0,n.src="https://beacon-v2.helpscout.net",e.parentNode.insertBefore(n,e)}if(e.Beacon=n=function(t,n,a){e.Beacon.readyQueue.push({method:t,options:n,data:a})},n.readyQueue=[],"complete"===t.readyState)return a();e.attachEvent?e.attachEvent("onload",a):e.addEventListener("load",a,!1)}(window,document,window.Beacon||function(){});`,
        },
        {
            tagName: 'script',
            attributes: {
                type: 'text/javascript',
            },
            innerHTML: `window.Beacon('init', '${process.env.HELPSCOUT_BEACON_ID}');`,
        },
    ],

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    editUrl: process.env.NODE_ENV === 'production' ? undefined : 'https://github.com/letsbook/docs/tree/main/',
                },
                blog: {
                    path: 'releases',
                    routeBasePath: 'releases',
                    blogTitle: 'Release Notes',
                    blogDescription: 'Let\'s Book Release Notes and Updates',
                    blogSidebarTitle: 'Recent Releases',
                    blogSidebarCount: 'ALL',
                    showReadingTime: false,
                    feedOptions: {
                        type: ['atom', 'json'],
                        xslt: true,
                        title: 'Let\'s Book Release Notes',
                        description: 'Stay updated with the latest Let\'s Book releases',
                    },
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: process.env.NODE_ENV === 'production' ? undefined : 'https://github.com/letsbook/docs/tree/main/',
                    // Useful options to enforce blogging best practices
                    onInlineTags: 'warn',
                    onInlineAuthors: 'warn',
                    onUntruncatedBlogPosts: 'ignore',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
        // Redocusaurus config
        [
            'redocusaurus',
            {
                openapi: {
                    // Folder to scan for *.openapi.yaml files
                    path: 'openapi',
                    routeBasePath: '/api',
                },
                specs: [
                    // Optionally provide individual files/urls to load
                    // {
                    //     // Pass it a path to a local OpenAPI YAML file
                    //     spec: 'api.yaml',
                    //     id: 'from-manual-file',
                    //     route: '/api/from-manual-file',
                    // },
                    // // You can also pass it an OpenAPI spec URL
                    // {
                    //     spec: 'https://redocly.github.io/redoc/openapi.yaml',
                    //     id: 'from-remote-file',
                    //     route: '/api/from-remote-file',
                    // },
                ],
                theme: {
                    primaryColor: '#081590',
                },
            },
        ] satisfies Redocusaurus.PresetEntry,
    ],

    plugins: [require.resolve('docusaurus-lunr-search')],

    themeConfig: {
        // Replace with your project's social card
        image: 'img/docusaurus-social-card.jpg',
        navbar: {
            style: 'primary',
            title: 'Let\'s Book Support',
            logo: {
                alt: 'LetsBook Logo',
                src: 'img/logo-dark.svg',
                srcDark: 'img/logo-dark.svg',
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'docsSidebar',
                    position: 'left',
                    label: 'Documentation',
                },
                {
                    to: '/releases',
                    label: 'Release Notes',
                    position: 'left',
                },
                {
                    to: '/api/index',
                    label: 'API documentation',
                    position: 'left',
                }
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Documentation',
                            to: '/docs/intro',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'Release Notes',
                            to: '/releases',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/letsbook/docs',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} LetsBook.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
