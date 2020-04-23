import { observable, action } from 'mobx';

export class MovieStore {
    @observable results = [];
    @observable favorites = [];
    @observable query = '';
    @observable year = '';
    @observable type = '';

    @action setResults(results) {
        this.results = results;
    }

    @action setFavorites(favorites) {
        this.favorites = favorites;
    }
}

const store = new MovieStore();
export default store;
