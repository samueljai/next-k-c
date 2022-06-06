import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import SortBy from './SortBy';

describe('SortBy', () => {
    const handleClick = jest.fn();
    it('renders a sortBy section with the given testId and classname prop', () => {
        const sortFieldButtons = [
            {
                text: 'Origin',
                currentlySelected: 'origin',
                sortValue: 'origin',
                onClick: handleClick,
            },
        ];
        const sortByProps = {
            classname: 'field',
            testId: 'field',
            sortButtons: sortFieldButtons,
        };

        render(<SortBy {...sortByProps} />);
        const sortBy = screen.getByTestId(
            new RegExp(`sortBy__${sortByProps.testId}`, 'i')
        );
        expect(sortBy).toBeInTheDocument();
        expect(sortBy).toHaveClass(`sortBy__${sortByProps.classname}`);
    });

    it('renders a sortBy section with the correct amount of sortButtons provided', () => {
        const sortFieldButtons = [
            {
                text: 'Origin',
                currentlySelected: 'origin',
                sortValue: 'origin',
                onClick: handleClick,
            },
            {
                text: 'Name',
                currentlySelected: 'origin',
                sortValue: 'Name',
                onClick: handleClick,
            },
        ];
        const sortByProps = {
            classname: 'field',
            testId: 'field',
            sortButtons: sortFieldButtons,
        };

        render(<SortBy {...sortByProps} />);
        const sortButtons = screen.queryAllByRole('button');
        expect(sortButtons.length).toBe(sortFieldButtons.length);
    });
});
