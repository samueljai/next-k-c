import { observer } from 'mobx-react-lite';
import { useRootStore } from '../../providers/RootStoreProvider';
import { SortFieldType, SortOrderType } from '../../stores/FoodStore';
import SubHeader from '../Common/SubHeader/SubHeader';
import SortBy from '../Common/Sort/SortBy';
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
        },
        {
            text: 'Origin',
            currentlySelected: sortField,
            sortValue: 'origin',
            onClick: handleSortFieldChange,
        },
        {
            text: 'Rating',
            currentlySelected: sortField,
            sortValue: 'starRating',
            onClick: handleSortFieldChange,
        },
    ];

    const sortOrderButtons: SortOrderButtonsType = [
        {
            text: 'Asc',
            currentlySelected: sortOrder,
            sortValue: 'asc',
            onClick: handleSortOrderChange,
        },
        {
            text: 'Desc',
            currentlySelected: sortOrder,
            sortValue: 'desc',
            onClick: handleSortOrderChange,
        },
    ];

    return (
        <article className={styles.food}>
            <SubHeader title="Food" />
            <section className={styles.food__content}>
                <div className={styles.food__sortBy}>
                    <SortBy
                        classname="field"
                        testId="field"
                        sortButtons={sortFieldButtons}
                    />
                    <SortBy
                        classname="order"
                        testId="order"
                        sortButtons={sortOrderButtons}
                    />
                </div>
                <FoodList foodList={foodList} />
            </section>
        </article>
    );
};

export default observer(Food);
