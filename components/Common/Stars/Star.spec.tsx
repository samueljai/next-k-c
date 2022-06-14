import { render, screen } from '@testing-library/react';
import Star from './Star';

describe('star rating', () => {
    it('renders a star image', () => {
        render(<Star />);

        const star = screen.queryAllByAltText('star rating');
        expect(star.length).toBe(1);
    });
});
