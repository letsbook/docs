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
                defaultProps={{ bubbleCount: 16 }}
            />
            <Composition
                id="BubbleHeaderSmall"
                component={BubbleHeader}
                durationInFrames={FPS * DURATION_SECONDS}
                fps={FPS}
                width={320}
                height={80}
                defaultProps={{
                    bubbleCount: 6,
                    sizeMultiplier: 0.5,
                    opacityBase: 0.4,
                    opacityRange: 0.5,
                }}
            />
        </>
    );
};

export default RemotionRoot;
