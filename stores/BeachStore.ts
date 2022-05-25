import { makeAutoObservable } from 'mobx';
import orderBy from 'lodash.orderby';
import { BeachItemType } from '../components/Beaches/Components/BeachListItem/BeachListItem';

type BeachListType = BeachItemType[] | null;
export type SortFieldType = 'name' | 'index';
export type SortOrderType = 'asc' | 'desc';
export type BeachHydration = {
    beachList: BeachListType;
} | null;

class BeachStore {
    _beachList: BeachListType = null;
    sortField: SortFieldType = 'index';
    sortOrder: SortOrderType = 'asc';

    constructor() {
        makeAutoObservable(this);
    }

    hydrate = (data?: BeachHydration) => {
        if (data) {
            this._beachList = data.beachList;
        }
    };

    get beachList() {
        const orderedBeachList = orderBy(
            this._beachList,
            this.sortField,
            this.sortOrder
        );

        return orderedBeachList;
    }

    sortByField = (sortField: SortFieldType) => {
        this.sortField = sortField;
    };

    sortByOrder = (sortOrder: SortOrderType) => {
        this.sortOrder = sortOrder;
    };
}

export default BeachStore;
