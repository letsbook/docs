import useBrokenLinks, { BrokenLinks } from '@docusaurus/useBrokenLinks';
import clsx from 'clsx';
import 'docusaurus-theme-redoc/dist/global';
import type { ServerRedocProps } from 'docusaurus-theme-redoc/dist/types/common';
import { useSpec } from 'docusaurus-theme-redoc/dist/utils/useSpec';
import React from 'react';
import { IMenuItem, Redoc as RedocComponent } from 'redoc';

import { ServerStyles } from './Styles';

import './styles.css';

function ServerRedoc(props: ServerRedocProps): React.JSX.Element {
    const { className, optionsOverrides, ...specProps } = props;
    const { store, darkThemeOptions, lightThemeOptions, hasLogo } = useSpec(
        specProps,
        optionsOverrides
    );

    const collector = useBrokenLinks();
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    collectMenuItemAnchors(collector, store.menu.items);

    return (
        <>
            <ServerStyles
                specProps={specProps}
                lightThemeOptions={lightThemeOptions}
                darkThemeOptions={darkThemeOptions}
            />
            <div
                className={clsx([
                    'redocusaurus',
                    hasLogo && 'redocusaurus-has-logo',
                    className,
                ])}
            >
                <RedocComponent store={store} />
            </div>
        </>
    );
}

function collectMenuItemAnchors(
    collector: BrokenLinks,
    menuItems: IMenuItem[],
    parentAnchor = ''
) {
    menuItems.forEach((menuItem) => {
        // Register anchor for menu item
        collector.collectAnchor(menuItem.id);

        // If this is a child menu item, register a shortened anchor as well
        // This may not be necessary in all cases, but definitely needed for
        // menuItems of the form `tag/<Tag ID>/operation/<Operation ID>`.
        if (parentAnchor != '') {
            const childAnchor = menuItem.id.replace(`${parentAnchor}/`, '');
            collector.collectAnchor(childAnchor);
        }

        if (menuItem.items.length > 0) {
            collectMenuItemAnchors(collector, menuItem.items, menuItem.id);
        }
    });
}

export default ServerRedoc;
