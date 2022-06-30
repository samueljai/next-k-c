import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import SkipLink from './SkipLink';

describe('SkipLink', () => {
    it('renders a focusable button with the passed in text', () => {
        const skipLinkProps = {
            targetId: 'main',
            linkText: 'Skip to Content',
        };

        render(<SkipLink {...skipLinkProps} />);
        const skipLinkButton = screen.getByText(skipLinkProps.linkText);
        expect(skipLinkButton).toBeInTheDocument();
        expect(skipLinkButton).toHaveAttribute(
            'href',
            `#${skipLinkProps.targetId}`
        );

        skipLinkButton.focus();
        expect(skipLinkButton).toHaveFocus();
    });
});
