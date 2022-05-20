import SortButton, { SortButtonType } from './SortButton';
import styles from './sortBy.module.scss';

type SortByProps<T> = {
    classname: string;
    testId: string;
    sortButtons: SortButtonType<T>[];
};

function SortBy<T>({ classname, testId, sortButtons }: SortByProps<T>) {
    const sortByClassname = `sortBy__${classname}`;

    return (
        <section
            className={styles[sortByClassname]}
            data-testid={`sortBy__${testId}`}
        >
            {sortButtons &&
                sortButtons.map((sortButton, index) => (
                    <SortButton<T> key={index} sortButton={sortButton} />
                ))}
        </section>
    );
}

export default SortBy;
