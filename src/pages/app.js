import { useEffect, Fragment } from 'react';
import { inject, observer } from 'mobx-react';
import 'mobx-react-lite/batchingForReactDom';
import Card from '../components/movie/Card';
import Navbar from '../components/Navbar';
import SearchInput from '../components/SearchInput';
import TypeSelect from '../components/TypeSelect';
import YearInput from '../components/YearInput';

const App = ({ store }) => {
    useEffect(() => {
        store.setResults([]);
    }, [store.query.length < 2]);

    useEffect(() => {
        fetch('http://omdbapi.com/?apikey=fd427fdb&s=' + store.query + '&y=' + store.year + '&type=' + store.type).then((res) =>
            res
                .json()
                .then((data) => {
                    store.setResults(data.Search);
                    store.results !== undefined
                        ? store.results.map((item, index) => {
                              fetch('http://omdbapi.com/?apikey=fd427fdb&i=' + item.imdbID)
                                  .then((res) => res.json())
                                  .then((data) => {
                                      if (store.results !== undefined && store.results) {
                                          if (data.imdbRating !== 'N/A' && store.results[index]) {
                                              store.results[index].imdbRating = data.imdbRating;
                                          }
                                          if (data.imdbRating === 'N/A' && store.results[index]) {
                                              store.results[index].imdbRating = '?';
                                          }
                                      }
                                      store.setResults(store.results);
                                  });
                          })
                        : null;
                })
                .catch((err) => console.log(err))
        );
    }, [store.query, store.year, store.type]);

    const handleSearch = (e) => {
        store.query = e.target.value;
    };

    const handleYearChange = (e) => {
        store.year = e.target.value;
    };

    const handleTypeChange = (e) => {
        store.type = e.target.value;
    };

    return (
        <Fragment>
            <Navbar />
            <div className="container">
                <div className="row mb-5 mt-3">
                    <div className="col-md-7">
                        <SearchInput onChange={handleSearch} />
                    </div>
                    <div className="col-md-3">
                        <YearInput onChange={handleYearChange} />
                    </div>
                    <div className="col-md-2">
                        <TypeSelect onChange={handleTypeChange} />
                    </div>
                </div>

                <div className="d-flex justify-content-center flex-row flex-wrap">
                    {store.results !== undefined ? (
                        store.results.map((item, index) => {
                            return <Card key={index} id={item.imdbID} poster={item.Poster} title={item.Title} year={item.Year} rating={item.imdbRating} />;
                        })
                    ) : (
                        <div className="display-4 p-1 info">Type something to seach movies...</div>
                    )}
                </div>
            </div>
        </Fragment>
    );
};

export default inject('store')(observer(App));
