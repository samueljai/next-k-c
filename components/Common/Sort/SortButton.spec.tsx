import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import SortButton from './SortButton';

describe('SortButton', () => {
    it('renders a button with the provided text prop', () => {
        const handleClick = jest.fn();
        const props = {
            sortButton: {
                text: 'Origin',
                currentlySelected: 'name',
                sortValue: 'origin',
                onClick: handleClick,
            },
        };

        render(<SortButton {...props} />);

        const sortButton = screen.getByRole('button');
        expect(sortButton).toHaveTextContent(props.sortButton.text);
    });
    it('renders a button without the "sortButton--selected" classname for a non selected button', () => {
        const handleClick = jest.fn();
        const props = {
            sortButton: {
                text: 'Origin',
                currentlySelected: 'name',
                sortValue: 'origin',
                onClick: handleClick,
            },
        };

        render(<SortButton {...props} />);

        const sortButton = screen.getByRole('button');
        expect(sortButton).not.toHaveClass('sortButton--selected');
    });
    it('renders a button with the "sortButton--selected" classname for a selected button', () => {
        const handleClick = jest.fn();
        const props = {
            sortButton: {
                text: 'Name',
                currentlySelected: 'name',
                sortValue: 'name',
                onClick: handleClick,
            },
        };

        render(<SortButton {...props} />);

        const sortButton = screen.getByRole('button');
        expect(sortButton).toHaveClass('sortButton--selected');
    });
    it('calls the provided onClick prop function when clicking a non selected button', () => {
        const handleClick = jest.fn();
        const props = {
            sortButton: {
                text: 'Origin',
                currentlySelected: 'name',
                sortValue: 'origin',
                onClick: handleClick,
            },
        };

        render(<SortButton {...props} />);

        const sortButton = screen.getByRole('button');
        fireEvent.click(sortButton);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
    it('doesnt call the provided onClick prop when clicking an already selected button', () => {
        const handleClick = jest.fn();
        const props = {
            sortButton: {
                text: 'Name',
                currentlySelected: 'name',
                sortValue: 'name',
                onClick: handleClick,
            },
        };

        render(<SortButton {...props} />);

        const sortButton = screen.getByRole('button');
        fireEvent.click(sortButton);
        expect(handleClick).toHaveBeenCalledTimes(0);
    });
});
