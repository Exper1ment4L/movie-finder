import { useEffect, useRef } from 'react';
import { inject, observer } from 'mobx-react';
import 'mobx-react-lite/batchingForReactDom';
import Card from '../components/movie/Card';
import SearchInput from '../components/SearchInput';
import TypeSelect from '../components/TypeSelect';
import YearInput from '../components/YearInput';
const apiKey = 'apikey=fd427fdb';

const App = ({ store }) => {
    useEffect(() => {
        return () => {
            store.query = '';
            store.year = '';
            store.type = '';
            store.results = [];
        };
    }, []);

    const inputRef = useRef();

    useEffect(() => {
        const timer = setTimeout(() => {
            if (store.query === inputRef.current.value) {
                if (store.query.length > 2) {
                    fetch(`https://omdbapi.com/?${apiKey}&s=${store.query}&y=${store.year}&type=${store.type}`).then((res) => {
                        res.json()
                            .then((data) => {
                                store.setResults(data.Search);
                                store.results !== undefined
                                    ? store.results.map((item, index) => {
                                          fetch(`https://omdbapi.com/?${apiKey}&i=${item.imdbID}`)
                                              .then((res) => res.json())
                                              .then((data) => {
                                                  if (store.results && store.results.length > 0) {
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
                            .catch((err) => {
                                console.error('Error: ' + err);
                            });
                    });
                }
            }
        }, 300);

        if (store.query.length < 3) {
            store.setResults([]);
        }

        return () => {
            clearTimeout(timer);
        };
    }, [store.query, store.year, store.type]);

    const handleSearch = (e) => {
        store.query = e.target.value;
    };

    const handleYearChange = (e) => {
        if (e.target.value.length > 3) {
            store.year = e.target.value;
        } else {
            store.year = '';
        }
    };

    const handleTypeChange = (e) => {
        store.type = e.target.value;
    };

    return (
        <div className="container">
            <div className="row mb-5 mt-3">
                <div className="col-sm-12">
                    <SearchInput onChange={handleSearch} ref={inputRef} />
                </div>
                <div className="col">
                    <YearInput onChange={handleYearChange} />
                </div>
                <div className="col">
                    <TypeSelect onChange={handleTypeChange} />
                </div>
            </div>

            <div className="d-flex justify-content-center flex-row flex-wrap">
                {store.results && store.results.length > 0 ? (
                    store.results.map((item, index) => {
                        return <Card key={index} id={item.imdbID} poster={item.Poster} title={item.Title} year={item.Year} rating={item.imdbRating} />;
                    })
                ) : (
                    <div className="display-4 p-1 info w-100">Type something to search movies...</div>
                )}
            </div>
        </div>
    );
};

export default inject('store')(observer(App));
