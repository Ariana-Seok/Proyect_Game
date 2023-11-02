import React from "react";
import { NavLink } from 'react-router-dom';
import { SiNintendogamecube } from 'react-icons/si';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import './nav.css';

const Nav : React.FC = () => {
     // const [hasGameInProgress, setHasGameInProgress] = useState(false);
    const hasGameInProgress = true;

    const handleSave = () => {
        console.log('Game Saved')
        };
    const handleLogOut = () => {
        console.log('User Logged Out')
        };

    return (
        <div className="container_nav">
            <nav>
                <div className="container_left">
                    <NavLink to="/">
                        <SiNintendogamecube className="logo" />
                    </NavLink>
                    <NavLink to="/Play" className="nav_item">PLAY</NavLink>
                    <NavLink to="/Characters" className="nav_item">CHARACTERS</NavLink>
                    {hasGameInProgress ? null : <NavLink to="/NewGame">NEW GAME</NavLink>}
                    <button onClick={() => handleSave()} className="btn_save">SAVE GAME</button>
                </div>

                <div className="container_right">
                    <div className="opc_colum">
                        <NavLink to ="/Register" className="opc_register" onClick={() => handleLogOut()}>Login in</NavLink>
                        <select className="language" name="language">
                            <option value="spanish">Español</option>
                            <option value="english">English</option>
                        </select>
                    </div>
                    <NavLink to="/Perfil" className="user-icon-container">
                        <FontAwesomeIcon icon={faCircleUser} />
                    </NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Nav;