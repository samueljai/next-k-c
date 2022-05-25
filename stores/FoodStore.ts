import { makeAutoObservable } from 'mobx';
import orderBy from 'lodash.orderby';
import { FoodItemProps } from '../components/Food/components/FoodListItem/FoodListItem';

type FoodListType = FoodItemProps[] | null;
export type SortFieldType = 'name' | 'origin' | 'starRating';
export type SortOrderType = 'asc' | 'desc';
export type FoodHydration = {
    foodList: FoodListType;
};

class FoodStore {
    _foodList: FoodListType = null;
    sortField: SortFieldType = 'name';
    sortOrder: SortOrderType = 'asc';

    constructor() {
        makeAutoObservable(this);
    }

    hydrate(data?: FoodHydration) {
        if (data) {
            this._foodList = data.foodList;
        }
    }

    get foodList() {
        const orderedFoodList = orderBy(
            this._foodList,
            this.sortField,
            this.sortOrder
        );

        return orderedFoodList;
    }

    sortByField = (sortField: SortFieldType) => {
        this.sortField = sortField;
    };

    sortByOrder = (sortOrder: SortOrderType) => {
        this.sortOrder = sortOrder;
    };
}

export default FoodStore;
