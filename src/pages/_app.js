import '../styles/style.scss';
import { Provider } from 'mobx-react';
import store from '../store/store';

export default function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}
