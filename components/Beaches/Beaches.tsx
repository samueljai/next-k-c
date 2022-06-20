import { observer } from 'mobx-react-lite';
import { useRootStore } from '../../providers/RootStoreProvider';
import { SortFieldType, SortOrderType } from '../../stores/BeachStore';
import SubHeader from '../Common/SubHeader/SubHeader';
import SortButtons from '../Common/Sort/SortButtons';
import { SortButtonType } from '../Common/Sort/SortButton';
import BeachList from './Components/BeachList/BeachList';
import styles from './beaches.module.scss';

type SortFieldButtonsType = SortButtonType<SortFieldType>[];
type SortOrderButtonsType = SortButtonType<SortOrderType>[];

const Beaches = () => {
    const {
        beachStore: {
            beachList,
            sortField,
            sortOrder,
            sortByField,
            sortByOrder,
        },
    } = useRootStore();

    const handleSortFieldChange = (sortValue: SortFieldType) => {
        sortByField(sortValue);
    };

    const handleSortOrderChange = (sortValue: SortOrderType) => {
        sortByOrder(sortValue);
    };

    const sortFieldButtons: SortFieldButtonsType = [
        {
            text: 'Rating',
            currentlySelected: sortField,
            sortValue: 'index',
            onClick: handleSortFieldChange,
            ariaLabel: 'Sort By Rating',
        },
        {
            text: 'Name',
            currentlySelected: sortField,
            sortValue: 'name',
            onClick: handleSortFieldChange,
            ariaLabel: 'Sort By Name',
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
        <article className={styles.beaches}>
            <SubHeader title="Beaches" />
            <section
                className={styles.beaches__content}
                aria-label="Beach List"
            >
                <form
                    className={styles.beaches__sortBy}
                    aria-label="Sort Beach List"
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
                <BeachList beachList={beachList} />
            </section>
        </article>
    );
};

export default observer(Beaches);
