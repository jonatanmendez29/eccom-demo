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
    ];
    return(
        <nav className='flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0 left-0'>
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
                <li>
                    <NavLink to='/shop'
                        className={({isActive}) => isActive ? activeStyle : ''}
                    >
                        <div className='flex w-8 h-8'>
                            <span className='material-symbols-outlined w-7 h-7'>shopping_bag</span>
                            <span className='absolute px-6 text-red-700'>0</span>
                        </div>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar