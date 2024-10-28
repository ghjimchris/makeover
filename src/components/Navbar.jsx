import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useAuth } from '../context/AuthContext';
import Logo from '../assets/img/logo2.png';

function Navbar() {
  const { user, logout } = useAuth();

  const navigation = user
    ? [
        { name: 'Dashboard', href: '/dashboard' },
        { name: 'Library', href: '/library' },
      ]
    : [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/#about' },
        { name: 'Team', href: '/#team' },
      ];

  return (
    <Disclosure as="nav" className="bg-white shadow-lg">
      {({ open }) => (
        <>
          <div className="px-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex items-center flex-shrink-0"> <img src={Logo} alt="ESG Dashboard Logo" className="w-20 h-20" />
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="px-3 py-2 text-sm font-medium text-gray-900 rounded-md hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                {user ? (
                  <Menu as="div" className="relative ml-3">
                    <Menu.Button className="flex text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                      <span className="sr-only">Open user menu</span>
                      <div className="flex items-center justify-center w-8 h-8 text-white rounded-full bg-primary">
                        {user.username[0].toUpperCase()}
                      </div>
                    </Menu.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          <Link to="/environmental" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Environmental
                          </Link>
                        </Menu.Item>
                        <Menu.Item>
                          <Link to="/social" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Social
                          </Link>
                        </Menu.Item>
                        <Menu.Item>
                          <Link to="/governance" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Governance
                          </Link>
                        </Menu.Item>
                        <Menu.Item>
                          <button
                            onClick={logout}
                            className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
                          >
                            Sign out
                          </button>
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                ) : (
                  <div className="flex space-x-4">
                    <Link
                      to="/login"
                      className="px-3 py-2 text-sm font-medium text-gray-900 rounded-md hover:text-primary"
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="px-3 py-2 text-sm font-medium text-white rounded-md bg-primary hover:bg-primary-dark"
                    >
                      Register
                    </Link>
                  </div>
                )}
              </div>
              <div className="flex items-center -mr-2 sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block w-6 h-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            {user ? (
              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="flex items-center px-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 text-white rounded-full bg-primary">
                      {user.username[0].toUpperCase()}
                    </div>
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-gray-800">{user.username}</div>
                    <div className="text-sm font-medium text-gray-500">{user.email}</div>
                  </div>
                </div>
                <div className="mt-3 space-y-1">
                  <Link
                    to="/environmental"
                    className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                  >
                    Environmental
                  </Link>
                  <Link
                    to="/social"
                    className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                  >
                    Social
                  </Link>
                  <Link
                    to="/governance"
                    className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                  >
                    Governance
                  </Link>
                  <button
                    onClick={logout}
                    className="block w-full px-4 py-2 text-base font-medium text-left text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                  >
                    Sign out
                  </button>
                </div>
              </div>
            ) : (
              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="space-y-1">
                  <Link
                    to="/login"
                    className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                  >
                    Register
                  </Link>
                </div>
              </div>
            )}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Navbar;