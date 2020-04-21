import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg justify-content-center navbar-dark ">
            <a className="navbar-brand" href="/">
                <FontAwesomeIcon icon={faSearch} color="#007bff" /> Search
            </a>
            <a className="navbar-brand" href="/favorites">
                <FontAwesomeIcon icon={faHeart} color="red" /> Favorites
            </a>
        </nav>
    );
};

export default Navbar;
