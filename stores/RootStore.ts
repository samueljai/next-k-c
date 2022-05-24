import { makeAutoObservable } from 'mobx';
import FoodStore from './FoodStore';
import BeachStore from './BeachStore';

export type RootStoreHydrationType = {};

class RootStore {
    foodStore: FoodStore;
    beachStore: BeachStore;

    constructor() {
        this.foodStore = new FoodStore();
        this.beachStore = new BeachStore();
        makeAutoObservable(this);
    }

    hydrate(data: RootStoreHydrationType) {}
}

export default RootStore;
