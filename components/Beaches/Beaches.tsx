import { useEffect, useState } from 'react';
import SubHeader from '../Common/SubHeader/SubHeader';
import BeachList from './Components/BeachList/BeachList';
import { BeachItemProps } from './Components/BeachListItem/BeachListItem';
import { SortButtonType } from '../Common/Sort/SortButton';
import SortBy from '../Common/Sort/SortBy';
import orderBy from 'lodash.orderby';
import styles from './beaches.module.scss';

type BeachProps = {
    beachList: BeachItemProps[] | null;
};
type SelectedFieldType = 'name' | 'index';
type SelectedOrderType = 'asc' | 'desc';
type SortFieldButtonsType = SortButtonType<SelectedFieldType>[];
type SortOrderButtonsType = SortButtonType<SelectedOrderType>[];

const Beaches = ({ beachList }: BeachProps) => {
    const [sortedBeachList, setSortedBeachList] = useState<
        BeachItemProps[] | null
    >(null);
    const [selectedField, setSelectedField] =
        useState<SelectedFieldType>('index');
    const [selectedOrder, setSelectedOrder] =
        useState<SelectedOrderType>('asc');

    useEffect(() => {
        const orderedFoodList = orderBy(
            sortedBeachList,
            selectedField,
            selectedOrder
        );
        setSortedBeachList(orderedFoodList);
    }, [selectedField, selectedOrder]);

    useEffect(() => {
        setSortedBeachList(beachList);
    }, []);

    const handleSortFieldChange = (field: SelectedFieldType) => {
        setSelectedField(field);
    };

    const handleSortOrderChange = (order: SelectedOrderType) => {
        setSelectedOrder(order);
    };

    const sortFieldButtons: SortFieldButtonsType = [
        {
            text: 'Rating',
            currentlySelected: selectedField,
            sortValue: 'index',
            onClick: handleSortFieldChange,
        },
        {
            text: 'Name',
            currentlySelected: selectedField,
            sortValue: 'name',
            onClick: handleSortFieldChange,
        },
    ];

    const sortOrderButtons: SortOrderButtonsType = [
        {
            text: 'Asc',
            currentlySelected: selectedOrder,
            sortValue: 'asc',
            onClick: handleSortOrderChange,
        },
        {
            text: 'Desc',
            currentlySelected: selectedOrder,
            sortValue: 'desc',
            onClick: handleSortOrderChange,
        },
    ];

    return (
        <article className={styles.beaches}>
            <SubHeader title="Beaches" />
            <section className={styles.beaches__content}>
                <div className={styles.beaches__sortBy}>
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
                <BeachList beachList={sortedBeachList} />
            </section>
        </article>
    );
};

export default Beaches;
