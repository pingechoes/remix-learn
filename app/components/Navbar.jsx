import { useState } from 'react';
import { Link } from 'remix';
import { Transition } from '@headlessui/react';

const LINKS = [
  { name: 'WORKS', to: '/works' },
  { name: 'ABOUT', to: '/about' },
  { name: 'CONTACT', to: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-5">
        <div className="container px-4 mx-auto max-w-6xl flex items-center justify-between">
          <div>
            <Link to="/" className="text-red">
              ARUCA.STUDIO
            </Link>
          </div>
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="flex items-center justify-center"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer group"
                >
                  <rect
                    x="12"
                    y="9"
                    width="20"
                    height="2"
                    rx="1"
                    fill="currentColor"
                    className="group-hover:fill-red duration-500"
                  />
                  <rect
                    x="12"
                    y="15"
                    width="20"
                    height="2"
                    rx="1"
                    fill="currentColor"
                    className="group-hover:fill-red duration-500"
                  />
                  <rect
                    x="12"
                    y="21"
                    width="20"
                    height="2"
                    rx="1"
                    fill="currentColor"
                    className="group-hover:fill-red duration-500"
                  />
                </svg>
              ) : (
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  overflow="visible"
                  stroke="#da1c5c"
                  strokeWidth="2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="17" y1="9" x2="32" y2="23" />
                  <line x1="32" y1="9" x2="17" y2="23" />
                </svg>
              )}
            </button>
          </div>

          <ul className="hidden lg:flex">
            {LINKS.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm hover:text-red duration-500 px-3 py-2"
              >
                {link.name}
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {ref => (
          <div className="px-4 mx-auto lg:hidden bg-neutral">
            <div ref={ref} className="px-2 pt-2 pb-3">
              <ul className="flex flex-col">
                {LINKS.map(link => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-sm hover:text-red px-3 py-2"
                  >
                    {link.name}
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        )}
      </Transition>
    </>
  );
};

export default Navbar;
