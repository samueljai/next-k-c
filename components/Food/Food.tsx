import { observer } from 'mobx-react-lite';
import { useRootStore } from '../../providers/RootStoreProvider';
import { SortFieldType, SortOrderType } from '../../stores/FoodStore';
import SubHeader from '../Common/SubHeader/SubHeader';
import SortButtons from '../Common/Sort/SortButtons';
import { SortButtonType } from '../Common/Sort/SortButton';
import FoodList from './components/FoodList/FoodList';
import styles from './food.module.scss';

type SortFieldButtonsType = SortButtonType<SortFieldType>[];
type SortOrderButtonsType = SortButtonType<SortOrderType>[];

const Food = () => {
    const {
        foodStore: { foodList, sortField, sortOrder, sortByField, sortByOrder },
    } = useRootStore();

    const handleSortFieldChange = (sortValue: SortFieldType) => {
        sortByField(sortValue);
    };

    const handleSortOrderChange = (sortValue: SortOrderType) => {
        sortByOrder(sortValue);
    };

    const sortFieldButtons: SortFieldButtonsType = [
        {
            text: 'Name',
            currentlySelected: sortField,
            sortValue: 'name',
            onClick: handleSortFieldChange,
            ariaLabel: 'Sort By Name',
        },
        {
            text: 'Origin',
            currentlySelected: sortField,
            sortValue: 'origin',
            onClick: handleSortFieldChange,
            ariaLabel: 'Sort By Origin',
        },
        {
            text: 'Rating',
            currentlySelected: sortField,
            sortValue: 'starRating',
            onClick: handleSortFieldChange,
            ariaLabel: 'Sort By Rating',
        },
    ];

    const sortOrderButtons: SortOrderButtonsType = [
        {
            text: 'Asc',
            currentlySelected: sortOrder,
            sortValue: 'asc',
            onClick: handleSortOrderChange,
            ariaLabel: 'Sort By Ascending Order',
        },
        {
            text: 'Desc',
            currentlySelected: sortOrder,
            sortValue: 'desc',
            onClick: handleSortOrderChange,
            ariaLabel: 'Sort By Descending Order',
        },
    ];

    return (
        <article className={styles.food}>
            <SubHeader title="Food" />
            <section className={styles.food__content} aria-label="Food List">
                <form
                    className={styles.food__sortBy}
                    aria-label="Sort Food List"
                >
                    <SortButtons
                        classname="field"
                        testId="field"
                        sortButtons={sortFieldButtons}
                        ariaLabel="Sort By Field"
                    />
                    <SortButtons
                        classname="order"
                        testId="order"
                        sortButtons={sortOrderButtons}
                        ariaLabel="Sort By Order"
                    />
                </form>
                <FoodList foodList={foodList} />
            </section>
        </article>
    );
};

export default observer(Food);
