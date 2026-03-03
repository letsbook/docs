module.exports = function noIndexApiPlugin(context, options) {
    const { siteConfig } = context;
    const { noIndex } = siteConfig;

    return {
        name: 'noindex-api-plugin',
        injectHtmlTags({ pathname }) {
            if (!noIndex || !pathname?.startsWith('/api')) {
                return {};
            }

            return {
                headTags: [
                    {
                        tagName: 'meta',
                        attributes: {
                            name: 'robots',
                            content: 'noindex, nofollow',
                        },
                    },
                ],
            };
        },
    };
};
