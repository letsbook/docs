module.exports = function noIndexBlogPlugin(context, options) {
    const { siteConfig } = context;
    const { noIndex } = siteConfig;

    return {
        name: 'noindex-blog-plugin',
        injectHtmlTags() {
            if (!noIndex) {
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
