import { Children, ReactNode, isValidElement } from 'react';

const extractTextContent = (children: ReactNode): ReactNode => {
    const array = Children.toArray(children);

    // If there's exactly one child, and it's a <p>, unwrap its content
    if (array.length === 1) {
        const onlyChild = array[0];
        if (
            isValidElement(onlyChild) &&
            onlyChild.type === 'p' &&
            typeof onlyChild.props === 'object' &&
            'children' in onlyChild.props
        ) {
            return onlyChild.props.children as ReactNode;
        }
    }

    return children;
};

export default extractTextContent;
