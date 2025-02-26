import logo from '../../../logo.svg';
import { Link, useNavigate } from "react-router-dom";
import { Container, DesktopNavBar, DesktopMenuItem, Logo, DesktopMenu, UserName, LogoutButton } from "./navBar.style";
import { useAuth } from '../../../hooks/useAuth';
import { useEffect } from 'react';

function NavBar() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate]);

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    if (!user) {
        return null;
    }
    console.log(user);
    return (
        <Container>
            <DesktopNavBar>
                <Link to="/">
                    <Logo src={logo} />
                </Link>
                {window.innerWidth > 768 ? (
                    <>
                        <DesktopMenu>
                            <DesktopMenuItem to="/list/listGrammar">Grammar</DesktopMenuItem>
                            <DesktopMenuItem to="/list/kidsDairy">Dairy</DesktopMenuItem>
                            <DesktopMenuItem to="/list/kidsTed">TED</DesktopMenuItem>
                            <DesktopMenuItem to="/list/scienceSnow">Snow</DesktopMenuItem>
                            <DesktopMenuItem to="/list/leiDictation">Dictation</DesktopMenuItem>
                            <DesktopMenuItem to="/list/wordWeekly">WordWeekly</DesktopMenuItem>
                            <DesktopMenuItem to="/list/listHidden">HiddenP</DesktopMenuItem>
                        </DesktopMenu>
                        {user && (
                            <div style={{ position: 'relative' }}>
                                <UserName 
                                    onClick={() => {
                                        const dropdown = document.getElementById('userDropdown');
                                        if (dropdown) {
                                            dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
                                        }
                                    }}
                                    style={{ cursor: 'pointer' }}
                                >
                                    {user.username}
                                </UserName>
                                <div 
                                    id="userDropdown"
                                    style={{
                                        display: 'none',
                                        position: 'absolute',
                                        top: '100%',
                                        right: 0,
                                        backgroundColor: 'white',
                                        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                                        borderRadius: '4px',
                                        zIndex: 1000
                                    }}
                                >
                                    <LogoutButton 
                                        onClick={handleLogout}
                                        style={{
                                            width: '100%',
                                            padding: '8px 16px',
                                            textAlign: 'left'
                                        }}
                                    >
                                        logout
                                    </LogoutButton>
                                </div>
                            </div>
                        )}
                    </>
                ) : (
                    <>
                        <select 
                            style={{
                                padding: '8px',
                                fontSize: '16px',
                                border: '1px solid #ccc',
                                borderRadius: '4px'
                            }}
                            onChange={(e) => {
                                if (e.target.value === 'logout') {
                                    handleLogout();
                                } else {
                                    window.location.href = e.target.value;
                                }
                            }}
                        >
                            <option value="">menu</option>
                            <option value="/list/listGrammar">Grammar</option>
                            <option value="/list/kidsDairy">Dairy</option>
                            <option value="/list/kidsTed">TED</option>
                            <option value="/list/scienceSnow">Snow</option>
                            <option value="/list/leiDictation">Dictation</option>
                            <option value="/list/wordWeekly">WordWeekly</option>
                            <option value="/list/listHidden">HiddenP</option>
                            {user && (
                                <>
                                    <option disabled>───────────</option>
                                    <option disabled>{user.name}</option>
                                    <option value="logout">登出</option>
                                </>
                            )}
                        </select>
                    </>
                )}
            </DesktopNavBar>
        </Container>
    );
}

export default NavBar;