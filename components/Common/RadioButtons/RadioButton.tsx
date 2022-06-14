import classNames from 'classnames';
import styles from './radioButton.module.scss';

type RadioButtonProps = {
    buttonGroupName: string;
    onValueChange: React.ChangeEventHandler;
    label: string;
    isChecked: boolean;
    dataTestId: string;
    className?: string;
    style?: object;
};

function RadioButton({
    buttonGroupName,
    onValueChange,
    label,
    isChecked,
    className,
    dataTestId,
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
            />
            <label
                htmlFor={label}
                className={labelClassnames}
                data-testid={dataTestId}
                style={style}
            >
                {label}
            </label>
        </li>
    );
}

export default RadioButton;
