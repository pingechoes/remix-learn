import { Outlet, LiveReload, Links } from 'remix';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import styles from './styles/app.css';
import tailwindStyles from './tailwind.css';

export const links = () => {
  return [
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'stylesheet', href: styles },
    { rel: 'stylesheet', href: tailwindStyles}
  ];
};

export default function App() {
  return (
    <html lang="eng">
      <head>
        <Links />
        <meta charSet="utf-8"/>
        <title>ARUCA.STUDIO</title>
      </head>
      <body className="text-primary--gray antialiased">
        <Navbar />
        <Outlet className="absolute top-0 w-full h-full"/>
        {process.env.NODE_ENV === 'development' ? <LiveReload /> : null}
        <Footer />
      </body>
    </html>
  );
}