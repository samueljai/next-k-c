import { useEffect, useState } from 'react';
import SubHeader from '../Common/SubHeader/SubHeader';
import FoodList from './components/FoodList/FoodList';
import { FoodItemProps } from './components/FoodListItem/FoodListItem';
import { SortButtonType } from '../Common/Sort/SortButton';
import { mockFoodListData } from '../../mocks/foodListDataMock';
import styles from './food.module.scss';
import SortBy from '../Common/Sort/SortBy';
import orderBy from 'lodash.orderby';

type SelectedFieldType = 'name' | 'origin' | 'starRating';
type SelectedOrderType = 'asc' | 'desc';
type SortFieldButtonsType = SortButtonType<SelectedFieldType>[];
type SortOrderButtonsType = SortButtonType<SelectedOrderType>[];

const Food = () => {
    const [foodList, setFoodList] = useState<FoodItemProps[] | null>(null);
    const [selectedField, setSelectedField] =
        useState<SelectedFieldType>('name');
    const [selectedOrder, setSelectedOrder] =
        useState<SelectedOrderType>('asc');

    useEffect(() => {
        const orderedFoodList = orderBy(foodList, selectedField, selectedOrder);
        setFoodList(orderedFoodList);
    }, [selectedField, selectedOrder]);

    useEffect(() => {
        setFoodList(mockFoodListData);
    }, []);

    const handleSortFieldChange = (field: SelectedFieldType) => {
        setSelectedField(field);
    };

    const handleSortOrderChange = (order: SelectedOrderType) => {
        setSelectedOrder(order);
    };

    const sortFieldButtons: SortFieldButtonsType = [
        {
            text: 'Name',
            currentlySelected: selectedField,
            sortValue: 'name',
            onClick: handleSortFieldChange,
        },
        {
            text: 'Origin',
            currentlySelected: selectedField,
            sortValue: 'origin',
            onClick: handleSortFieldChange,
        },
        {
            text: 'Rating',
            currentlySelected: selectedField,
            sortValue: 'starRating',
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

export default Food;
