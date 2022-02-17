import { Link } from 'remix'

const Navbar = () => {

  const LINKS = [
    {name:'WORKS', to: '/works'},
    {name:'ABOUT', to: '/about'},
    {name:'CONTACT', to: '/contact'},
  ]

  return (
    <nav className="w-full flex flex-wrap items-center justify-between px-5 py-5 navbar-expand-lg">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="flex h-10 w-10 mr-2 items-center">
          <Link to="/" className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start text-red items-center">
            ARUCA.STUDIO
          </Link>
        </div>
        
        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
          {LINKS.map(link => (
            <Link key={link.to} to={link.to} className="flex items-center md:ml-8 text-sm hover:text-red duration-500">
              {link.name}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar