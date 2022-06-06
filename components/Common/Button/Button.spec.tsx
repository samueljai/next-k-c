import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
    const handleClick = jest.fn();
    const buttonProps = {
        buttonText: 'Click Me',
        className: `testClassname`,
        dataTestId: `testDataId`,
        onClick: handleClick,
    };

    it('renders a button element with the correct button text prop', () => {
        render(<Button {...buttonProps} />);
        const button = screen.getByRole('button');

        expect(button).toHaveTextContent(buttonProps.buttonText);
    });
    it('renders a button element with the correct testId prop', () => {
        render(<Button {...buttonProps} />);
        const button = screen.getByRole('button');

        expect(button).toHaveAttribute('data-testid', buttonProps.dataTestId);
    });
    it('renders a button element with the correct classname prop', () => {
        render(<Button {...buttonProps} />);
        const button = screen.getByRole('button');

        expect(button).toHaveClass(buttonProps.className);
    });
    it('renders a button element and calls the onClick prop when clicked', () => {
        render(<Button {...buttonProps} />);
        const button = screen.getByRole('button');

        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
