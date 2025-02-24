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
                    <DesktopMenuItem to="/list/listGrammar">Grammar</DesktopMenuItem>
                    <DesktopMenuItem to="/list/kidsDairy">Dairy</DesktopMenuItem>
                    <DesktopMenuItem to="/list/kidsTed">TED</DesktopMenuItem>
                    <DesktopMenuItem to="/list/scienceSnow">Snow</DesktopMenuItem>
                    <DesktopMenuItem to="/list/leiDictation">Dictation</DesktopMenuItem>
                    <DesktopMenuItem to="/list/wordWeekly">WordWeekly</DesktopMenuItem>
                    <DesktopMenuItem to="/list/listHidden">HiddenP</DesktopMenuItem>
                </DesktopMenu>
            </DesktopNavBar>
        </Container>
    );
}

export default NavBar;