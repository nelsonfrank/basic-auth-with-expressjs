// dependencies
import Popup from 'reactjs-popup';

// components
import Profile from '@/resources/icon/profile'


interface MenuProps {
    handleSignOut: () => void
}
const Menu = ({ handleSignOut }: MenuProps) => {
    return (
        <Popup trigger={open => (
            <button className="button"><Profile /></button>
        )} position="bottom right">
            {close => (
                <ul>
                    <li>
                        <button onClick={handleSignOut}>Logout</button>
                    </li>
                </ul>
            )}
        </Popup>
    )
}

export default Menu;