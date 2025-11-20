const isExternalHref = (href: string) => {
    // Only open in a new tab for absolute http(s) links that are outside the current domain.
    // Relative paths like "/docs/..." or "#section" are internal.
    if (!/^https?:\/\//i.test(href)) return false;

    // On the client, compare hostnames.
    try {
        if (typeof window !== 'undefined') {
            const url = new URL(href);
            return url.hostname !== window.location.hostname;
        }
    } catch {
        // If URL parsing fails, be safe and treat as external.
        return true;
    }

    // During SSR we cannot know the current domain. Avoid hydration mismatches by
    // not forcing a new tab on the server. Let the client decide after hydration.
    return false;
};

export default isExternalHref;
