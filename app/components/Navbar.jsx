import { NavLink, Link } from 'remix';
import { Disclosure } from '@headlessui/react';

const LINKS = [
  { name: 'WORKS', to: '/works' },
  { name: 'ABOUT', to: '/about' },
  { name: 'CONTACT', to: '/contact' },
];

const Navbar = () => {
  return (
    <Disclosure as="nav" className="border-b-[1px] border-light--gray py-3">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-20">
              <Link to="/" className="text-red text-2xl font-bold px-3">
                STUDIO.ARUCA
              </Link>

              <Disclosure.Button className="lg:hidden px-3">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#da1c5c"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </Disclosure.Button>

              <ul className="hidden lg:flex">
                {LINKS.map(link => (
                  <li key={link.to} className="flex px-5">
                    <NavLink
                      key={link.to}
                      to={link.to}
                      className="text-sm hover:text-red"
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden text-right">
            <ul className="px-6 pt-2 pb-3 flex flex-col">
              {LINKS.map(link => (
                <li key={link.to} className="py-3">
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className="px-4 py-2 hover:text-red"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
