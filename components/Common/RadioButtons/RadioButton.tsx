import classNames from 'classnames';
import styles from './radioButton.module.scss';

type RadioButtonProps = {
    buttonGroupName: string;
    onValueChange: React.ChangeEventHandler;
    label: string;
    isChecked: boolean;
    ariaLabel: string;
    dataTestId: string;
    className?: string;
    style?: object;
};

function RadioButton({
    buttonGroupName,
    onValueChange,
    label,
    isChecked,
    ariaLabel,
    dataTestId,
    className,
    style,
}: RadioButtonProps) {
    const labelClassnames = classNames(className, styles.radioButton__label);

    return (
        <li className={styles.radioButton}>
            <input
                id={label}
                className={styles.radioButton__input}
                type="radio"
                name={buttonGroupName}
                checked={isChecked}
                onChange={onValueChange}
                aria-label={ariaLabel}
            />
            <label
                htmlFor={label}
                className={labelClassnames}
                data-testid={dataTestId}
                style={style}
                aria-hidden="true"
            >
                {label}
            </label>
        </li>
    );
}

export default RadioButton;
