import logo from './boomtubelogo.png';
import Navbar from './Navbar';
import Searchbar from './Searchbar';

const Header = () => {
    return (
        <header className="HeaderContainer">
            <img src={logo} alt="boomTubeLogo" className="HeaderLogo"></img>            
            <Navbar />            
            <Searchbar />            
        </header>
    )
}
export default Header