import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import RadioButton from './RadioButton';

describe('Radio Button', () => {
    const handleChange = jest.fn();
    const radioButtonProps = {
        buttonGroupName: 'testGroupName',
        onValueChange: handleChange,
        label: 'Test Label',
        isChecked: true,
        dataTestId: `testDataId`,
    };
    it('renders a radio button with the correct label prop', () => {
        render(<RadioButton {...radioButtonProps} />);
        const radioButton = screen.getByLabelText(radioButtonProps.label);

        expect(radioButton).toBeInTheDocument();
    });
    it('renders a radio button with a checked status', () => {
        render(<RadioButton {...radioButtonProps} />);
        const radioButton = screen.getByLabelText(radioButtonProps.label);

        expect(radioButton).toBeChecked();
    });
    it('renders a radio button with an unchecked status', () => {
        const uncheckedRadioButtonProps = {
            buttonGroupName: 'testGroupName',
            onValueChange: handleChange,
            label: 'Test Label',
            isChecked: false,
            dataTestId: `testDataId`,
        };
        render(<RadioButton {...uncheckedRadioButtonProps} />);
        const radioButton = screen.getByLabelText(
            uncheckedRadioButtonProps.label
        );

        expect(radioButton).not.toBeChecked();
    });
    it('renders a radio button with the correct testId prop', () => {
        render(<RadioButton {...radioButtonProps} />);
        const radioButton = screen.getByText(radioButtonProps.label);

        expect(radioButton).toHaveAttribute(
            'data-testid',
            radioButtonProps.dataTestId
        );
    });
    it('renders a radio button with the correct name prop', () => {
        render(<RadioButton {...radioButtonProps} />);
        const radioButton = screen.getByLabelText(radioButtonProps.label);

        expect(radioButton).toHaveAttribute(
            'name',
            radioButtonProps.buttonGroupName
        );
    });
    it('renders a radio button and calls the onValueChange prop function when clicked', () => {
        const uncheckedRadioButtonProps = {
            buttonGroupName: 'testGroupName',
            onValueChange: handleChange,
            label: 'Test Label',
            isChecked: false,
            dataTestId: `testDataId`,
        };
        render(<RadioButton {...uncheckedRadioButtonProps} />);
        const radioButton = screen.getByLabelText(
            uncheckedRadioButtonProps.label
        );

        fireEvent.click(radioButton);
        expect(handleChange).toHaveBeenCalledTimes(1);
    });
});
