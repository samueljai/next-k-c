import RadioButton from '../RadioButtons/RadioButton';

export type SortButtonType<T> = {
    text: string;
    currentlySelected: T;
    sortValue: T;
    onClick: (sortValue: T) => void;
    ariaLabel: string;
};

type SortButtonProps<T> = {
    sortButton: SortButtonType<T>;
    groupName: string;
};

function SortButton<T>({ sortButton, groupName }: SortButtonProps<T>) {
    const { currentlySelected, text, sortValue, onClick, ariaLabel } =
        sortButton;

    const isSelectedButton = sortValue === currentlySelected;

    const handleClick = () => {
        !isSelectedButton && onClick(sortValue);
    };

    return (
        <RadioButton
            buttonGroupName={groupName}
            onValueChange={handleClick}
            label={text}
            isChecked={isSelectedButton}
            dataTestId={`sortButton-${sortValue}`}
            ariaLabel={ariaLabel}
        />
    );
}

export default SortButton;
