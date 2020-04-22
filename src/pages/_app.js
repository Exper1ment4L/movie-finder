import '../styles/style.scss';
import { Provider } from 'mobx-react';
import store from '../store/store';
import Navbar from '../components/Navbar';

export default function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Navbar />
            <Component {...pageProps} />
        </Provider>
    );
}
