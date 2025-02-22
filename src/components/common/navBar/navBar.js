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
                    <DesktopMenuItem to="/list/24sZYp8CXvrxXb91q8xtfp">Ivan</DesktopMenuItem>
                    <DesktopMenuItem to="/list/50qHiMEtf8Zc8AwK1YvmNY">Dairy</DesktopMenuItem>
                    <DesktopMenuItem to="/list/cEyfCiMWFORfrga2ju0L1">Science</DesktopMenuItem>
                    <DesktopMenuItem to="/list/4Km16MCuLJjxnbXzojqQxz">Lei_Dairy_Video</DesktopMenuItem>
                </DesktopMenu>
            </DesktopNavBar>
        </Container>
    );
}

export default NavBar;