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
                    <DesktopMenuItem to="/list/kidsDairy">Dairy</DesktopMenuItem>
                    <DesktopMenuItem to="/list/scienceSnow">Snow</DesktopMenuItem>
                    <DesktopMenuItem to="/list/leiDictation">LeiDictation</DesktopMenuItem>
                </DesktopMenu>
            </DesktopNavBar>
        </Container>
    );
}

export default NavBar;