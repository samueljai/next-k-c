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
        },
        {
            text: 'Name',
            currentlySelected: sortField,
            sortValue: 'name',
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
        <article className={styles.beaches}>
            <SubHeader title="Beaches" />
            <section className={styles.beaches__content}>
                <div className={styles.beaches__sortBy}>
                    <SortButtons
                        classname="field"
                        testId="field"
                        sortButtons={sortFieldButtons}
                    />
                    <SortButtons
                        classname="order"
                        testId="order"
                        sortButtons={sortOrderButtons}
                    />
                </div>
                <BeachList beachList={beachList} />
            </section>
        </article>
    );
};

export default observer(Beaches);
