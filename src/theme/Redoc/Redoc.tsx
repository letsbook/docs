import clsx from 'clsx';
import 'docusaurus-theme-redoc/dist/global';
import useSpecData from 'docusaurus-theme-redoc/dist/theme/useSpecData';
import type { RedocProps } from 'docusaurus-theme-redoc/dist/types/common';
import { useSpecOptions } from 'docusaurus-theme-redoc/dist/utils/useSpecOptions';
import React from 'react';
import { RedocStandalone } from 'redoc';

import ServerRedoc from './ServerRedoc';

import './styles.css';

const isDevMode = process.env.NODE_ENV === 'development';

function Redoc(initProps: RedocProps): React.JSX.Element {
    // eslint-disable-next-line react/destructuring-assignment
    const specProps = useSpecData(initProps.id, initProps.spec);
    const finalProps = {
        ...specProps,
        ...initProps,
    };

    const {
        spec,
        className,
        isSpecFile = spec != null,
        url,
        themeId,
        optionsOverrides,
    } = finalProps;
    const { options } = useSpecOptions(themeId, optionsOverrides);

    const enableServerRendering = spec != null && (!isDevMode || isSpecFile);

    if (enableServerRendering) {
        return <ServerRedoc {...finalProps} spec={spec} />;
    }

    return (
        <div className={clsx(['redocusaurus', className])}>
            <RedocStandalone specUrl={url} options={options} />
        </div>
    );
}

export default Redoc;
