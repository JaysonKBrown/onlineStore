import { Link, Outlet} from 'react-router-dom'

export default function Header() {
    return (
        <header>
        <ul>
            <li>
                <Link to='/'>home</Link>
            </li>
            <li>
                <Link to='/about'>about</Link>
            </li>
            <li>
                <Link to='/store'>store</Link>
            </li>
            <li>
                <Link to='/contact'>contact</Link>
            </li>
            <li>
                <Link to='/blog'>blog</Link>
            </li>
            
        </ul>
        </header>
    )
}
