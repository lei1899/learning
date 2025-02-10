import logo from '../../../logo.svg';
import { Link } from "react-router-dom";
import { Container, DesktopNavBar, DesktopMenuItem, Logo, DesktopMenu } from "./navBar.style";

function NavBar() {
    return (
        <Container>
            <DesktopNavBar>
                <Link to="/">
                    <Logo src={logo} />
                </Link>
                <DesktopMenu>
                    <DesktopMenuItem to="/news">Ivan</DesktopMenuItem>
                    <DesktopMenuItem to="/news">Kids</DesktopMenuItem>
                </DesktopMenu>
            </DesktopNavBar>
        </Container>
    );
}

export default NavBar;