import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart } from '@fortawesome/free-solid-svg-icons';
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
        </nav>
    );
};

export default Navbar;
