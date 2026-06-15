import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import 'dotenv/config';
import { themes as prismThemes } from 'prism-react-renderer';
import type * as Redocusaurus from 'redocusaurus';

const intercomAppId = process.env.INTERCOM_APP_ID;
const noIndex = !!parseInt(process.env.NO_INDEX);
const siteUrl = process.env.SITE_URL || 'https://support.letsbook.app';

const config: Config = {
    title: "Let's Book Support",
    tagline: "Your comprehensive guide and support center to Let's Book",
    favicon: 'img/favicon.ico',
    trailingSlash: true,
    noIndex: noIndex,

    // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
    future: {
        v4: true, // Improve compatibility with the upcoming Docusaurus v4
    },

    // Set the production url of your site here
    url: siteUrl,
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'letsbook', // Usually your GitHub org/user name.
    projectName: 'docs', // Usually your repo name.

    onBrokenLinks: 'warn',

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

    // Intercom Messenger. Only loaded when INTERCOM_APP_ID is set, so the
    // widget stays hidden in local dev. Visitors here are anonymous, so no
    // identity verification (JWT) is needed.
    headTags: intercomAppId
        ? [
              {
                  tagName: 'script',
                  attributes: {
                      type: 'text/javascript',
                  },
                  innerHTML: `window.intercomSettings={app_id:'${intercomAppId}',api_base:'https://api-iam.intercom.io'};`,
              },
              {
                  tagName: 'script',
                  attributes: {
                      type: 'text/javascript',
                  },
                  innerHTML: `(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/'+w.intercomSettings.app_id;var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();`,
              },
          ]
        : [],

    markdown: {
        mermaid: true,
    },

    themes: ['@docusaurus/theme-mermaid'],

    plugins: [
        [
            '@docusaurus/plugin-client-redirects',
            {
                redirects: [
                    {
                        from: '/guides',
                        to: '/guides/day-to-day/',
                    },
                    {
                        from: '/api/index',
                        to: '/api/',
                    },
                ],
            },
        ],
        './plugins/noindex-blog-plugin.js',
        './plugins/noindex-api-plugin.js',
    ],

    presets: [
        [
            'classic',
            {
                docs: {
                    path: 'docs',
                    routeBasePath: '',
                    sidebarPath: './sidebars.ts',
                    breadcrumbs: true,
                    editUrl:
                        process.env.NODE_ENV === 'production'
                            ? undefined
                            : 'https://github.com/letsbook/docs/tree/main/',
                },
                blog: {
                    path: 'releases',
                    routeBasePath: 'releases',
                    blogTitle: 'Releases',
                    blogDescription: "Let's Book releases",
                    blogSidebarTitle: 'Recent releases',
                    blogSidebarCount: 20,
                    showReadingTime: false,
                    feedOptions: {
                        type: ['atom', 'json'],
                        title: "Let's Book releases",
                        description:
                            "Stay updated with the latest Let's Book releases",
                        limit: 5,
                        createFeedItems: async ({
                            blogPosts,
                            defaultCreateFeedItems,
                            ...rest
                        }) => {
                            const items = await defaultCreateFeedItems({
                                blogPosts,
                                ...rest,
                            });

                            return items.map((item, index) => {
                                const richTextSummary = blogPosts[index]
                                    .metadata.frontMatter.richTextSummary as
                                    | string
                                    | undefined;

                                if (richTextSummary) {
                                    item.extensions = [
                                        ...(item.extensions ?? []),
                                        {
                                            name: '_richTextSummary',
                                            objects: richTextSummary,
                                        },
                                    ];
                                }

                                return item;
                            });
                        },
                    },
                    editUrl:
                        process.env.NODE_ENV === 'production'
                            ? undefined
                            : 'https://github.com/letsbook/docs/tree/main/',
                    // Useful options to enforce blogging best practices
                    onInlineTags: 'warn',
                    onInlineAuthors: 'warn',
                    onUntruncatedBlogPosts: 'ignore',
                },
                theme: {
                    customCss: [
                        './src/css/menu.css',
                        './src/css/footer.css',
                        './src/css/content.css',
                        './src/css/search.css',
                        './src/css/custom.css',
                    ],
                },
            } satisfies Preset.Options,
        ],
        // Redocusaurus config
        [
            'redocusaurus',
            {
                specs: [
                    {
                        spec: 'api/index.openapi.yaml',
                        id: 'api',
                        route: '/api/',
                    },
                ],
                theme: {
                    primaryColor: '#081590',
                    options: {
                        scrollYOffset: 60,
                        hideDownloadButton: true,
                        expandResponses: '200',
                        jsonSampleExpandLevel: 3,

                        // @ts-ignore
                        theme: {
                            colors: {
                                primary: {
                                    main: '#081590',
                                    light: '#7c85d3',
                                },
                                text: {
                                    primary: '#000000',
                                    secondary: '#7c85d3',
                                },
                            },
                            sidebar: {
                                activeBgColor: '#f7f8fe',
                                activeTextColor: '#050f6a',
                                backgroundColor: '#ffffff',
                                fontFamily: 'Rubik',
                                textColor: '#050f6a',
                            },
                            rightPanel: {
                                backgroundColor: '#050f6a',
                                textColor: '#ffffff',
                            },
                            spacing: {
                                sectionVertical: '16',
                            },
                            typography: {
                                fontFamily:
                                    "'IBM Plex Sans', -apple-system, BlinkMacSystemFont, sans-serif",
                                fontSize: '16px',
                                headings: {
                                    fontFamily: 'Rubik',
                                    fontWeight: '500',
                                },
                                heading1: {
                                    color: '#ff0000',
                                },
                            },
                        },
                    },
                },
            },
        ] satisfies Redocusaurus.PresetEntry,
    ],

    themeConfig: {
        // Replace with your project's social card
        image: 'img/docusaurus-social-card.jpg',
        colorMode: {
            defaultMode: 'light',
            disableSwitch: true,
            respectPrefersColorScheme: false,
        },
        navbar: {
            style: 'primary',
            title: "Let's Book Support",
            logo: {
                alt: 'LetsBook Logo',
                src: 'img/logo-dark.svg',
                srcDark: 'img/logo-dark.svg',
            },
            hideOnScroll: false,
            items: [
                {
                    to: '/',
                    label: 'Home',
                    position: 'left',
                    exact: true,
                },
                {
                    to: '/guides/day-to-day/',
                    label: 'Guides',
                    position: 'left',
                },
                // {
                //     // Prevent Docusaurus from auto-selecting the first sidebar item
                //     to: '/courses',
                //     label: 'Courses',
                //     position: 'left',
                // },
                {
                    to: '/releases/',
                    label: 'Releases',
                    position: 'left',
                },
                {
                    to: '/api/',
                    label: 'API docs',
                    position: 'left',
                },
                {
                    type: 'search',
                    position: 'right',
                },
            ],
        },
        mermaid: {
            theme: { light: 'neutral' },
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Documentation',
                    items: [
                        {
                            label: 'Day to day use',
                            to: '/guides/day-to-day/',
                        },
                        {
                            label: 'Boost revenue',
                            to: '/guides/boost-revenue/',
                        },
                        {
                            label: 'Settings',
                            to: '/guides/settings/',
                        },
                    ],
                },
                {
                    title: 'Resources',
                    items: [
                        {
                            label: 'Releases',
                            to: '/releases/',
                        },
                        {
                            label: 'API documentation',
                            to: '/api/',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/letsbook/docs',
                        },
                    ],
                },
                {
                    title: "Let's Book",
                    items: [
                        {
                            label: 'Dashboard',
                            href: 'https://dashboard.letsbook.app',
                        },
                        {
                            label: 'Main website',
                            href: 'https://lets-book.com',
                        },
                        {
                            label: 'Contact support',
                            href: 'mailto:support@lets-book.com',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Let's Book.`,
        },
        prism: {
            theme: prismThemes.github,
            additionalLanguages: ['php', 'ruby', 'csharp'],
        },
        algolia: {
            appId: 'YHKMFT0G3Q',
            apiKey: 'b0c960a12055cf4661e6b0eb86b979ac',
            indexName: 'docs',
            contextualSearch: true,
            searchParameters: {},
            placeholder: 'Ask your question',
            askAi: 'uvhbkrE91SWx',
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
