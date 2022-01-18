// dependencies
import Popup from 'reactjs-popup';

// components
import Profile from '@/resources/icon/profile'

// types
import { User } from '@/common/types/user'
interface MenuProps {
    handleSignOut: () => void
    user: User
}
const Menu = ({ handleSignOut, user }: MenuProps) => {
    console.log(user)
    return (
        <Popup trigger={open => (
            <button className="nxt-inline-flex nxt-flex-col nxt-justify-center nxt-items-center ">
                <Profile userName={user.username} />
                <h2 className='nxt-font-medium nxt-capitalize nxt-text-base'>{user.username}</h2>
            </button>
        )} position="bottom center">
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