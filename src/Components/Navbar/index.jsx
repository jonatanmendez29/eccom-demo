import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const activeStyle = 'underline underline-offset-4';
    const menuLeft = [
        {
            to: '/',
            text: 'Shopi',
            className: 'font-semibold text-lg'
        },
        {
            to: '/',
            text: 'All',
            className: ''
        },
        {
            to: '/clothes',
            text: 'Clothes',
            className: ''
        },
        {
            to: '/electronics',
            text: 'Electronics',
            className: ''
        },
        {
            to: '/toys',
            text: 'Toys',
            className: ''
        },
        {
            to: '/others',
            text: 'Others',
            className: ''
        },
    ];
    const menuRight = [
        {
            to: '/my-account',
            text: 'My Accaunt',
            className: ''
        },
        {
            to: '/my-orders',
            text: 'Orders',
            className: ''
        },
        {
            to: '/sing-in',
            text: 'Sign In',
            className: ''
        },
        {
            to: '/shop',
            text: 'shopping_bag 0',
            className: 'material-symbols-outlined'
        },
    ];
    return(
        <nav className='flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light'>
            <ul className='flex items-center gap-3'>
                {menuLeft.map((item, index) => (
                    <li>
                        <NavLink 
                            key={item.text}
                            to={item.to}
                            className={({isActive}) => isActive ? `${item.className} ${activeStyle}` : item.className}
                        >
                            {item.text}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <ul className='flex items-center gap-3'>
                {menuRight.map((item, index) => (
                    <li>
                        <NavLink 
                            key={item.text}
                            to={item.to}
                            className={({isActive}) => isActive ? `${item.className} ${activeStyle}` : item.className}
                        >
                            {item.text}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar