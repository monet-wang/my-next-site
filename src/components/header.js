import Link from 'next/link';

const Header = () => {
    return (
        <header className="flex items-center justify-between py-4 border-b border-gray-200">
            <nav>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/" className="font-bold text-gray-800 hover:text-gray-600">
                            Home
                        </Link>
                    </li>
                    {/* <li>
                        <Link href="/blog">
                            <a className="font-bold text-gray-800 hover:text-gray-600">Blog</a></Link>
                    </li> */}
                </ul>
            </nav>
            <div>
                <button className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600">
                    <svg
                        className="h-6 w-6 fill-current"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
                    </svg>
                </button>
            </div>
        </header>
    );
};
export default Header;
