import 'docusaurus-theme-redoc/dist/global';
import type { ServerStylesProps } from 'docusaurus-theme-redoc/dist/theme/Redoc/ServerStyles';
import React from 'react';

/**
 * Client-side stand-in for ServerStyles. The theme's webpack config swaps this
 * module for the real ServerStyles on the server build, which renders <style>
 * children inside the div. With dangerouslySetInnerHTML + the suppression
 * flag, React skips comparing those children during hydration instead of
 * reporting a mismatch (error #418). The server-rendered <style> children
 * only matter for the first paint: styled-components injects all rules into
 * <head> during the hydration render, before React clears this div.
 * @see https://github.com/facebook/react/issues/10923#issuecomment-338715787
 */
export function ServerStyles(_props: ServerStylesProps) {
    return (
        <div
            className="redocusaurus-styles"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{ __html: '' }}
        />
    );
}
