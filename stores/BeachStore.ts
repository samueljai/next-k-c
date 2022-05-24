import { makeAutoObservable } from 'mobx';

class BeachStore {
    constructor() {
        makeAutoObservable(this);
    }
}

export default BeachStore;
