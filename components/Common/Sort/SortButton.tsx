import classNames from 'classnames';
import Button from '../Button/Button';
import styles from './sortButton.module.scss';

export type SortButtonType<T> = {
    text: string;
    currentlySelected: T;
    sortValue: T;
    onClick: (sortValue: T) => void;
};

type SortButtonProps<T> = {
    sortButton: SortButtonType<T>;
};

function SortButton<T>({ sortButton }: SortButtonProps<T>) {
    const { currentlySelected, text, sortValue, onClick } = sortButton;

    const isSelectedButton = sortValue === currentlySelected;
    const sortButtonClassname = classNames(
        styles.sortButton,
        isSelectedButton && styles['sortButton--selected'],
        !isSelectedButton && styles['sortButton--notSelected']
    );

    const handleClick = () => {
        !isSelectedButton && onClick(sortValue);
    };

    return (
        <Button
            dataTestId={`sortButton-${sortValue}`}
            className={sortButtonClassname}
            buttonText={text}
            onClick={handleClick}
        />
    );
}

export default SortButton;
