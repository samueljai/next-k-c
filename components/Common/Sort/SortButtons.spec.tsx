import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import SortButtons from './SortButtons';

describe('SortButtons', () => {
    const handleClick = jest.fn();
    it('renders a sortButtons section with the given testId and classname prop', () => {
        const sortFieldButtons = [
            {
                text: 'Origin',
                currentlySelected: 'origin',
                sortValue: 'origin',
                onClick: handleClick,
            },
        ];
        const sortButtonsProps = {
            classname: 'field',
            testId: 'field',
            sortButtons: sortFieldButtons,
        };

        render(<SortButtons {...sortButtonsProps} />);
        const sortButtons = screen.getByTestId(
            new RegExp(`sortButtons__${sortButtonsProps.testId}`, 'i')
        );
        expect(sortButtons).toBeInTheDocument();
        expect(sortButtons).toHaveClass(
            `sortButtons__${sortButtonsProps.classname}`
        );
    });

    it('renders a sortButtons section with the correct amount of sortButtons provided', () => {
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
        const sortButtonsProps = {
            classname: 'field',
            testId: 'field',
            sortButtons: sortFieldButtons,
        };

        render(<SortButtons {...sortButtonsProps} />);
        const sortButtons = screen.queryAllByRole('radio');
        expect(sortButtons.length).toBe(sortFieldButtons.length);
    });
});
