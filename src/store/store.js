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

    @action clearFavorites() {
        this.favorites = [];
    }

    @action resetTerms() {
        this.query = '';
        this.year = '';
        this.type = '';
    }
}

const store = new MovieStore();
export default store;
