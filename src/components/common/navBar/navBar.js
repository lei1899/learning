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
                {window.innerWidth > 768 ? (
                    <DesktopMenu>
                        <DesktopMenuItem to="/list/listGrammar">Grammar</DesktopMenuItem>
                        <DesktopMenuItem to="/list/kidsDairy">Dairy</DesktopMenuItem>
                        <DesktopMenuItem to="/list/kidsTed">TED</DesktopMenuItem>
                        <DesktopMenuItem to="/list/scienceSnow">Snow</DesktopMenuItem>
                        <DesktopMenuItem to="/list/leiDictation">Dictation</DesktopMenuItem>
                        <DesktopMenuItem to="/list/wordWeekly">WordWeekly</DesktopMenuItem>
                        <DesktopMenuItem to="/list/listHidden">HiddenP</DesktopMenuItem>
                    </DesktopMenu>
                ) : (
                    <select 
                        style={{
                            padding: '8px',
                            fontSize: '16px',
                            border: '1px solid #ccc',
                            borderRadius: '4px'
                        }}
                        onChange={(e) => window.location.href = e.target.value}
                    >
                        <option value="">menu</option>
                        <option value="/list/listGrammar">Grammar</option>
                        <option value="/list/kidsDairy">Dairy</option>
                        <option value="/list/kidsTed">TED</option>
                        <option value="/list/scienceSnow">Snow</option>
                        <option value="/list/leiDictation">Dictation</option>
                        <option value="/list/wordWeekly">WordWeekly</option>
                        <option value="/list/listHidden">HiddenP</option>
                    </select>
                )}
            </DesktopNavBar>
        </Container>
    );
}

export default NavBar;