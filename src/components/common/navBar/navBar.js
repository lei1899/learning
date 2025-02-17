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
                    <DesktopMenuItem to="/listenList/24sZYp8CXvrxXb91q8xtfp">Ivan</DesktopMenuItem>
                    <DesktopMenuItem to="/listenList/50qHiMEtf8Zc8AwK1YvmNY">Dairy</DesktopMenuItem>
                    <DesktopMenuItem to="/readList/cEyfCiMWFORfrga2ju0L1">Science</DesktopMenuItem>
                </DesktopMenu>
            </DesktopNavBar>
        </Container>
    );
}

export default NavBar;