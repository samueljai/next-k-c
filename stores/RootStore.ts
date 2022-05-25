import { makeAutoObservable } from 'mobx';
import { enableStaticRendering } from 'mobx-react-lite';
import FoodStore, { FoodHydration } from './FoodStore';
import BeachStore from './BeachStore';

enableStaticRendering(typeof window === 'undefined');

export type RootStoreHydrationType = {
    foodStore?: FoodHydration;
    beachStore?: any;
};

class RootStore {
    foodStore: FoodStore;
    beachStore: BeachStore;

    constructor() {
        this.foodStore = new FoodStore();
        this.beachStore = new BeachStore();
        makeAutoObservable(this);
    }

    hydrate(data: RootStoreHydrationType) {
        if (data.foodStore) {
            this.foodStore.hydrate(data.foodStore);
        }
    }
}

export default RootStore;
