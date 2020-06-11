import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faStar} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg justify-content-center navbar-dark ">
            <Link href="/">
                <a className="navbar-brand">
                    <FontAwesomeIcon icon={faSearch} color="#007bff" /> Search
                </a>
            </Link>
            <Link href="/favorites">
                <a className="navbar-brand">
                    <FontAwesomeIcon icon={faHeart} color="red" /> Favorites
                </a>
            </Link>
                <a href='https://github.com/Exper1ment4L/movie-finder' className="navbar-brand" target='_blank'>
                    <FontAwesomeIcon icon={faStar} color="orange" /> Github
                </a>
        </nav>
    );
};

export default Navbar;
