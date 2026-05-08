import { ReactElement } from 'react';
import { Composition } from 'remotion';

import BubbleHeader from './BubbleHeader';

const FPS = 60;
const DURATION_SECONDS = 14;

const RemotionRoot = (): ReactElement => {
    return (
        <>
            <Composition
                id="BubbleHeader"
                component={BubbleHeader}
                durationInFrames={FPS * DURATION_SECONDS}
                fps={FPS}
                width={1920}
                height={720}
            />
        </>
    );
};

export default RemotionRoot;
