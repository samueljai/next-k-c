import { makeAutoObservable } from 'mobx';

class FoodStore {
    constructor() {
        makeAutoObservable(this);
    }
}

export default FoodStore;
