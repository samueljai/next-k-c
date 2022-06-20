import classNames from 'classnames';
import SortButton, { SortButtonType } from './SortButton';
import styles from './sortButtons.module.scss';

type SortButtonsProps<T> = {
    classname: string;
    testId: string;
    sortButtons: SortButtonType<T>[];
    ariaLabel: string;
};

function SortButtons<T>({
    classname,
    testId,
    sortButtons,
    ariaLabel,
}: SortButtonsProps<T>) {
    const sortButtonsFieldClassname = `sortButtons__${classname}`;
    const sortButtonsClassname = classNames(
        styles.sortButtons,
        styles[sortButtonsFieldClassname]
    );

    return (
        <fieldset
            className={sortButtonsClassname}
            data-testid={`sortButtons__${testId}`}
            role="radiogroup"
            aria-label={ariaLabel}
        >
            <menu>
                {sortButtons &&
                    sortButtons.map((sortButton, index) => (
                        <SortButton<T>
                            key={index}
                            sortButton={sortButton}
                            groupName={testId}
                        />
                    ))}
            </menu>
        </fieldset>
    );
}

export default SortButtons;
